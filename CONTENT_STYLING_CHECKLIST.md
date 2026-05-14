# Checklist: Premium Content Styling System

This checklist outlines the steps to implement a professional styling system for the content fetched from Supabase. The goal is to allow the user to paste structured HTML (H2, H3, P, UL) into Supabase and have it look "premium" on the site automatically.

## 1. Page Structure (Next.js)
- [x] Open `src/app/services/[slug]/[subSlug]/page.tsx`.
- [x] Find the container rendering `subService.content`.
- [x] Add the CSS class `styles.richContent` to the container:
  ```tsx
  <div className={styles.richContent} dangerouslySetInnerHTML={{ __html: subService.content }} />
  ```

## 2. Design System (CSS)
- [x] Open `src/app/services/[slug]/ServiceDetail.module.css`.
- [x] **Container Spacing**: Add margin and font defaults for `.richContent`.
- [x] **Headings (H2)**: 
    - [x] Set font-size (e.g., `2rem`).
    - [x] Set color (e.g., `#0f172a`).
    - [x] Add `margin-top: 2.5rem` and `margin-bottom: 1rem`.
- [x] **Sub-Headings (H3)**:
    - [x] Set font-size (e.g., `1.5rem`).
    - [x] Set weight and spacing.
- [x] **Paragraphs (P)**:
    - [x] Set `line-height: 1.7` for readability.
    - [x] Set color (`#475569`).
    - [x] Add `margin-bottom: 1.5rem`.
- [x] **Lists (UL/LI)**:
    - [x] Style bullet points.
    - [x] Add indentation and spacing between items.

## 3. SEO & Integrity
- [x] **H1 Check**: Ensure the system-generated H1 (Service Title) remains the only H1.
- [x] **Meta Tags**: Ensure no changes are made to `generateMetadata`.
- [x] **Plain Text Compatibility**: Verify that existing plain-text content still looks acceptable.

## 4. Performance & Live Updates
- [x] **ISR Configuration**: Added `export const revalidate = 60;` to ensure Supabase updates appear live automatically.

---
**Status:** 
- [x] Approved by User
- [x] Ready for Implementation
- [x] Implementation Complete
