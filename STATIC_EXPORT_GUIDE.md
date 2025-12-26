# Static Export Configuration Guide

## Summary of Changes

Your Next.js project has been configured for static export to AWS S3. The codebase was already well-suited for static export since it uses the App Router and has no server-side dependencies.

## Changes Made

### 1. `next.config.ts`
**What changed:**
- Added `output: 'export'` to enable static HTML export
- Added `images: { unoptimized: true }` to disable Next.js Image Optimization (required for static export)
- Added `trailingSlash: true` for better S3 compatibility

**Why:**
- `output: 'export'` tells Next.js to generate static HTML files
- Image optimization requires a Next.js server, so we disable it for static hosting
- Trailing slashes help with S3 routing

### 2. `package.json`
**What changed:**
- Added `"export": "next build"` script (alias for build)

**Why:**
- Provides a clear command for generating static export
- `next build` now automatically exports static files when `output: 'export'` is set

## What Was Already Compatible

✅ **No API Routes** - No `/api` directory found
✅ **No Middleware** - No middleware.ts file found  
✅ **No Server-Side Data Fetching** - All pages use static data or client-side state
✅ **App Router** - Using Next.js 13+ App Router (no Pages Router with getServerSideProps)
✅ **Static Components** - All pages are either client components or static server components
✅ **No Dynamic Routes** - All routes are static (/, /privacy, /terms)

## Pages Status

| Page | Type | Status |
|------|------|--------|
| `/` (Home) | Client Component | ✅ Static |
| `/privacy` | Server Component | ✅ Static |
| `/terms` | Server Component | ✅ Static |
| `/not-found` | Server Component | ✅ Static |

## Build & Export Commands

```bash
# Build and export static site
npm run build
# or
npm run export

# Output will be in: ./out/
```

## AWS S3 Deployment Checklist

### Pre-Deployment
- [ ] Run `npm run build` successfully
- [ ] Verify `out/` directory is created
- [ ] Check that all pages are generated in `out/`
- [ ] Test locally: `npx serve out` (if you have serve installed)

### S3 Configuration
- [ ] Create S3 bucket for static hosting
- [ ] Enable "Static website hosting" in S3 bucket settings
- [ ] Set index document to: `index.html`
- [ ] Set error document to: `404.html` (or `not-found.html` if Next.js generates it)
- [ ] Configure bucket policy for public read access
- [ ] Upload all files from `out/` directory to S3 bucket root

### CloudFront (Recommended)
- [ ] Create CloudFront distribution pointing to S3 bucket
- [ ] Set default root object to: `index.html`
- [ ] Configure custom error pages:
  - 403 → `/404.html` with 200 response code
  - 404 → `/404.html` with 200 response code
- [ ] Enable compression
- [ ] Set up custom domain (optional)

### Post-Deployment Verification
- [ ] Test homepage loads correctly
- [ ] Test all navigation links work
- [ ] Test `/privacy` page
- [ ] Test `/terms` page
- [ ] Test 404 page (visit non-existent route)
- [ ] Verify images load correctly
- [ ] Test mobile responsiveness
- [ ] Check browser console for errors
- [ ] Verify SEO meta tags are present

## Important Notes

### Images
- All images are now unoptimized (configured globally in `next.config.ts`)
- Images must be in the `public/` directory
- SVG images in `oem-service-lifecycle-section.tsx` already have `unoptimized` flag

### Routing
- All routes are static - no dynamic routes requiring `getStaticPaths`
- Client-side routing works normally via Next.js Link components
- Anchor links for smooth scrolling work as expected

### SEO
- Meta tags are configured in `layout.tsx`
- All pages are pre-rendered at build time
- No JavaScript required for initial page load (progressive enhancement)

## Troubleshooting

### Build Errors
- If build fails, check for any dynamic imports or server-only code
- Ensure all images are in `public/` directory
- Verify no API routes or middleware exist

### S3 Routing Issues
- Ensure `trailingSlash: true` is set (already configured)
- Configure S3 error pages to redirect 404s to `index.html` for client-side routing
- Use CloudFront for better routing support

### Image Issues
- Verify images are in `public/` directory
- Check image paths are relative (starting with `/`)
- Images are unoptimized, so ensure file sizes are reasonable

## No Changes Required For:
- ✅ API Routes (none exist)
- ✅ Middleware (none exists)
- ✅ getServerSideProps (not used - using App Router)
- ✅ getStaticProps (not needed - all data is static)
- ✅ getStaticPaths (no dynamic routes)

## Next Steps

1. **Test Build Locally:**
   ```bash
   npm run build
   ```

2. **Verify Output:**
   - Check `out/` directory exists
   - Verify all pages are present

3. **Deploy to S3:**
   - Upload `out/` contents to S3 bucket
   - Configure static website hosting
   - Set up CloudFront (recommended)

4. **Monitor:**
   - Check CloudWatch logs (if using CloudFront)
   - Monitor S3 access logs
   - Test all functionality post-deployment

