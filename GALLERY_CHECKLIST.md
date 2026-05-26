# Before/After Gallery Implementation Checklist

**Objective:** Add a dynamic, premium before/after image compare gallery to the `/transformation` page. The gallery will retrieve case data and image URLs directly from Supabase, allowing new cases to be added via the database without code modifications.

---

## 1. Supabase Backend Setup
- [x] **Create Database Table (`gallery_cases`)**
  - [x] Create a table named `gallery_cases` with the following schema:
    - `id` (uuid, primary key, default: `gen_random_uuid()`)
    - `title` (text, not null)
    - `description` (text)
    - `before_image_url` (text, not null)
    - `after_image_url` (text, not null)
    - `order` (integer, default: 0)
    - `created_at` (timestamptz, default: `now()`)
  - [x] Enable Row Level Security (RLS) and create a policy to allow public read access (`SELECT`).
- [x] **Configure Supabase Storage**
  - [x] Create a public storage bucket named `gallery` for storing before/after comparison images.
  - [x] Create an RLS policy for the `gallery` bucket to allow public read access to objects.

## 2. Image Compare Component
- [x] **Create Component (`src/components/sections/BeforeAfterSlider.tsx`)**
  - [x] Build a responsive, touch-friendly image slider component.
  - [x] Implement mouse and touch event listeners to drag the divider handle left/right.
  - [x] Ensure standard image styling and container aspect ratio are maintained.
  - [x] Provide clear "Avant" (Before) and "Après" (After) visual indicators.

## 3. Transformation Page Integration (`src/app/transformation/page.tsx`)
- [x] **Fetch Cases from Supabase**
  - [x] Import the Supabase client (`src/lib/supabase.ts`).
  - [x] Query cases from the `gallery_cases` table sorted by the `order` column.
- [x] **Integrate UI Layout**
  - [x] Map through the fetched cases and display them in a modern, responsive grid.
  - [x] Replace the placeholder static content with the dynamic list of sliders.
  - [x] Ensure fallback state styling (e.g., if no cases are returned).

## 4. Verification & Testing
- [ ] Run Next.js build validation check to confirm typescript and compilation correctness:
  `npm run build`
