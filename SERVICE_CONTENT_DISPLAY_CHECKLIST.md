# Checklist: Display Service Content Below Sub-services

This checklist outlines the steps required to render the dynamic rich text `content` from the Supabase `services` table on the service details page (`/services/[slug]`), positioned below the sub-services listing.

## [x] Phase 1: Create Backup
- [x] Ensure `src/app/services/[slug]/page.tsx` is backed up/committed.

## [x] Phase 2: Code Changes in `src/app/services/[slug]/page.tsx`
- [x] **Import link utilities**:
  ```typescript
  import { getInternalLinks, applyInternalLinks } from '@/lib/linkContent';
  ```
- [x] **Fetch internal links & keywords** in `ServicePage` component:
  ```typescript
  const internalLinks = await getInternalLinks();
  ```
- [x] **Process the content** using the internal links parser:
  ```typescript
  const linkedContent = service.content 
    ? applyInternalLinks(service.content, internalLinks, slug) 
    : null;
  ```
- [x] **Render the content below the sub-services grid**:
  Position the section markup right after the `subServicesSection` (which contains the grid of sub-services) and before the `cta` section:
  ```tsx
  {linkedContent && (
    <section className={styles.subServicesSection} style={{ marginTop: '2rem', marginBottom: '4rem' }}>
      <div className={styles.richContent} dangerouslySetInnerHTML={{ __html: linkedContent }} />
    </section>
  )}
  ```

## [x] Phase 3: Verification (To be executed only after approval)
- [x] Run `npm run build` to verify there are no Next.js build errors or static path problems.
- [x] Manually visit `/services/[slug]` to ensure the service content appears beautifully below the sub-services grid.
- [x] Verify that any matched SEO keywords in the content are correctly converted into internal links.
