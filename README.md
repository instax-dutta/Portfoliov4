# BMW M-Inspired Developer Portfolio

> A developer portfolio built with the visual language of BMW M — near-black canvas, white typography, the iconic M tricolor stripe (light blue → dark blue → red), and industrial precision in every component.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

## Design Language

### Engineered, Not Decorated

The interface follows BMW M's editorial principles:

- **Black canvas** (`#000000`) — the default page floor everywhere
- **White typography** — Inter at heavy (700) for headlines, light (300) for body, all-caps with 1.5px tracking for labels
- **M tricolor stripe** — `#0066b1` → `#1c69d4` → `#e22718` used as a 4px brand divider, never as a button or fill
- **Zero border radius** — sharp rectangles read as engineered precision
- **No drop shadows** — depth comes from surface contrast, not chrome
- **Generous spacing** — 96px sections, 24px card padding, grid-aligned

The full design system is documented in [`DESIGN.md`](./DESIGN.md).

## Pages

| Route | Content |
|-------|---------|
| `/` | Hero — name, title, social links, CTA to projects |
| `/about` | Professional profile, technical capabilities, objectives |
| `/experience` | Career timeline with achievements and skills |
| `/projects` | Project showcase with tech stack badges |
| `/skills` | Technical expertise categorized by domain |
| `/credentials` | Education history and professional certifications |
| `/contact` | Contact form + social links |

## Tech Stack

**Framework:** Next.js 14 (App Router), React 18, TypeScript 5

**Styling:** Tailwind CSS 3, Radix UI primitives, shadcn/ui

**Animations:** Framer Motion, Lenis (smooth scroll)

**Font:** Inter (BMW Type Next Latin substitute)

## Getting Started

```bash
git clone https://github.com/instax-dutta/Portfoliov4.git
cd Portfoliov4
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── about/page.tsx
├── components/
│   ├── HomeClient.tsx
│   ├── LenisProvider.tsx
│   └── Navigation.tsx
├── contact/page.tsx
├── credentials/page.tsx
├── experience/
│   ├── ExperienceClient.tsx
│   ├── layout.tsx
│   └── page.tsx
├── projects/
│   ├── ProjectsClient.tsx
│   ├── layout.tsx
│   └── page.tsx
├── skills/
│   ├── SkillsClient.tsx
│   └── page.tsx
├── layout.tsx
├── page.tsx
├── robots.ts
├── sitemap.ts
└── globals.css
components/ui/     # shadcn/ui components
public/
├── fonts/
├── og-image.png
└── robots.txt
```

## Built By

**Sai Dutta Abhishek Dash**

- Portfolio: [sdad.pro](https://sdad.pro)
- GitHub: [@instax-dutta](https://github.com/instax-dutta)

---

<div align="center">
  <sub>Design system and visual language inspired by BMW M GmbH.</sub>
  <br><br>
  <sub>Thanks to <a href="https://getdesign.md">getdesign.md</a> for providing the design analysis that made this possible.</sub>
</div>
