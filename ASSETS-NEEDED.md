# Assets Needed for Kubeletto Landing Page

This document lists all placeholder assets that need to be replaced with actual production assets.

## Images

### Hero Section
- **File:** `public/assets/images/PLACEHOLDER-hero-dashboard-screenshot.png`
- **Specs:** 1200x675px (16:9 aspect ratio)
- **Format:** PNG or WebP
- **Description:** Screenshot of Kubeletto dashboard showing deployment pipeline, active deployments, and key metrics
- **Usage:** Home page hero section

### Problem/Solution Section
- **File:** `public/assets/images/PLACEHOLDER-problem-solution-diagram.svg`
- **Specs:** Vector (SVG preferred), ~800px width
- **Format:** SVG or PNG
- **Description:** Before/after comparison diagram showing manual vs Kubeletto deployment workflow
- **Usage:** Problem/Solution section on home page

### How It Works
- **File:** `public/assets/images/PLACEHOLDER-workflow-diagram.svg`
- **Specs:** Vector (SVG preferred), ~1000px width
- **Format:** SVG or PNG
- **Description:** Visual workflow diagram showing the 4-step deployment process (Connect → Configure → Deploy → Scale)
- **Usage:** How It Works section on home page

### Feature Screenshots (Optional)
- **Location:** `public/assets/images/features/`
- **Specs:** Various sizes, 16:9 or 4:3 aspect ratio
- **Format:** PNG or WebP
- **Description:** Screenshots showing specific features:
  - Git integration interface
  - Real-time logs viewer
  - Auto-scaling dashboard
  - Environment variables manager
  - Custom domain setup
  - Monitoring graphs
- **Usage:** Feature cards on home page (optional enhancements)

### OpenGraph Image
- **File:** `public/assets/images/og-image.png`
- **Specs:** 1200x630px (required for social media)
- **Format:** PNG or JPG
- **Description:** Branded image for social sharing (contains Kubeletto logo + tagline)
- **Usage:** Social media previews (Facebook, LinkedIn, Twitter)

## Videos

### Product Demo Video
- **File:** `public/assets/videos/PLACEHOLDER-product-demo.mp4`
- **Specs:** 1920x1080px (16:9), max 30 seconds
- **Format:** MP4 (H.264)
- **Description:** Short demo showing deployment from git push to live application
- **Usage:** Could be embedded in hero or features section
- **Optional:** Create a poster image (`PLACEHOLDER-demo-thumbnail.jpg`, 1920x1080px)

## Testimonials & Social Proof

### Customer Avatars
- **Location:** `public/assets/images/testimonials/`
- **Specs:** 256x256px (square)
- **Format:** PNG or WebP
- **Quantity:** 3 avatars (for testimonial cards)
- **Description:** Headshots of customers providing testimonials
- **Names:** Jane Doe (TechStartup), Alex Smith (Acme Corp), Morgan Johnson (BuildFast)

### Customer Logos
- **Location:** `public/assets/images/customers/`
- **Specs:** Variable width, max height 60px
- **Format:** SVG preferred (scalable)
- **Quantity:** 4-8 company logos
- **Description:** Logos of companies using Kubeletto
- **Required Versions:**
  - Grayscale version (default state)
  - Color version (on hover)
- **Companies:** Acme Corp, TechStartup Inc, BuildFast, DevTeam Co, etc.

## Technology/Integration Logos

### Framework & Technology Logos
- **Location:** `public/assets/images/integrations/`
- **Specs:** 64x64px (square) or proportional
- **Format:** SVG preferred
- **Quantity:** 12 logos
- **Technologies:**
  - Next.js
  - Django
  - Laravel
  - Docker
  - PostgreSQL
  - Redis
  - React
  - Vue
  - Go
  - Python
  - Node.js
  - Ruby
- **Style:** Should match or be similar to official brand logos
- **Note:** Many of these can be sourced from official brand kits

## Team Section (About Page)

### Team Member Photos
- **Location:** `public/assets/images/team/`
- **Specs:** 512x512px (square)
- **Format:** PNG or WebP
- **Quantity:** 4 photos (or actual team size)
- **Description:** Professional headshots of team members
- **Include:** Name and role for each person

## Icons & Graphics

### Category Icons (Docs Page)
- **Format:** Using Lucide React (already included in project)
- **Note:** No assets needed - icons are generated from Lucide library

### Decorative Orbs ("The Glow")
- **Note:** Generated via CSS (blur + opacity), no assets needed

## Favicon

### Current Status
- ✅ Favicon created from existing logo (logo.svg copied to favicon.svg)
- **Location:** `public/favicon.svg`
- **Optional:** Create additional favicon sizes for better browser support
  - 16x16px, 32x32px, 192x192px, 512x512px

## Asset Delivery Checklist

When providing assets, ensure:
- [ ] All images are optimized (compressed)
- [ ] WebP format provided where possible (fallback to PNG)
- [ ] SVG files cleaned/optimized (remove unnecessary metadata)
- [ ] Logos provided in both color and grayscale versions
- [ ] Images follow naming convention: `descriptive-name-kebab-case.ext`
- [ ] High-resolution versions provided (2x for retina displays)

## File Naming Convention

Use kebab-case for all asset filenames:
- ✅ `hero-dashboard-screenshot.png`
- ✅ `workflow-diagram.svg`
- ❌ `HeroDashboard.png`
- ❌ `workflow_diagram.svg`

## Notes for Design Team

**Brand Guidelines:**
- Follow color palette from `/docs/design/design-guide.md`
- Kubeletto Blue: #007AFF (light) / #0A84FF (dark)
- Use Geist Sans font in designs for consistency
- Maintain "invisible infrastructure" aesthetic - clean, minimal, modern

**Photography Style:**
- Professional but approachable
- Natural lighting preferred
- Minimal backgrounds
- High contrast for dark mode compatibility

**Illustration Style:**
- Clean, modern, technical
- Use line art or simple shapes
- Kubeletto Blue as accent color
- Avoid overly decorative or skeuomorphic designs
