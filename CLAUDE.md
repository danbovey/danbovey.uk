# CLAUDE.md

Guidance for AI coding agents working on **danbovey.uk** — Dan Bovey's personal
site. Static Next.js (App Router), deployed by Cloudflare Pages. Routes: `/`,
`/work`, `/work/[slug]`, plus a `not-found` page.

## Stack & commands

- **pnpm**. `pnpm dev` / `pnpm build` (static export → `out/`). Quick check:
  `pnpm exec tsc --noEmit`.
- pnpm 11 settings live in **`pnpm-workspace.yaml`** (not `.npmrc`):
  `verifyDepsBeforeRun: false` stops the pre-run install check from failing on
  eslint's optional native dep (`unrs-resolver`), which the build never needs.
- **Local dev behind the code-server proxy:** use the path-preserving
  `/absproxy/3000/` URL and run `NEXT_PUBLIC_BASE_PATH=/absproxy/3000 pnpm dev`.
  `next.config.js` is inert for plain localhost.

## Design system — keep the brand, don't go generic

The site is a **dark terminal logbook**. It predates this rewrite as a Gatsby
site; the 2026 rebuild keeps the identity and changes only the stack.

- **Tokens:** `src/app/globals.css :root` (portable mirror in `tokens.css`).
  Tailwind colours map to these vars. Every colour/font goes through a token —
  no ad-hoc hex.
- **Signature colours:** background `#1C1E1E`, accent teal `#03A98F`. These are
  the brand — don't drift them.
- **Type:** **Iosevka throughout** — monospace *is* the brand voice. Self-hosted
  via `next/font/local`. Don't introduce a second display face.
- **Wayfinding:** file-path labels (`.path` → `/work`, `/after-hours`, …) and
  mono nav links. The leading `/` is teal.
- **Structure:** hairline ledger rows (`.row`), big teal stat metrics
  (`.metric`), the dotted vertical container rule (`.ruled`). No boxed cards, no
  gradients, no centred full-viewport hero. Editorial, asymmetric, restrained.
- **Motion:** `transform`/`opacity` only, with a `prefers-reduced-motion`
  fallback (already wired in `globals.css`).

## Content

- **Work** = Markdown in `content/work/*.md`. Date-prefixed filename → ordering
  and slug. Frontmatter: `title`, `subtitle`, `dates`, optional `image`. Read by
  `src/lib/work.ts` (`gray-matter` + `marked`) at build time.
- **CV** PDF: `public/Dan-Bovey-CV.pdf` (linked from header, footer, work pages).
- **Live stats** come from `stats-server.danbovey.workers.dev` (client-side, via
  `src/components/stats/use-live.ts`). Always keep a `–` placeholder and a
  graceful failure path — never block render on the fetch.
- **After hours** = Dan's side studio **Polycorp** (Arq, Basefund). Real facts
  only; mirror polycorp.ltd — don't invent products or metrics.

## Deploy

**Cloudflare Pages** builds from the `main` branch (build command `pnpm build`,
output `out`) and serves the apex domain `danbovey.uk`. Deploy settings and the
custom domain live in the Cloudflare dashboard, not in this repo.
