# Checklist: Service Detail Navigation Fix

This checklist tracks the task of correcting the "Retour aux services" link destination on the individual service pages.

## Task
- [x] Update back link in `src/app/services/[slug]/page.tsx`
  - [x] Locate the `<Link>` element with `href="/#services"`
  - [x] Change `href` to `"/services"`
  - [x] Ensure the label "Retour aux services" remains unchanged
  - [x] Verify that no other logic or SEO metadata is affected

## Verification
- [ ] Navigate to any sub-service page (e.g., `/services/implants-dentaires`)
- [ ] Click the "Retour aux services" button
- [ ] Confirm it redirects to the dedicated `/services` page instead of the homepage
