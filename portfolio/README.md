# Ashita — Portfolio

Personal portfolio for Ashita, a Data & AI Analyst. Built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## Design

A light "plot paper" system rather than a generic dark theme: a faint chart grid on paper, deep pine as the single accent, and structure borrowed from charting instruments — axis rules with origin ticks, mono readouts for anything numeric. The hero sits on a plotted line that draws itself, with each data point anchoring one real metric from the résumé.

- **Display type** — Bricolage Grotesque
- **Body type** — Instrument Sans
- **Data & labels** — JetBrains Mono

Motion is handled with Framer Motion: a page-load sequence in the hero, scroll-triggered reveals per section, count-up on the metrics, a scroll progress bar, and hover micro-interactions. `prefers-reduced-motion` is respected throughout.

## Run locally

```sh
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## Editing content

All copy — profile, metrics, skills, projects, education, certifications — lives in a single file:

```
src/lib/content.ts
```

Change it there and every section updates. The résumé PDF served by the download buttons is `public/Ashita_Resume.pdf`; replace that file to publish a new version.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New → Project** and import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.
4. Deploy.

`vercel.json` adds the SPA rewrite so deep links don't 404.

## Structure

```
src/
├── components/     Navigation, Hero, Projects, About, Skills, Background, Contact, Footer
│   └── ui/         shadcn/ui primitives
├── lib/
│   ├── content.ts  all site copy and data
│   └── motion.ts   shared animation variants + count-up hook
├── pages/          Index, NotFound
└── index.css       design tokens and base styles
```
