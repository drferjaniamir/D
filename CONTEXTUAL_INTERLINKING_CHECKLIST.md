# Checklist: Contextual Interlinking System

This checklist outlines the steps to add "Source Page" control to your interlinking system, allowing you to choose exactly which pages show which links.

## 1. Database Upgrade (Supabase)
- [x] **Modify Table**: Add a new column to `internal_links` called `source_slug` (Text, Nullable).
- [x] **Data Rule**:
    - [x] If `source_slug` is empty (NULL), the link is **Global** (shows on all pages).
    - [x] If `source_slug` has a value (e.g., "implant-unitaire"), the link **only** shows on that specific page.
- [x] **Data Entry**: Update your test data to try a "Page-Specific" link.

## 2. Logic Upgrade (Next.js)
- [x] **Update Utility**: Modify `applyInternalLinks` in `src/lib/linkContent.ts` to:
    - [x] Accept a new parameter: `currentSlug`.
    - [x] Filter the keywords: Only use links where `source_slug` is NULL **OR** matches `currentSlug`.
- [x] **Smart Protection**: Ensure that if a word is already the title of the page, it doesn't link to itself (SEO Best Practice).

## 3. Page Integration
- [x] Update `src/app/services/[slug]/[subSlug]/page.tsx` to pass the `subSlug` to the linker function.
- [x] Verify that "Global" links still work everywhere, but "Specific" links only show where they are supposed to.

## 4. SEO & Integrity
- [ ] **No-Self-Link**: Verify no page links to its own URL (which can confuse Google).
- [ ] **Consistency**: Ensure the design/styling remains premium and identical for all links.

---
**Status:** 
- [ ] Approved by User
- [ ] Ready for Implementation
