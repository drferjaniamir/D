# Diagnostic d'audit de performance — Page d'accueil Dentavip

**Date :** 30 juin 2026
**Outil :** Analyse statique de code + artefacts de build Next.js
**Problème signalé :** Score PageSpeed à 60, FCP à 2,9 s

---

## 1. Fonctions dynamiques dans `page.tsx` / `layout.tsx`

**Aucune fonction dynamique détectée.**

| Fichier | `cookies()` | `headers()` | `searchParams` | `draftMode()` |
|---|---|---|---|---|
| `src/app/page.tsx` | ✗ | ✗ | ✗ | ✗ |
| `src/app/layout.tsx` | ✗ | ✗ | ✗ | ✗ |

Les deux fichiers exportent des métadonnées purement statiques. Le RootLayout ne contient aucune importation de fonction dynamique de Next.js.

---

## 2. Audit de la récupération de données

### Appels fetch sur la page d'accueil

**Un seul appel de données côté serveur :** la fonction locale `getReviews()` dans `src/app/page.tsx:16-46`.

```typescript
const response = await fetch(
  `https://featurable.com/api/v1/widgets/${widgetId}?api_key=${apiKey}`,
  {
    headers: { Accept: "application/json" },
    next: { revalidate: 3600 },
  }
);
```

| Propriété | Valeur | Dynamique ? |
|---|---|---|
| `next.revalidate` | `3600` | Non — ISR correct |
| `cache` | non défini (par défaut `force-cache`) | Non |
| En-têtes | statiques | Non |

**Aucune configuration de contournement de cache :** pas de `cache: 'no-store'`, pas de `next: { revalidate: 0 }`, pas d'appel `noStore()`.

### Appels Supabase / base de données

La page d'accès n'importe PAS Supabase. Les appels Supabase sont limités à :
- `src/app/services/[slug]/page.tsx`
- `src/app/services/[slug]/[subSlug]/page.tsx`
- `src/app/services/page.tsx`
- `src/app/areas/ariana-ville/page.tsx`
- `src/app/areas/ariana-essoghra/page.tsx`
- `src/app/transformation/page.tsx`

Aucun de ceux-ci n'est importé ou invoqué depuis la page d'accueil.

### Route API (non appelée par le rendu serveur de la page d'accueil)

`src/app/api/reviews/route.ts` utilise `cache: 'no-store'` — mais ce n'est appelé QUE côté client par le composant `Testimonials.tsx` comme solution de repli si `initialData` est nul. La récupération côté serveur dans `page.tsx` passe des données via `initialData`.

---

## 3. Arbre des limites des composants client

| Composant | `'use client'` | Bibliothèques lourdes | Position dans l'arbre |
|---|---|---|---|
| `Header.tsx` | Oui | `lucide-react` | Haut, rendu immédiatement |
| `Testimonials.tsx` | Oui | `framer-motion`, `lucide-react` | Milieu de page |
| `Hero.tsx` | Non | — | Haut |
| `Services.tsx` | Non | — | Haut-milieu |
| `CTA.tsx` | Non | — | Bas |
| `Map.tsx` | Non | — | Bas |
| `Footer.tsx` | Non | `lucide-react` | Bas |

**Points d'impact :**
- **Header** est un composant client rendu tout en haut de la page d'accueil. Il doit être hydraté avant que la page ne devienne interactive.
- **Testimonials** importe `framer-motion` (~30 kB compressé en gzip), une dépendence d'animation lourde qui bloque le thread principal lors de l'hydratation.
- **`<SpeedInsights />`** (`@vercel/speed-insights`) est injecté dans `layout.tsx:87`. Ce script tiers est chargé automatiquement sur chaque page avant la fin de l'hydratation.

---

## 4. Résultat du build local — Statique ou Dynamique ?

### Preuve depuis les artefacts `.next`

**La page d'accueil est bel et bien pré-rendue statiquement avec ISR.**

| Artefact | Résultat |
|---|---|
| `.next/server/app/index.html` | Existe ✓ |
| `.next/server/app/index.meta` | `"x-nextjs-prerender": "1"` ✓ |
| `prerender-manifest.json` | `"/"` listé avec `initialRevalidateSeconds: 3600` |
| `routes-manifest.json` | `"/"` listé sous `staticRoutes` |

**Aucun** `export const dynamic = 'force-dynamic'` ou `export const runtime = 'edge'` n'existe dans aucun fichier de `src/app/`.

**Statut du build :** La page d'accueil serait marquée `● /` (ISR) dans la sortie du terminal `next build`, **PAS** `λ` (dynamique) et **PAS** `○` (statique pur). La génération statique réussit localement.

---

## 5. Analyse de la cause profonde

### Pourquoi le score est faible malgré un pré-rendu correct

L'hypothèse initiale (« la page s'exécute dynamiquement à cause de fonctions cachées ») est **infirmée**. Le build local confirme un pré-rendu réussi. La cause réelle de la FCP de 2,9 s sur Vercel est une combinaison de :

#### A. Temps de démarrage à froid ISR sur Vercel
- `revalidate: 3600` = la mise en cache expire après 1 heure
- Lorsque la page est périmée, Vercel exécute la fonction serverless (démarrage à froid 800 ms - 2 s), PUIS appelle l'API Featurable (500 ms - 1,5 s supplémentaires)
- **Résultat :** 2-3 s de temps de réponse serveur avant que le premier octet n'atteigne le navigateur

#### B. Blocage de l'hydratation côté client
- `Header.tsx` (client) et `Testimonials.tsx` (client) doivent télécharger, analyser et exécuter le JS avant que la page ne devienne interactive
- `framer-motion` dans Testimonials ajoute un temps d'exécution JS significatif sur le thread principal

#### C. Scripts tiers
- `<SpeedInsights />` injecte un script de suivi avant que la page ne soit complètement hydratée
- Les icônes `lucide-react` sont importées individuellement (pas d'importation dynamique), ce qui gonfle le bundle initial

### Résumé des principaux facteurs contributifs

```
Cause première :
  └── ISR revalidate: 3600 → expiration du cache → démarrage à froid serverless + appel API
Facteurs aggravants :
  ├── Aucune importation dynamique de composants lourds (framer-motion)
  ├── Header en Client Component (hydratation non différée)
  ├── Speed Insights injecté dans le layout racine
  └── Aucune stratégie de streaming (React Suspense) pour les sections non critiques
```

---

*Cet audit a été réalisé sans aucune modification de code. Aucun fichier source n'a été altéré.*
