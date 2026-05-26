# Remove Homepage Canonical Trailing Slash Checklist

**Objective:** Revert the canonical configuration to remove the trailing slash, ensuring it outputs `https://www.dentavip.com` without a trailing slash.

## 1. Homepage Metadata (`src/app/page.tsx`)
- [x] Edit `src/app/page.tsx`
  - [x] Change `canonical: "https://www.dentavip.com/",` to `canonical: "https://www.dentavip.com",`

## 2. Global Layout Metadata (`src/app/layout.tsx`)
- [x] Edit `src/app/layout.tsx`
  - [x] Change `metadataBase: new URL('https://www.dentavip.com/'),` to `metadataBase: new URL('https://www.dentavip.com'),`
  - [x] Change `url: "https://www.dentavip.com/",` to `url: "https://www.dentavip.com",`
