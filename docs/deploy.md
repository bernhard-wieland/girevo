# Deployment

The `web/` app is a **static export** (`output: "export"` in `web/next.config.ts`).
`npm run build` writes plain HTML to `web/out/`. No server runtime.

## Cloudflare Workers (production)

Deployed as a **static-assets-only Worker** (no server code). Config:
`web/wrangler.jsonc` — `assets.directory: ./out`, no `main`. Git-connected via
Workers Builds, auto-deploys on push to `main`.

Workers Builds settings (dashboard → the Worker → Settings → Build):

| Setting | Value |
|---|---|
| Repository | `bernhard-wieland/girevo` |
| Root directory | `web` |
| Build command | `npx next build` |
| Deploy command | `npx wrangler deploy` |

`next build` (with `output: "export"`) writes `web/out/`; `wrangler deploy` reads
`wrangler.jsonc` and uploads it. Do **not** use a "Next.js" framework preset —
that pulls in `@opennextjs/cloudflare`, which expects `output: "standalone"` and
fails against our static export.

Custom domain `girevo.de` (apex) + `www`: the Worker → Settings → Domains &
Routes → Add. DNS is already on Cloudflare, one click each.

Preview deployments (non-`main` pushes) get a `*.workers.dev` URL — keep those
out of Search Console.

## If a route ever needs SSR/ISR/route handlers

Before the .NET backend exists: switch to the Cloudflare Workers adapter
(`@opennextjs/cloudflare`), drop `output: "export"`. After it exists: the dynamic
bits (auth magic-link, payment webhooks) belong on the C#/.NET backend and the
frontend can stay static.

## Domain references in code

If the domain is **not** `girevo.de`, update: `web/src/app/layout.tsx`
(`metadataBase`), `web/src/app/sitemap.ts`, `web/src/app/robots.ts`,
`db/seed_draft_de.sql` is fine (no absolute URLs).
