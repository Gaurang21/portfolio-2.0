# Gaurang Suki — Portfolio 2.0

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?logo=framer)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?logo=vercel)](https://vercel.com)

A modern, production-grade personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Features scroll-triggered animations, live GitHub integration, and a fully dark-themed UI.

---

## ✨ Features

- **16 portfolio sections** — Hero, About, Impact Numbers, Experience, Skills, Projects, Currently Learning, Certifications, Research Papers, Education, Testimonials, Dev Setup, Hobbies, Contact, and more
- **Live GitHub integration** — Projects section fetches repos live from the GitHub API
- **Framer Motion animations** — Smooth scroll-triggered entrance animations throughout
- **Responsive design** — Mobile-first, works across all screen sizes
- **Contact form** — Powered by Formspree
- **Resume download** — One-click PDF download
- **Zero layout shift fonts** — Google Fonts loaded via `next/font`

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| Icons | Lucide React + React Icons |
| Fonts | Inter + JetBrains Mono |
| Deployment | Vercel |
| Forms | Formspree |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/Gaurang21/portfolio-2.0.git
cd portfolio-2.0

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Commands

```bash
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 📁 Project Structure

```
portfolio-2.0/
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind base + custom utilities
│   │   ├── layout.tsx       # Root layout, metadata, fonts
│   │   └── page.tsx         # Main page (imports all sections)
│   ├── components/          # 16 section components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── ...
│   └── data/
│       └── certifications.json
├── public/
│   ├── resume.pdf
│   └── certifications/
├── tailwind.config.ts
├── next.config.mjs
└── CLAUDE.md                # AI maintenance guide
```

---

## 🎨 Design Variants

This repo also contains 4 parallel design branches for A/B comparison — each runs on a separate localhost port:

| Variant | Branch | Port |
|---|---|---|
| Minimal & Elegant | `design/minimal-elegant` | 3001 |
| Bold & Vibrant | `design/bold-vibrant` | 3002 |
| Glassmorphism | `design/glassmorphism` | 3003 |
| Timeline & Narrative | `design/timeline-narrative` | 3004 |

---

## ⚙️ Configuration

### Contact Form
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy the form ID
3. In `src/components/Contact.tsx`, replace `YOUR_FORM_ID` in the fetch URL

### Resume
Replace `public/resume.pdf` with your actual resume PDF.

### Environment Variables
| Variable | Description |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Optional: manage Formspree ID via env |

---

## 📦 Deployment

This project is deployed on **Vercel** and automatically deploys when changes are merged to the `main` branch.

To deploy manually:
```bash
# Using Vercel CLI
npx vercel --prod
```

---

## 📄 License

MIT — feel free to use this as a template for your own portfolio.

---

*Built with ❤️ by [Gaurang Suki](https://github.com/Gaurang21)*
