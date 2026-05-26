# Canonical URL and Trailing Slash Fix Checklist

**Objective:** Ensure all pages have a `<link rel="canonical">` pointing to the `https://www.dentavip.com/` version (with a trailing slash) and internal links align with this structure to resolve Google Search Console "Duplicate, Google chose different canonical than user" warnings.

## 1. Global Next.js Configuration
- [ ] Edit `next.config.ts`
  - [ ] Add `trailingSlash: true` configuration rule.

## 2. Layout & Base Metadata
- [ ] Edit `src/app/layout.tsx`
  - [ ] Update `metadataBase` to `new URL('https://www.dentavip.com/')`
  - [ ] Update `openGraph.url` to `https://www.dentavip.com/`

## 3. Explicit Canonical Tags on Pages
Update the `export const metadata` block in the following files to ensure `alternates.canonical` includes a trailing slash (e.g., `canonical: '/about/'`).
- [ ] `src/app/page.tsx` *(verify root `/` is correct)*
- [ ] `src/app/about/page.tsx`
- [ ] `src/app/contact/page.tsx`
- [ ] `src/app/services/page.tsx`
- [ ] `src/app/services/[slug]/page.tsx` *(if metadata is exported)*
- [ ] `src/app/services/[slug]/[subSlug]/page.tsx` *(if metadata is exported)*
- [ ] `src/app/transformation/page.tsx`
- [ ] `src/app/areas/page.tsx`
- [ ] `src/app/areas/ariana-ville/page.tsx`
- [ ] `src/app/areas/ariana-essoghra/page.tsx`

## 4. Internal Link Standardization
Update all internal Next.js `<Link href="...">` components to explicitly end with a trailing slash to avoid redirect hops.
- [ ] `src/components/common/Header.tsx`
- [ ] `src/components/common/Footer.tsx`
- [ ] Any other significant page components (e.g., `src/app/page.tsx` or `src/components/sections/Hero.tsx`, `CTA.tsx`) that contain internal links.

## 5. Verification
- [ ] Build the project and verify no compilation errors occur.
- [ ] Inspect the DOM or page source on `localhost` (or preview) to ensure `<link rel="canonical" href=".../">` is rendering with the trailing slash.
- [ ] Verify internal links hover state shows the trailing slash.
