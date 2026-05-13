# Security Headers Implementation Checklist – Dentavip

This checklist tracks the implementation of security headers via `vercel.json` to enhance the project's security posture without breaking existing integrations.

## 1. Preparation & Discovery [COMPLETED]
- [x] Identify required headers: `X-XSS-Protection`, `X-Content-Type-Options`, `X-Frame-Options`, `Content-Security-Policy`.
- [x] Audit external dependencies for CSP whitelisting:
    - [x] **Supabase**: `https://zlaakzkakauhcydiiavx.supabase.co`
    - [x] **Images**: `https://images.unsplash.com`
    - [x] **Maps**: `https://www.google.com/maps`
    - [x] **Reviews**: `https://featurable.com`
    - [x] **Fonts**: `https://fonts.googleapis.com`, `https://fonts.gstatic.com`

## 2. Implementation [COMPLETED]
- [x] Create `vercel.json` in the project root.
- [x] Configure `X-XSS-Protection` to `1; mode=block`.
- [x] Configure `X-Content-Type-Options` to `nosniff`.
- [x] Configure `X-Frame-Options` to `SAMEORIGIN`.
- [x] Construct the `Content-Security-Policy` (CSP) string:
    - [x] `default-src 'self'`
    - [x] `script-src 'self' 'unsafe-inline' 'unsafe-eval'` (required for Next.js)
    - [x] `img-src` (whitelist Unsplash, Supabase, Google profile photos)
    - [x] `connect-src` (whitelist Supabase API, Featurable)
    - [x] `frame-src` (whitelist Google Maps)
- [x] Verify JSON syntax is valid.

## 3. Testing & Verification
- [x] **Local Check**: Run `npm run build` to ensure no build-time issues.
- [x] **Console Audit**: Check browser DevTools Console for any "CSP Refused to load..." errors.
- [ ] **Feature Test**:
    - [ ] Verify Google Maps is still visible in the Contact section.
    - [ ] Verify Testimonials/Reviews are still loading from Featurable.
    - [ ] Verify all images (Unsplash & local) load correctly.
    - [ ] Verify Supabase database connections (Contact form or Dynamic pages).
- [ ] **Deployment Check**: Once deployed to Vercel, verify headers using [securityheaders.com](https://securityheaders.com).

## 4. Final Cleanup
- [ ] Remove any temporary debug logs.
- [ ] Update `README.md` or documentation if necessary to mention security headers.
