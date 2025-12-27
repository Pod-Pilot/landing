# Kubeletto Landing Page - Astro

A modern landing page for Kubeletto, migrated from vanilla HTML/CSS/JavaScript to the Astro framework.

## Features

- **Zero Visual Changes**: Pixel-perfect migration maintaining 100% visual parity
- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Automatic Sitemap**: Generated via `@astrojs/sitemap`
- **Modular Components**: Clean separation of concerns with Astro components
- **All Animations Preserved**: Scroll reveals, 3D card tilts, magnetic button effects

## Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── SideNav.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── Testimonials.astro
│   │   ├── Pricing.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── public/
│   └── robots.txt
├── astro.config.mjs
├── package.json
└── README.md
```

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The development server runs at `http://localhost:4321` by default.

## Build

The production build outputs to the `dist/` directory. All HTML is minified and optimized.

```bash
npm run build
```

## Deployment

After building, the `dist/` folder can be deployed to any static hosting service:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Any static file server

## SEO Features

- Comprehensive meta tags
- Open Graph tags for social sharing
- Twitter Card meta tags
- JSON-LD structured data (Organization, WebPage)
- Automatic sitemap generation
- robots.txt included
- Canonical URLs

## License

© 2024 Kubeletto. All rights reserved.
