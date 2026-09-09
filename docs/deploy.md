# Deployment

The `web/` app is a **static export** (`output: "export"` in `web/next.config.ts`).
`npm run build` writes plain HTML to `web/out/`. No server runtime.

## Cloudflare Workers (production)

Deployed as a **static-assets-only Worker** (no server code). Config:
`web/wrangler.jsonc` — `assets.directory: ./out`, no `main`.

### Deploy path: GitHub Actions (`.github/workflows/deploy.yml`)

On every push to `main` (and via the manual "Run workflow" button) the action runs
`npm ci → lint → test → build → wrangler deploy` from `web/`. This replaces
Cloudflare's own Workers Builds, whose per-Worker git integration was unreliable
(it kept using a build token from another project and stopped firing).

**If Workers Builds is still connected in the Cloudflare dashboard, disconnect it**
(Worker → Settings → Build) so the two don't race.

Required GitHub repo secrets (Settings → Secrets and variables → Actions):

| Secret | Where to get it |
|---|---|
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare dashboard → Workers & Pages → Account ID (right sidebar) |
| `CLOUDFLARE_API_TOKEN` | Cloudflare → My Profile → API Tokens → Create Token → "Edit Cloudflare Workers" template, scoped to this account |

### Manual deploy (fallback / first-time)

```bash
cd web
npx wrangler login      # once, opens a browser
npm run build && npx wrangler deploy
```

Or dashboard → Worker → "New deployment" → upload the contents of `web/out/`.

### Custom domain

`girevo.de` (apex) + `www`: Worker → Settings → Domains & Routes → Add. DNS on
Cloudflare, one click each. `www` → apex via a Redirect Rule (301).

> Do **not** use a "Next.js" framework preset anywhere — it pulls in
> `@opennextjs/cloudflare`, which expects `output: "standalone"` and fails against
> our static export.

## If a route ever needs SSR/ISR/route handlers

Before the .NET backend exists: switch to the Cloudflare Workers adapter
(`@opennextjs/cloudflare`), drop `output: "export"`. After it exists: the dynamic
bits (auth magic-link, payment webhooks) belong on the C#/.NET backend and the
frontend can stay static.

## Domain references in code

If the domain is **not** `girevo.de`, update: `web/src/app/layout.tsx`
(`metadataBase`), `web/src/app/sitemap.ts`, `web/src/app/robots.ts`,
`db/seed_draft_de.sql` is fine (no absolute URLs).
