# Supabase Migration Summary

This document serves as a record of the migration from static local data (`src/data/services.ts`) to a Supabase-backed dynamic implementation. 
If anything stops working or behaves unexpectedly after the migration, reference this document to understand exactly what was changed, added, or verified during the process.

## Files Modified

*   **`package.json`** and **`package-lock.json`**: Installed the `@supabase/supabase-js` client SDK.
*   **`src/app/services/page.tsx`**: Switched from static local imports to fetching the list of services dynamically from Supabase. The `iconMap` was also updated to rely on unique service `slug` strings instead of legacy IDs.
*   **`src/app/services/[slug]/page.tsx`**: Updated to fetch the specific parent service and its sub-services from Supabase. Modified the SEO metadata generation to use database columns (`seo_title`, `seo_description`). Updated JSON-LD to `@type: "MedicalProcedure"` and wrapped the displayed sub-service cards in `<Link>` components for routing.
*   **`src/app/areas/ariana-ville/page.tsx`**: Replaced static services import with a dynamic Supabase fetch. Updated the `iconMap` to use slugs.
*   **`src/app/areas/ariana-essoghra/page.tsx`**: Replaced static services import with a dynamic Supabase fetch. Updated the `iconMap` to use slugs.
*   **`src/app/sitemap.ts`**: Transformed into an async function to dynamically pull both parent service URLs and all sub-service URLs directly from the Supabase tables.
*   **`supabase_migration_checklist.md`**: Marked all steps as completed.
*   **`mcp_config.json`**: Resolved linting errors (unrelated to Supabase, but done during the same workspace session).

## Files Created

*   **`src/lib/supabase.ts`**: Contains the Supabase client initialization using environment variables (`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
*   **`src/app/services/[slug]/[subSlug]/page.tsx`**: A brand new dynamic route created to handle the individual sub-services. Contains its own metadata generation, static params fetch, and styled React Server Component displaying nested content.
*   **`generate_sql.js`**: A temporary NodeJS script used to parse the legacy TypeScript data structure and build the `INSERT` SQL commands.
*   **`migration.sql`**: The actual generated SQL file executed in the database to populate it.

## Verifications & Integrity

*   **Tables:** Two new public tables (`services` and `sub_services`) were created successfully via DDL. They are correctly linked by a foreign key constraint with cascade deletion.
*   **Data integrity:** All existing data, including the HTML content and SEO metadata, was correctly populated. Proper URL-friendly slugs (e.g., `implants-dentaires`) were generated for everything.
*   **Preserved files:** 
    *   `src/data/services.ts` was **NOT** deleted. It remains as a backup reference.
    *   `src/app/layout.tsx` was **NOT** touched, preserving all core layout structures.

## Troubleshooting Tips

If you encounter the error `Error: Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.` during `npm run build`:
*   **Fix:** Ensure your `.env.local` or production environment contains `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Next.js requires these during the build step to pre-render the pages.
