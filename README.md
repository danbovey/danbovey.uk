# danbovey.uk

> 📟 My personal site — a static Next.js logbook. No Gatsby.

Dark terminal aesthetic: Iosevka throughout, teal `#03A98F` on near-black
`#1C1E1E`, file-path wayfinding (`/work`, `/after-hours`, `/music`, `/stats`)
and big live stat metrics.

## Stack

- **Next.js 14** (App Router) with `output: 'export'` → static files in `out/`.
- **Tailwind 3** mapped to design tokens in `src/app/globals.css` (portable
  copy in `tokens.css`).
- **Iosevka** self-hosted via `next/font/local` (`src/fonts/*.woff2`).
- **pnpm**. `pnpm dev` / `pnpm build`. For a quick check: `pnpm exec tsc --noEmit`.

## Content

- **Work history** lives as Markdown in `content/work/*.md` (date-prefixed
  filenames drive ordering and the URL slug). Rendered at build time with
  `gray-matter` + `marked`.
- **CV** PDF is served from `public/Dan-Bovey-CV.pdf`.
- **Live stats** (Fitbit steps, Strava, Goodreads, Trakt, Can't Wait mixes)
  are fetched client-side from `stats-server.danbovey.workers.dev`. They show a
  `–` placeholder until loaded and degrade gracefully if the worker is down.
- **Spotify playlists** are read from an [npoint.io](https://npoint.io) JSON
  blob — Workers' 50-connection limit made loading per-playlist follower counts
  unreliable, so the top playlists are cached there.

## Deploy

Deployed by **Cloudflare Pages** from the `main` branch. Build command
`pnpm build`, build output directory `out`. The custom domain `danbovey.uk` is
configured in the Cloudflare Pages dashboard.
