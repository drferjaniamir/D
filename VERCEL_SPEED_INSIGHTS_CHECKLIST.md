# Vercel Speed Insights Integration Checklist

**Goal:** Integrate `@vercel/speed-insights` into the application to track performance metrics in the Vercel dashboard.

## Implementation Steps

- [x] **Install Dependency**
  - Run `npm i @vercel/speed-insights` in the terminal to add the package to the project.
- [x] **Update Root Layout (`src/app/layout.tsx`)**
  - Import the component: `import { SpeedInsights } from "@vercel/speed-insights/next";`
  - Add the `<SpeedInsights />` component inside the `<body>` element so it tracks performance globally across all pages.
