# Phone and LinkedIn Update Checklist

**Goal:** Update the phone number to display with the country code and add the LinkedIn URL to the schema.

## Files to Update

- [ ] **`src/components/common/Header.tsx`**
  - Update display text `26 790 175` to `+216 26 790 175`.
- [ ] **`src/components/common/Footer.tsx`**
  - Update display text `26 790 175` to `+216 26 790 175`.
- [ ] **`src/app/contact/page.tsx`**
  - Update display text `26 790 175` to `+216 26 790 175`.
- [ ] **`src/app/layout.tsx`**
  - Add `"sameAs": ["https://www.linkedin.com/company/cabinet-dentaire-dr-ferjani-amir"]` to the JSON-LD `Dentist` schema.

## Verification

- [ ] Check display format in Header (desktop and mobile)
- [ ] Check display format in Footer
- [ ] Check display format on Contact Page
- [ ] Check telephone schema and ensure sameAs includes LinkedIn URL
- [ ] Ensure all `tel:` links are correct

## Changes Made (Diff)

### `src/components/common/Header.tsx` (2 changes)
- **Line 34:** `<span>26 790 175</span>` → `<span>+216 26 790 175</span>` (mobile phone)
- **Line 42:** `<span>26 790 175</span>` → `<span>+216 26 790 175</span>` (CTA phone)

### `src/components/common/Footer.tsx` (1 change)
- **Line 64:** `<span><Phone size={16} /> 26 790 175</span>` → `<span><Phone size={16} /> +216 26 790 175</span>`

### `src/app/contact/page.tsx` (1 change)
- **Line 89:** `26 790 175 →` → `+216 26 790 175 →`

### `src/app/layout.tsx` (1 change)
- **Line 61:** Added `"sameAs": ["https://www.linkedin.com/company/cabinet-dentaire-dr-ferjani-amir"]` to JSON-LD `Dentist` schema.
