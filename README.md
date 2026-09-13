# Christophe Digital Twin — Asynchronous Presence System

Landing page for **[regnau.lt](https://regnau.lt)**.

> I can't be everywhere, but my digital twin can. Write to
> `ask.christophe@regnau.lt` and get a personalised answer — in my voice — within minutes.

## What this repo is

The public front of the project: a static single-page site describing how the twin
works, its use cases, and a contact form. The twin itself (email intake, response
generation, voice, video) runs elsewhere and is not part of this repository.

## Stack

- [Vite](https://vitejs.dev) + [React](https://react.dev) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- Contact form via [Formspree](https://formspree.io)
- Deployed with GitHub Actions to GitHub Pages, custom domain `regnau.lt`

## Local development

```bash
npm ci
npm run dev
```

Build for production with `npm run build` — output goes to `dist/`.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages. `public/CNAME` pins the custom domain.

## Transparency

The digital twin is an AI system. Anyone interacting with it is told so, in line with
Article 50 of the EU AI Act. Voice and video are synthetically generated with the
explicit consent of the person they represent.

---

© Christophe Regnault. All rights reserved.
