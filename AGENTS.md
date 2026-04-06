# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

A motion-rich, dark-themed slide deck presentation built with React + Vite + Tailwind CSS v4. The presentation is titled **"Beyond Text: Human-Guided Multimodal Assessment for AI-Mediated Learning"** — a research-informed conference talk arguing that text-only and artifact-only assessment inference is weakening under frontier AI conditions, and that multimodal assignment architecture and multimodal evidence design are a constructive response.

**Audience:** University faculty, educational developers, academic leaders, postsecondary teaching and learning professionals.

**Tone:** Rigorous, clear, plain-English, forward-looking but disciplined, non-alarmist, anti-hype, constructive in the second half.

## Commands

- `npm run dev` — Start dev server on port 3000
- `npm run build` — Production build (outputs to `dist/`)
- `npm run lint` — Type-check only (`tsc --noEmit`); no ESLint configured
- `npm run preview` — Preview production build
- `npm run clean` — Remove `dist/`

No test framework is configured.

## Architecture

**Stack:** React 19, Vite 6, Tailwind CSS v4 (using `@tailwindcss/vite` plugin), Motion (Framer Motion successor, imported as `motion/react`), Lucide React icons.

**Slide system:** `App.tsx` is the presentation controller. It manages slide index state `[page, direction]`, keyboard navigation (ArrowLeft/ArrowRight/Space), mouse-reactive parallax background (spring-animated motion values), and pagination dots with auto-scroll.

Each slide is a standalone component in `src/components/Slide{N}{Name}.tsx` (21 total, numbered 1-21). Slides are registered in the `slides` array in `App.tsx` — adding a new slide means creating the component and adding it to this array.

**Shared components:**
- `SlideWrapper` — AnimatePresence-compatible wrapper providing directional slide transitions (spring-based horizontal movement + blur + scale)
- `MagneticButton` — Hover-following button with spring physics, used for nav arrows

**Styling approach:** Tailwind v4 with a custom design token system defined in `src/index.css` via `@theme`. All colors use CSS custom properties (`--color-accent`, `--color-surface`, `--color-text-primary`, etc.). Custom utility classes like `.text-gradient-accent`, `.card-elevated`, `.glow-accent` are defined in `@layer utilities`. The design is dark-mode only with warm rose/coral accent, soft teal secondary, and soft blue tertiary.

**Animation:** All animations use the `motion` library (not `framer-motion`). Import from `motion/react`. Slides use staggered entrance animations via `initial`/`animate` props with delays.

**Path alias:** `@/` maps to project root (configured in both `vite.config.ts` and `tsconfig.json`).

## Presentation Structure (21 slides)

The deck has two halves with a pivot at Slide 11:

**Slides 1-10 — Diagnosis (shared premise with earlier red-teaming deck):**
1. Title
2. Why start with capability?
3. Frontier AI today: models, environments, workflows
4. Why this matters to postsecondary education
5. Threshold claim
6. Illustrative exploit scenario (multi-syllabus thought experiment)
7. Day-one workflow compression
8. What the exploit demonstrates
9. The old inference is breaking
10. The verification paradox

**Slides 11-21 — Constructive response (multimodal assessment):**
11. Beyond text: why one artifact is no longer enough (PIVOT)
12. Two uses of multimodality
13. Multimodality as assignment architecture
14. The multimodal artifact stack
15. Choose outputs by competence, not novelty
16. Example: from text-only to artifact stack
17. Examples across disciplines
18. Grade the construct, not the glamour
19. Participant activity (workshop)
20. Debrief
21. Final takeaway

## Content Reference

- `beyond-text_presentation.md` — Narrative structure, thesis, and speaker notes for each slide
- `slide-by-slide-instructions.md` — Detailed visual/content specs per slide
- `metadata.json` — Project metadata (originally built in Google AI Studio)

## Key Conventions

- Slides are self-contained: each has its own layout, content, and entrance animations
- All slide components are named exports (not default exports)
- Motion animations use the pattern: `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}` with staggered `delay` values
- Colors always reference CSS variables, never hardcoded hex values in components (except in `index.css` token definitions)
- The `GEMINI_API_KEY` env var is injected via Vite's `define` config but is not currently used by any component
- Diagrams are built with CSS/Tailwind + motion, not external image files
- The second half of the deck uses recurring visual structures: artifact stacks, competence matrices, before/after layouts
