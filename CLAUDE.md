# Portfolio 2.0 — CLAUDE.md Maintenance Guide

## ⚠️ Development Rules

### Always build before asking the user to verify
After making any code changes, **always run `npm run build` and confirm it passes before telling the user to check the browser.** Do not ask the user to open localhost until the build succeeds with zero errors.

```bash
npm run build   # must show "✓ Compiled successfully" with no TypeScript errors
```

If the build fails, fix all errors silently before surfacing the result. The user should only ever see a working page.

**⚠️ Never run `npm run build` while `npm run dev` is running on the same project.** The build overwrites `.next/` chunk hashes and causes the dev server to serve 404s for all JS/CSS assets. If you need to verify a build:
1. Stop the dev server first
2. Run `npm run build`
3. Clear `.next/` and restart `npm run dev` afterwards

### Guard against stale localStorage / undefined state
When removing or renaming features (theme IDs, config keys, etc.) that are persisted to `localStorage`, always add a validation + fallback so stale values don't crash the app at runtime. Pattern:
```ts
const saved = localStorage.getItem('key') || 'default';
const valid = VALID_VALUES.includes(saved) ? saved : 'default';
```

## Project Overview
Production-grade Next.js 14 portfolio for Gaurang Suki. Single-page application with 16 sections, dark theme, Framer Motion animations, and live GitHub API integration.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (dark theme)
- **Animation**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Package Manager**: npm

## Project Structure
```
src/
  app/
    globals.css      # Tailwind base + custom utility classes
    layout.tsx       # Root layout with metadata + Google Fonts
    page.tsx         # Single page — imports all sections
  components/        # One file per section
    Navbar.tsx
    Hero.tsx
    About.tsx
    ImpactNumbers.tsx
    Experience.tsx
    Skills.tsx
    Projects.tsx
    CurrentlyLearning.tsx
    Certifications.tsx
    ResearchPapers.tsx
    Education.tsx
    Testimonials.tsx
    DevSetup.tsx
    Hobbies.tsx
    Contact.tsx
    Footer.tsx
  data/
    certifications.json   # Source of truth for certifications
public/
  resume.pdf              # Replace with actual resume PDF
  certifications/
    certifications.json   # Copy of src/data/certifications.json
```

## Development
```bash
npm install      # Install dependencies
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

## Common Updates

### Update Personal Information
- **Bio**: Edit `src/components/About.tsx` — bio text
- **Contact**: Edit `src/components/Contact.tsx` — email, phone, location
- **Social Links**: Update in `Hero.tsx`, `Contact.tsx`, `Footer.tsx`

### Add/Update Work Experience
Edit `src/components/Experience.tsx` — the `experiences` array at the top.
Each entry has: `company`, `role`, `period`, `location`, `bullets[]`, `tech[]`, `current`, `highlight`.

### Add/Update Certifications
Edit `src/data/certifications.json` (and copy to `public/certifications/certifications.json`).
```json
{
  "name": "Certification Name",
  "issuer": "Issuer Name",
  "date": "Month Year",
  "credentialUrl": "https://...",
  "badgeImage": null
}
```
Set `credentialUrl` to `"#"` for "Coming Soon" state.

### Add Real Research Papers
Edit `src/components/ResearchPapers.tsx` — replace placeholder `papers` array with real publications.

### Add Real Testimonials
Edit `src/components/Testimonials.tsx` — replace placeholder `testimonials` array with LinkedIn recommendations.

### Set Up Contact Form
1. Create a free account at https://formspree.io
2. Create a new form and copy the form ID
3. Edit `src/components/Contact.tsx` — replace `YOUR_FORM_ID` in the fetch URL

### Replace Resume
Replace `public/resume.pdf` with your actual resume PDF file.

### Update Currently Learning
Edit `src/components/CurrentlyLearning.tsx` — update `learningItems` array.

### Update Dev Setup
Edit `src/components/DevSetup.tsx` — update `setupItems` array.

### Update Hobbies
Edit `src/components/Hobbies.tsx` — update `hobbies` array.

## Color System
Custom Tailwind colors defined in `tailwind.config.ts`:
- `primary-*`: Blue (sky) — #0ea5e9 family
- `accent-*`: Purple — #8b5cf6 family
- `dark-*`: Dark backgrounds — #030712 to #334155

## Adding New Sections
1. Create `src/components/NewSection.tsx` with `"use client"` directive
2. Import and add to `src/app/page.tsx`
3. Add nav link in `src/components/Navbar.tsx`

## GitHub API (Projects Section)
Projects are fetched live from `https://api.github.com/users/Gaurang21/repos`.
- Shows top 6 repos sorted by `updated_at`
- Graceful error state if API is unavailable
- No API key required (60 req/hour unauthenticated)

## Design Variants

4 parallel design branches exist for A/B comparison. Each is a full worktree with its own branch — run them side-by-side to compare:

| Variant | Branch | Port | Description |
|---|---|---|---|
| Minimal & Elegant | `design/minimal-elegant` | 3001 | Typography-first, light/dark toggle, clean whitespace |
| Bold & Vibrant | `design/bold-vibrant` | 3002 | Rich gradients, skill progress bars, glow effects |
| Glassmorphism | `design/glassmorphism` | 3003 | Glass cards, neon accents, frosted navbar |
| Timeline & Narrative | `design/timeline-narrative` | 3004 | Vertical timeline, project filters, reading progress bar |

**Worktree paths** (sibling to `portfolio-2.0/`):
- `portfolio-minimal-elegant/` → `npm run dev -- --port 3001`
- `portfolio-bold-vibrant/` → `npm run dev -- --port 3002`
- `portfolio-glassmorphism/` → `npm run dev -- --port 3003`
- `portfolio-timeline-narrative/` → `npm run dev -- --port 3004`

**Next steps**: cherry-pick favourite styles/features from each variant into `main`, then push. Vercel will auto-deploy from `main`.

## Deployment
Optimized for Vercel deployment. Production deploys automatically when changes are pushed/merged to `main` (configured via `vercel.json`).

```bash
# Push to GitHub (auto-deploys via Vercel)
git push origin main

# Or use Vercel CLI:
vercel --prod
```

Set environment variable `NEXT_PUBLIC_FORMSPREE_ID` if you want to manage the Formspree ID via env.

## Performance Notes
- All sections use `useInView` with `once: true` — animations fire once on scroll
- Google Fonts loaded via `next/font/google` — zero layout shift
- GitHub repos fetched client-side with loading skeletons
- Images: none (icon-only design, no heavy assets)
