# Address Update Checklist

**Goal:** Update the physical address of the clinic across the entire application to: 
`14 Rue Hamza Ibn Abdelmotaleb, Ariana 2083, Tunisie`

## Files to Update

- [ ] `src/components/common/Footer.tsx`
  - Update the displayed address string inside the footer contact section.
  - Current: `14 hamza ibn abdelmotaleb, Ariana Essoghra 2083`
  - New: `14 Rue Hamza Ibn Abdelmotaleb, Ariana 2083, Tunisie`

- [ ] `src/app/layout.tsx`
  - Update the JSON-LD structured data for local SEO.
  - Update `streetAddress` to `"14 Rue Hamza Ibn Abdelmotaleb"`
  - Update `addressLocality` to `"Ariana"`
  - Ensure `postalCode` remains `"2083"`


## Verification Steps
- [ ] (Skipped) Browser testing as requested.
- [ ] Verify `npm run build` or `npm run lint` completes without errors.
- [ ] Double-check that no other components reference the old address by running a workspace search.
