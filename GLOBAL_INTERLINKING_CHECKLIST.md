# Checklist: Global Interlinking System

This checklist outlines the steps to implement a "Smart Linker" that automatically turns keywords into internal links based on a Supabase table.

## 1. Database Setup (Supabase)
- [x] **Create Table**: Add a new table called `internal_links` in the `public` schema.
- [x] **Columns**:
    - `id` (UUID, primary key)
    - `keyword` (Text, unique): The word to find (e.g., "urgence").
    - `target_url` (Text): The page to link to (e.g., "/services/urgences-dentaires").
- [x] **Data Entry**: Add 3-5 initial keywords and links for testing.

## 2. Logic Implementation (Next.js)
- [x] **Utility Function**: Create a `linkContent` function that:
    - [x] Fetches the list of keywords from Supabase.
    - [x] Uses a Regular Expression (Regex) to find keywords in the content.
    - [x] Wraps the keywords in `<a href="...">` tags.
- [x] **Smart Rule**: Ensure it only links the **first occurrence** of a word on each page to avoid looking like spam.
- [x] **Exclusion Rule**: Ensure it doesn't try to link words that are already inside an `<h1>` or another `<a>` tag.

## 3. Design & Styling (CSS)
- [x] **Link Styling**: Define the "Premium Link" look in `ServiceDetail.module.css`.
    - [x] Color: Brand Blue (`#0ea5e9`).
    - [x] Weight: Semi-bold.
    - [x] Hover effect: Smooth underline or color change.

## 4. Page Integration
- [x] Update `src/app/services/[slug]/[subSlug]/page.tsx` to process the content through the `linkContent` function before rendering.
- [x] Verify that the links are clickable and lead to the correct pages.

## 5. SEO & Performance
- [ ] **Verification**: Confirm that internal links are correctly seen by Google bots.
- [ ] **Caching**: Ensure the keyword list is fetched efficiently (revalidation).

---
**Status:** 
- [ ] Approved by User
- [ ] Ready for Implementation
