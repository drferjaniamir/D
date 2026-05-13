# Supabase Migration Checklist

**Important Rules:**
- Do not skip any step.
- Follow every step exactly in order.
- Do not change anything not explicitly asked for.
- **Do NOT delete `src/data/services.ts` until explicitly confirmed.**
- **Do NOT touch `src/app/layout.tsx` at all.**

---

- [x] **Step 1 — Install Supabase**
  - [x] Run `npm install @supabase/supabase-js`

- [x] **Step 2 — Create Supabase client**
  - [x] Create a new file at `src/lib/supabase.ts`
  - [x] Use environment variables: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`

- [x] **Step 3 — Create tables in Supabase via MCP**
  - [x] Create `services` table:
    - [x] `id` → uuid, primary key, default gen_random_uuid()
    - [x] `slug` → text, unique, not null
    - [x] `title` → text, not null
    - [x] `description` → text
    - [x] `content` → text
    - [x] `image_url` → text
    - [x] `seo_title` → text
    - [x] `seo_description` → text
    - [x] `order` → integer, default 0
  - [x] Create `sub_services` table:
    - [x] `id` → uuid, primary key, default gen_random_uuid()
    - [x] `service_id` → uuid, foreign key references services.id, on delete cascade
    - [x] `slug` → text, not null
    - [x] `title` → text, not null
    - [x] `description` → text
    - [x] `content` → text
    - [x] `image_url` → text
    - [x] `seo_title` → text
    - [x] `seo_description` → text
    - [x] `order` → integer, default 0
    - [x] unique constraint on (service_id, slug)

- [x] **Step 4 — Migrate existing data via MCP**
  - [x] Read `src/data/services.ts` and insert all services into the `services` table.
  - [x] For each service, insert its subServices into `sub_services` linked by `service_id`.
  - [x] Generate clean URL-friendly slug for each sub-service from its title.
  - [x] For `seo_title` and `seo_description` of parent services, copy values from the hardcoded `seoMeta` object in `src/app/services/[slug]/page.tsx`.
  - [x] Leave `content` and `image_url` empty for now.

- [x] **Step 5 — Update `src/app/services/page.tsx`**
  - [x] Replace static file import with Supabase fetch.
  - [x] Fetch all rows from `services` table ordered by `order` column.
  - [x] Keep Server Component.
  - [x] Keep exact same design.

- [x] **Step 6 — Update `src/app/services/[slug]/page.tsx`**
  - [x] **Data:** Replace static file import and `seoMeta` object with Supabase fetch. Fetch service by slug from `services` table. Fetch its sub-services from `sub_services` table ordered by `order`.
  - [x] **generateStaticParams:** Fetch all slugs from `services` table in Supabase instead of static file.
  - [x] **generateMetadata:** Use `seo_title` and `seo_description` from Supabase. If empty fall back to `title` and `description`. Keep the exact same `canonical`, `openGraph` and all other metadata fields as they are today.
  - [x] **JSON-LD:** Replace the current `@type: "Dentist"` JSON-LD with `@type: "MedicalProcedure"` built dynamically from Supabase data.
  - [x] **Sub-services display:** Keep the exact same card design but make each sub-service card a clickable link pointing to `/services/[slug]/[subSlug]`.

- [x] **Step 7 — Create `src/app/services/[slug]/[subSlug]/page.tsx`**
  - [x] **generateStaticParams:** Fetch all services and their sub-services from Supabase. Return all slug and subSlug combinations.
  - [x] **generateMetadata:** Use `seo_title` and `seo_description` from Supabase for the sub-service. If empty fall back to `title` and `description`. Include `canonical`, `openGraph` exactly like the parent service page.
  - [x] **Page component:** Server Component. Fetch the parent service by slug and the sub-service by subSlug from Supabase. Return `notFound()` if either is not found. Display title, description and content. Keep the same visual style as the parent service page.
  - [x] **JSON-LD:** Dynamic `@type: "MedicalProcedure"` built from sub-service Supabase data.

- [x] **Step 8 — Update `src/app/areas/ariana-ville/page.tsx`**
  - [x] Replace static file import with Supabase fetch from `services` table. Keep everything else exactly the same.

- [x] **Step 9 — Update `src/app/areas/ariana-essoghra/page.tsx`**
  - [x] Replace static file import with Supabase fetch from `services` table. Keep everything else exactly the same.

- [x] **Step 10 — Update `src/app/sitemap.ts`**
  - [x] Replace static file import with Supabase fetch.
  - [x] Include all parent service URLs: `https://www.dentavip.com/services/[slug]`
  - [x] Include all sub-service URLs: `https://www.dentavip.com/services/[slug]/[subSlug]`
  - [x] Fetch both tables from Supabase to generate the complete list.

- [x] **Step 11 — Confirm everything**
  - [x] List every file that was modified.
  - [x] List every file that was created.
  - [x] Confirm the two Supabase tables were created successfully.
  - [x] Confirm all existing data was inserted correctly with the correct slugs.
  - [x] Ensure `src/data/services.ts` was NOT deleted.
  - [x] Ensure `src/app/layout.tsx` was NOT touched.
