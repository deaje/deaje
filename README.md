# dani ahmad j. · personal site

Personal site and journal: a home page, a writing archive and an about page,
in a hand-textured "paper notebook" style. Built with [Astro](https://astro.build),
posts are plain Markdown, and it deploys to Vercel as a static site.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static files to dist/
npm run preview    # serve the built site
```

Node 22+ is recommended (see `.nvmrc`).

## Write a post

Add a Markdown file to `src/content/posts/`. The file name becomes the URL
(`my-post.md` → `/writing/my-post`).

```md
---
title: A clear, human title
description: One or two sentences, shown on cards, in search results and in RSS.
date: 2026-12-01
kind: code          # "code" (technical) or "life" (personal)
tags: [laravel, testing]
draft: false        # true hides it from the built site (still visible in `npm run dev`)
---

Your text here. Use `##` for section headings.
```

The two posts marked `placeholder: true` are samples. Delete them or replace them before launch.

## Where to change things

| What | Where |
|---|---|
| Name, site description, social links | `src/config.ts` |
| Illustrations (swap placeholders for AI images) | `src/config.ts` → `ILLUSTRATIONS`, see `docs/illustration-style.md` |
| About page story and work history | `src/pages/about.astro` |
| Colors, fonts, paper texture | `src/styles/global.css` |
| Social share image | `public/og.png` (1200×630) |

Email is intentionally not shown anywhere. Fill `SOCIAL.email` in `src/config.ts` if you want it on the About page.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel: **Add New → Project → Import** the repository. Vercel detects Astro automatically
   (build command `npm run build`, output `dist`). No adapter is needed: the site is fully static.
3. Under **Settings → Environment Variables**, add `SITE_URL` with your domain,
   e.g. `https://yourname.com` (until then, the `*.vercel.app` URL works).
4. Once you buy the domain: **Settings → Domains → Add**, then follow Vercel's DNS instructions,
   and update `SITE_URL`. Redeploy.

## What's included

- Home (intro + latest posts), Writing (all posts by year), About (story, work, contact), 404
- RSS feed at `/rss.xml`, sitemap at `/sitemap-index.xml`, `robots.txt`
- Canonical URLs, Open Graph + Twitter cards, JSON-LD (`Person`, `BlogPosting`)
- Self-hosted fonts (Newsreader + Caveat), no client-side JavaScript, respects reduced motion
- Skip link, visible focus styles, semantic landmarks, AA-contrast text colors
