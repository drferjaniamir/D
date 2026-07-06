# Performance Optimization Checklist

## Pre-Implementation
- [ ] Verify current page.tsx structure
- [ ] Verify Testimonials.tsx component location
- [ ] Confirm Hero and Services are Server Components

## Step 1: Create ReviewsSkeleton Component
- [ ] Create file: `src/components/sections/ReviewsSkeleton.tsx`
- [ ] Add skeleton UI structure matching testimonials layout
- [ ] Add placeholder cards (3 cards)
- [ ] Add loading animation styles
- [ ] Export component as default

## Step 2: Create ReviewSection Component
- [ ] Create file: `src/components/sections/ReviewSection.tsx`
- [ ] Copy `getReviews()` function from page.tsx
- [ ] Import Testimonials component
- [ ] Create async ReviewSection component
- [ ] Call getReviews() inside component
- [ ] Render Testimonials with initialData prop
- [ ] Export component as default

## Step 3: Update page.tsx
- [ ] Add Suspense import: `import { Suspense } from 'react'`
- [ ] Add dynamic import: `import dynamic from 'next/dynamic'`
- [ ] Add dynamic Testimonials import with ssr: true
- [ ] Import ReviewSection component
- [ ] Import ReviewsSkeleton component
- [ ] Remove getReviews() function from page.tsx
- [ ] Remove direct Testimonials import
- [ ] Wrap ReviewSection in `<Suspense fallback={<ReviewsSkeleton />}>`
- [ ] Verify all imports are correct

## Post-Implementation Verification
- [ ] Run `npm run build` to check for build errors
- [ ] Run `npm run dev` to test locally
- [ ] Verify homepage loads correctly
- [ ] Verify Hero and Services render immediately
- [ ] Verify Testimonials section loads with skeleton first
- [ ] Check browser console for errors
- [ ] Verify metadata is still present
- [ ] Verify schema.org JSON-LD is still present
- [ ] Test on mobile viewport
- [ ] Test on desktop viewport

## Performance Validation
- [ ] Test FCP (First Contentful Paint)
- [ ] Test LCP (Largest Contentful Paint)
- [ ] Verify ISR cache is working
- [ ] Check bundle size reduction
- [ ] Verify framer-motion is code-split

## SEO Validation
- [ ] View page source to verify HTML content
- [ ] Verify Testimonials content in initial HTML
- [ ] Verify metadata tags are present
- [ ] Verify canonical URL is present
- [ ] Verify OpenGraph tags are present
- [ ] Test with Google Rich Results Test
