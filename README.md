# Kubeletto Landing Page

Marketing landing page for Kubeletto built with Astro, Tailwind CSS, and TypeScript.

## Features

- **Astro** - High-performance static site generation
- **Tailwind CSS** - Utility-first CSS framework with custom design tokens
- **TypeScript** - Type-safe development
- **Dark Mode** - Theme toggle with localStorage persistence
- **SEO Optimized** - Meta tags, OpenGraph, Twitter Cards, JSON-LD
- **Responsive** - Mobile-first design (375px to 1440px+)
- **Performance** - Lighthouse 95+ score target
- **Vercel Ready** - Optimized for Vercel deployment

## Project Structure

```
landing/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components (Header, Footer, Button, Card)
│   │   ├── home/            # Home page sections (Hero, Features, etc.)
│   │   ├── pricing/         # Pricing page components
│   │   └── docs/            # Documentation components
│   ├── layouts/
│   │   ├── BaseLayout.astro # Main layout with SEO, meta tags
│   │   └── DocsLayout.astro # Documentation layout (WIP)
│   ├── pages/
│   │   ├── index.astro      # Home page
│   │   ├── pricing.astro    # Pricing page
│   │   ├── docs.astro       # Docs index
│   │   ├── about.astro      # About page
│   │   └── contact.astro    # Contact page
│   ├── styles/
│   │   └── global.css       # Global styles, theme tokens, Tailwind imports
│   └── env.d.ts             # TypeScript environment definitions
├── public/
│   ├── assets/
│   │   ├── images/          # Image assets (see ASSETS-NEEDED.md)
│   │   └── videos/          # Video assets
│   ├── logo.svg             # Logo (no text)
│   ├── logo-with-name.svg   # Logo with wordmark
│   ├── favicon.svg          # Favicon
│   └── robots.txt           # Search engine directives
├── .env.example             # Environment variables template
├── ASSETS-NEEDED.md         # Comprehensive list of placeholder assets
├── README.md                # This file
├── astro.config.mjs         # Astro configuration
├── package.json             # Dependencies
├── tailwind.config.mjs      # Tailwind configuration with design tokens
└── tsconfig.json            # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone the repository** (or navigate to the landing directory)

```bash
cd landing
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Copy `.env.example` to `.env` and update values:

```bash
cp .env.example .env
```

Environment variables:
- `CONSOLE_URL` - URL to the console application (for Sign In/Sign Up CTAs)
- `PUBLIC_SITE_URL` - Public URL of the landing page
- `PUBLIC_SITE_TITLE` - Site title for meta tags
- `PUBLIC_SITE_DESCRIPTION` - Site description for meta tags

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Development

### Available Scripts

- `npm run dev` - Start development server on port 4321
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

### Design System

The landing page uses a design system based on `/docs/design/brand-identity.md` and `/docs/design/design-guide.md`.

**Colors:**
- Background: `hsl(var(--background))`
- Foreground: `hsl(var(--foreground))`
- Primary (Kubeletto Blue): `hsl(var(--primary))` - #007AFF (light) / #0A84FF (dark)
- Muted (Steel): `hsl(var(--muted))`
- Border: `hsl(var(--border))`

**Typography:**
- Font Family: Geist Sans (UI), Geist Mono (code)
- Display: 32px+, Bold (700), -0.02em tracking
- H1: 24px, Semibold (600), -0.01em tracking
- H2: 20px, Medium (500)
- Body: 14px, Regular (400)

**Spacing:**
- Base unit: 4px
- Section padding: 16px (tight), 64px (normal), 96px (loose)

**Components:**
- Border radius: 16px (cards), 12px (inputs), 8px (buttons), 9999px (pills)
- Transitions: 200ms cubic-bezier(0.2, 0.8, 0.2, 1)

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Import `BaseLayout` and common components
3. Define page-specific meta tags
4. Build page content using existing components

Example:

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import Header from '@/components/common/Header.astro';
import Footer from '@/components/common/Footer.astro';
import Section from '@/components/common/Section.astro';
---

<BaseLayout title="New Page - Kubeletto" description="Page description">
  <Header />
  <main>
    <Section>
      <!-- Page content -->
    </Section>
  </main>
  <Footer />
</BaseLayout>
```

### Theme Toggle

The theme toggle is implemented in:
- `src/layouts/BaseLayout.astro` - Theme initialization script
- `src/components/common/Header.astro` - Theme toggle button
- `src/styles/global.css` - Light/dark mode color definitions

Theme preference is stored in `localStorage` and synced with the `dark` class on `<html>`.

## Building for Production

```bash
npm run build
```

Output is generated in `dist/` directory.

### Build Optimizations

- Static generation (no SSR)
- Image optimization (AVIF, WebP)
- Automatic sitemap generation
- Prefetching enabled
- Minified HTML, CSS, JS

## Deployment

### Vercel (Recommended)

1. **Connect repository to Vercel**

2. **Set environment variables** in Vercel dashboard:
   - `CONSOLE_URL`
   - (Other env vars as needed)

3. **Deploy**

Vercel will automatically:
- Detect Astro framework
- Use `@astrojs/vercel` adapter
- Enable image optimization
- Deploy to edge network

### Manual Deployment

Build the project:

```bash
npm run build
```

Deploy the `dist/` directory to any static hosting service:
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- Self-hosted

## Asset Pipeline

### Placeholder Assets

All placeholder assets are documented in `ASSETS-NEEDED.md`.

### Adding Real Assets

1. Replace placeholder files in `public/assets/images/` and `public/assets/videos/`
2. Maintain naming convention: `kebab-case-name.ext`
3. Optimize images before committing:
   - Use WebP or AVIF format
   - Compress with tools like ImageOptim or Squoosh
4. Update alt text in components for accessibility

### Image Guidelines

- **Hero images:** 1200x675px (16:9)
- **Feature screenshots:** Variable, 16:9 or 4:3
- **Logos:** SVG preferred (scalable)
- **Avatars:** 256x256px (square)
- **OG images:** 1200x630px (required for social)

## Performance Checklist

Before deploying to production:

- [ ] Replace all placeholder images with optimized assets
- [ ] Test on real devices (mobile, tablet, desktop)
- [ ] Run Lighthouse audit (target 95+ score)
- [ ] Verify dark/light mode on all pages
- [ ] Test all CTAs and links
- [ ] Verify form submissions (contact form)
- [ ] Check meta tags and OpenGraph previews
- [ ] Test responsive breakpoints (375px, 768px, 1024px, 1440px)
- [ ] Validate HTML (no errors)
- [ ] Check console for JS errors
- [ ] Test in multiple browsers (Chrome, Firefox, Safari, Edge)

## SEO Checklist

- [ ] All pages have unique titles and descriptions
- [ ] OpenGraph images set for all pages
- [ ] Canonical URLs configured
- [ ] robots.txt present
- [ ] Sitemap auto-generated
- [ ] JSON-LD structured data included
- [ ] Alt text on all images
- [ ] Heading hierarchy (h1 → h2 → h3)
- [ ] Internal links work correctly
- [ ] External links have `rel="noopener noreferrer"` where appropriate

## Troubleshooting

**Build fails:**
- Check Node.js version (18+ required)
- Delete `node_modules` and `package-lock.json`, reinstall
- Verify all imports use correct paths

**Theme toggle not working:**
- Check browser console for JavaScript errors
- Verify localStorage is enabled
- Clear browser cache

**Styles not loading:**
- Ensure Tailwind CSS is properly configured
- Check `src/styles/global.css` is imported in `BaseLayout.astro`
- Run `npm run build` to regenerate styles

## Contributing

1. Create a feature branch
2. Make changes
3. Test locally (`npm run dev`)
4. Build (`npm run build`)
5. Preview production build (`npm run preview`)
6. Submit PR

## Design Philosophy

Following the Kubeletto brand identity:

- **Invisible Infrastructure** - UI never competes with user content
- **Radical Simplicity** - Hide complexity, not features
- **Friendly Authority** - Confident but approachable

Content voice:
- Calm, objective, no excessive enthusiasm
- "Deploying..." not "We are deploying your app..."
- "Invalid API Key" not "You entered the wrong key"

## License

Proprietary - Kubeletto

## Contact

For questions about the landing page:
- Email: support@kubeletto.com
- Documentation: `/docs`
- Repository: Internal
