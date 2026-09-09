# Deployment

The `web/` app is a **static export** (`output: "export"` in `web/next.config.ts`).
`npm run build` writes plain HTML to `web/out/`. No server runtime.

## Cloudflare Pages (production)

Git-connected project, auto-deploys on push to `main`.

| Setting | Value |
|---|---|
| Repository | `bernhard-wieland/girevo` |
| Production branch | `main` |
| Framework preset | Next.js (Static HTML Export) |
| Root directory | `web` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | 20+ (set `NODE_VERSION` env var if the default is older) |

Custom domain `girevo.de` (apex) + `www` redirect, added in the Pages project's
**Custom domains** tab. DNS is already on Cloudflare, so this is one click each.

Preview deployments (every PR / non-`main` push) get a `*.pages.dev` URL —
useful, but keep them out of Search Console.

## If a route ever needs SSR/ISR/route handlers

Before the .NET backend exists: switch to the Cloudflare Workers adapter
(`@opennextjs/cloudflare`), drop `output: "export"`. After it exists: the dynamic
bits (auth magic-link, payment webhooks) belong on the C#/.NET backend and the
frontend can stay static.

## Domain references in code

If the domain is **not** `girevo.de`, update: `web/src/app/layout.tsx`
(`metadataBase`), `web/src/app/sitemap.ts`, `web/src/app/robots.ts`,
`db/seed_draft_de.sql` is fine (no absolute URLs).
