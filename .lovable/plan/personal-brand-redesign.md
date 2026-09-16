# Personal brand redesign — 2026-09-15

## Audit
- Existing stack: React 18, TypeScript, Vite, Tailwind, React Router, Framer Motion. Retain it.
- Existing uncommitted changes include project routes and two project images; preserve their intent and assets.
- Reference public CSS/JS inspected: fixed 1,100px pill navigation, default #1a1a1a dark theme, #42b883 green, centered 72px/800 hero, 860px overlapping media, 20px rounded cards, two-column projects, 300ms hover lifts, theme switch, mobile drawer and collapsible service rows. No reference assets or text reused.
- Browser runtime reports no available browsers. Rendered screenshots, console and viewport QA remain pending; source inspection is not a visual verification.
- Five local projects; project 5 previously redirected because detail validation only allowed 1–4.
- Booking form previously showed success without submitting. Replace with explicitly labelled email draft and existing Upwork channel.

## Mapping
Preserve project screenshots, detailed project facts/results, service capabilities, existing reviews, contact emails, Upwork and legacy redirects. Keep factual project results in project context, not as personal career claims.
Replace agency navigation, sales-funnel home, stock portraits, gradients and repeated CTA cards.
Build introduction → original workflow showcase → about → capabilities → tools → selected work → process → contact. Add consistent project archive/details, services, about, reviews and enquiry pages.
Use first-person copy and “The builder behind Nexotica” until owner name is supplied. No fabricated identity, portrait, credentials, dated career timeline or new project claims.
Create shared page shell, headings, project data/cards, contact block, responsive navigation, theme switch and reduced-motion-aware reveals.

## Remaining content inputs
The owner confirmed Bisam Ali during implementation; this now appears in the hero, navigation and metadata. A portrait and the additional 4–5 project briefs/screenshots have not been supplied. The existing five projects are implemented. Brand identity is centralized in `src/data/portfolio.ts`.

Generic platform homepage social links and the old footer's placeholder-style street addresses were not promoted into Bisam's personal identity. Their original source remains untouched in `src/components/Footer.tsx`. All three business email addresses and the specific Upwork profile are retained. Existing agency figures remain attributed to Nexotica on About; project figures remain within their case studies.

## QA
- `npm run build`: passed. JavaScript 358.98 KB / 115.11 KB gzip. Original images retained at 97–220 KB each, contained rather than cropped; below-fold images lazy-load.
- `npx tsc --noEmit -p tsconfig.app.json`: passed.
- `npm run lint`: zero errors; seven pre-existing Fast Refresh warnings in shared UI components. Corrected two empty interface declarations and the Tailwind CommonJS import.
- `node .lovable/qa-portfolio.mjs`: 13 route renders passed, 40 image references verified, one h1 per page, unique section IDs and required home anchors verified. Includes project 5 and invalid IDs. React image-prop warning corrected.
- Local Vite server: `http://127.0.0.1:8080/`. All 12 requested page/legacy URLs and both main source modules returned HTTP 200. SPA fallback is configured in `public/_redirects` for compatible hosts.
- `git diff --check`: passed.
- Browser runtime has no available browser. Actual viewport overflow, visual fidelity, interactive navigation/filter/form/theme behavior and browser console verification remain pending. Server rendering/HTTP checks do not establish those properties.
- Existing Browserslist database emits an age warning; no dependency changes were necessary.

## Handoff
- Shared identity and project descriptions/images: `src/data/portfolio.ts`.
- Original case-study facts, services, reviews and business figures: `src/data/existing-content.json`.
- Active page components and design system: `src/components/portfolio/Portfolio.tsx` and `portfolio.css`.
- Legacy source files remain untouched so pre-existing user work and original content are recoverable; the router now renders the rebuilt pages.
- Email enquiry prepares an email draft; the visitor must send it through their email app. No fake submission success or backend delivery claim.
- Additional project screenshots/briefs and a personal portrait are pending user input. No placeholder project cards or invented experience added.
