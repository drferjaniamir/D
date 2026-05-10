# UI Fix Checklist – Logo & Layout

## Header Fixes (Global)
- [ ] **Restrict Logo Size**: Update `src/components/common/Header.tsx` to force `height: 44px` and `width: auto` via inline styles to prevent Tailwind/Global CSS overrides.
- [ ] **Check Container**: Verify `Header.module.css` to ensure `.logo` doesn't have `width: 100%`.

## Services Page Layout (Local)
- [ ] **Increase Top Padding**: Update `src/app/services/page.tsx` main wrapper `paddingTop` from `100px` to `140px` to prevent overlap with the fixed header.
- [ ] **Verify Typography**: Ensure `.highlight` (Ariana) and `.label` (Notre Expertise) are correctly picking up the clinical blue color from the CSS variables.

## Verification
- [ ] **Mobile Responsiveness**: Check if the logo stays small on mobile devices.
- [ ] **Browser Refresh**: Confirm that `npm run dev` reflects changes without caching issues.
