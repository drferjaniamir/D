# Emergency Deployment Fix Checklist

> [!IMPORTANT]
> **CRUCIAL RULES:**
> - DO NOT touch the `<h1>` of any service page.
> - DO NOT touch the `<title>` tags (metadata) of any page.

## 1. Global Header (Fixes Giant Logo)
- [x] **Force Logo Dimensions**: Edit `src/components/common/Header.tsx`.
  - Add inline style to `<img>`: `style={{ height: '44px', width: 'auto', display: 'block' }}`.
  - This prevents Tailwind v4/Global CSS from making the logo full-width.

## 2. Global Footer (Fixes Giant Footer Logo)
- [x] **Force Footer Logo Dimensions**: Edit `src/components/common/Footer.tsx`.
  - Add inline style to `<img>`: `style={{ height: '36px', width: 'auto', display: 'block' }}`.
  - This prevents the giant white square from breaking the footer layout.

## 3. Services Page (Fixes Layout Overlap)
- [x] **Increase Top Spacing**: Edit `src/app/services/page.tsx`.
  - Update `<main style={{ paddingTop: '100px' }}>` to `paddingTop: '140px'`.
  - Verify that the title "Nos Services Dentaires à Ariana" is fully visible.

## 4. Homepage (Fixes "Gateway" Entrance)
- [x] **Verify 2-Card Layout**: Check `src/components/sections/Services.tsx`.
  - Ensure it only shows the "Nos Services" and "Zones Desservies" cards.
  - Ensure the "Services" card links to `/services`.
  - Ensure the "Zones" card links to `/areas`.

## 5. Global Navigation (Fixes Header/Footer Links)
- [x] **Update Header Link**: Change "Services" in `Header.tsx` from `/#services` to `/services`.
- [x] **Update Footer Link**: Ensure the Footer links also point to `/services` instead of sections.

## 6. Final Sanity Check
- [ ] **Visual Audit**: Run `npm run dev` and check Home and Services.
- [ ] **Responsive Check**: Ensure the logo stays small on mobile.
