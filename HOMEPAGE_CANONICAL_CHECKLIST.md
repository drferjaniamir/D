# Homepage Canonical Tag Fix Checklist

**Objective:** Correct the canonical tag exclusively on the homepage so it outputs `<link rel="canonical" href="https://www.dentavip.com/">` (with the trailing slash), strictly avoiding unnecessary files.

## 1. Homepage Metadata (`src/app/page.tsx`)
- [x] Edit `src/app/page.tsx`
  - [x] Change line 12 from `canonical: "/",` to `canonical: "https://www.dentavip.com/",`
  *(Forces Next.js to use an absolute path, preventing automatic trailing slash removal during resolution).*

## 2. Global Layout Metadata (`src/app/layout.tsx`)
- [x] Edit `src/app/layout.tsx`
  - [x] Change line 12 from `metadataBase: new URL('https://www.dentavip.com'),` to `metadataBase: new URL('https://www.dentavip.com/'),`
  - [x] Change line 22 from `url: "https://www.dentavip.com",` to `url: "https://www.dentavip.com/",`
  *(Ensures the root URL configuration and OpenGraph tags consistently reflect the trailing slash format).*
