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

### Design System — AI Agent Reference

This section is for AI agents maintaining the portfolio. All UI work must follow these tokens and conventions.

**Colors** (`app/globals.css`, `bmw-*` Tailwind prefix):

| Token | Hex | Usage |
|-------|-----|-------|
| canvas | `#000000` | Page background |
| ink | `#ffffff` | Primary text, headings |
| body | `#bbbbbb` | Body paragraphs |
| body-strong | `#e6e6e6` | Emphasized body text |
| muted | `#7e7e7e` | Secondary labels, captions |
| hairline | `#3c3c3c` | 1px borders, dividers |
| hairline-strong | `#262626` | Stronger borders |
| surface-card | `#1a1a1a` | Card backgrounds |
| surface-elevated | `#262626` | Nested cards |
| surface-soft | `#0d0d0d` | Tag backgrounds |
| m-blue-light | `#0066b1` | M stripe start |
| m-blue-dark | `#1c69d4` | M stripe middle |
| m-red | `#e22718` | M stripe end |

**Typography:** Inter via `next/font/google`. Headlines uppercase weight 700. Body weight 300 sentence-case. Labels uppercase weight 700 with 1.5px tracking (the "machined" feel is non-negotiable).

**Spacing:** 96px section padding, 24px card padding, max width 1440px centered, 12px grid gaps.

**Components:**
- Cards: `bg-bmw-surface-card` bg, no border-radius, `p-6`
- Buttons (outline): `bmw-btn` — transparent, white 1px border, uppercase 14px/700/1.5px, 48px h, no border-radius
- Buttons (primary): `bmw-btn bmw-btn-primary` — white bg, black text
- Text links: `bmw-text-link` — uppercase 14px/700/1.5px, inline-flex with gap-2
- M stripe: `<div className="m-stripe" />` — 4px horiz gradient, full-width, section bottom only
- Tags inside cards: `px-3 py-1 text-xs text-bmw-muted bg-bmw-surface-soft`

**Rules:**
- DO use `bmw-*` CSS variables via Tailwind
- DO NOT add decorative gradients, glows, or background effects
- DO NOT round card/button corners (except circular icon buttons)
- DO NOT use M tricolor as a button fill
- DO NOT bold body text (weight 300 always)
- DO NOT add drop shadows
- DO NOT introduce colors outside the defined palette

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
