# Portfolio 2.0 — CLAUDE.md Maintenance Guide

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

## Deployment
Optimized for Vercel deployment:
```bash
# Push to GitHub, then connect to Vercel
# Or use Vercel CLI:
vercel --prod
```

Set environment variable `NEXT_PUBLIC_FORMSPREE_ID` if you want to manage the Formspree ID via env.

## Performance Notes
- All sections use `useInView` with `once: true` — animations fire once on scroll
- Google Fonts loaded via `next/font/google` — zero layout shift
- GitHub repos fetched client-side with loading skeletons
- Images: none (icon-only design, no heavy assets)
