# Pinterest Schema Integration Checklist

**Goal:** Integrate the Pinterest profile link (`https://www.pinterest.com/drferjaniamir/`) into the JSON-LD `Dentist` schema `sameAs` array in `src/app/layout.tsx`.

## Task Details

- [x] **`src/app/layout.tsx`**
  - Add Pinterest link alongside LinkedIn in the JSON-LD `Dentist` schema `sameAs` array (keeping both LinkedIn AND Pinterest):
    - **Before:** `"sameAs": ["https://www.linkedin.com/company/cabinet-dentaire-dr-ferjani-amir"]`
    - **After (both links preserved):** `"sameAs": ["https://www.linkedin.com/company/cabinet-dentaire-dr-ferjani-amir", "https://www.pinterest.com/drferjaniamir/"]`

## Verification Steps

- [x] Verify `src/app/layout.tsx` JSON syntax and structure.
- [x] Test build/linting to ensure no runtime or static analysis regressions.
- [x] Validate JSON-LD output structure.
