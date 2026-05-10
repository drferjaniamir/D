# SEO Build Checklist – Dentavip

## Files to CREATE (no existing files touched)
- [ ] src/app/services/page.tsx
- [ ] src/app/areas/page.tsx
- [ ] src/app/areas/[slug]/page.tsx
- [ ] src/data/areas.ts

## Files to MODIFY (carefully, minimal changes)
- [ ] src/components/sections/Services.tsx — replace 7-card grid with 2 cards (Services + Areas)
- [ ] src/app/sitemap.ts — add /services, /areas, /areas/[slug] URLs

## Files to NEVER touch
- [ ] src/app/services/[slug]/page.tsx
- [ ] src/app/layout.tsx
- [ ] src/app/robots.ts
- [ ] src/components/common/Header
- [ ] src/components/common/Footer
- [ ] src/components/sections/Hero

## Data sources
- Services data → src/data/services.ts (already exists, do not modify)
- Areas data → src/data/areas.ts (new file, to create)

## Done when
- [ ] /services lists all 7 services linking to /services/[slug]
- [ ] /areas lists all 6 areas linking to all 6 /areas/[slug] pages
- [ ] Each /areas/[slug] has 500+ words, metadata, and links back to /services/[slug]
- [ ] Homepage Services section shows 2 cards only
- [ ] Sitemap includes all new URLs
