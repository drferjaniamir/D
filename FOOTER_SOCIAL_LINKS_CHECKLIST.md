# Footer Social Links Upgrade Checklist (LinkedIn & Pinterest)

**Goal:** Add LinkedIn and Pinterest social icons/links alongside Instagram, Facebook, and Twitter in the Footer component ([`src/components/common/Footer.tsx`](file:///c:/Users/dell/Dentiste/src/components/common/Footer.tsx)).

## Target Links & Icons

1. **LinkedIn**
   - URL: `https://www.linkedin.com/company/cabinet-dentaire-dr-ferjani-amir`
   - Icon: `Linkedin` from `lucide-react`
2. **Pinterest**
   - URL: `https://www.pinterest.com/drferjaniamir/`
   - Icon: Custom SVG / Pinterest icon component (or available `lucide-react` icon)

## Planned Changes

- [x] **`src/components/common/Footer.tsx`**
  - Keep all 5 social links together (Instagram, Facebook, Twitter, LinkedIn, Pinterest) without deleting any existing social icons:
    1. **Instagram:** Existing icon/link (preserved)
    2. **Facebook:** Existing icon/link (preserved)
    3. **Twitter:** Existing icon/link (preserved)
    4. **LinkedIn:** `https://www.linkedin.com/company/cabinet-dentaire-dr-ferjani-amir` (`Linkedin` icon)
    5. **Pinterest:** `https://www.pinterest.com/drferjaniamir/` (Pinterest SVG icon)

## Verification Steps

- [x] Verify TypeScript imports and syntax in `Footer.tsx`.
- [x] Run `npm run build` to confirm static rendering and component compilation pass cleanly.
- [x] Inspect visual layout of social icons in the footer on mobile and desktop viewports.
