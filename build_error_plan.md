# Next.js Build Error Resolution Plan
**Error:** `Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.` during `npm run build`.

## Diagnosis
The `npm run build` command fails during the "Collecting page data" phase. Next.js executes server-side code (like `src/app/sitemap.ts` and `page.tsx` files) during the build process to statically generate pages. 

When doing this, it attempts to initialize the Supabase client in `src/lib/supabase.ts`. However, it fails because `NEXT_PUBLIC_SUPABASE_URL` is either missing from the environment variables or is not being correctly loaded into the build context, resulting in an undefined URL.

## Action Plan

### 1. Inspect the Environment Variables
Check if `.env.local` contains the required Supabase environment variables with actual values:
*   `NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co`
*   `NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key`

### 2. Ensure the Build Process Can See Them
If the variables exist in `.env.local` but aren't being picked up by the build command:
*   Next.js sometimes handles environment files differently during a production build.
*   We can copy or rename `.env.local` to `.env` or `.env.production` to ensure the variables are available when `next build` runs.

### 3. Implement a Safeguard / Fallback (Optional)
If the build environment strictly prevents loading these variables locally (or if you are building in a CI/CD pipeline where they aren't injected yet):
*   We can safely bypass the error by adding placeholder fallbacks in `src/lib/supabase.ts` during initialization.
*   Example: `const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'`
*   This ensures the build succeeds locally. As long as your real production host (like Vercel or Netlify) has the correct variables configured in its dashboard, the live site will function normally.
