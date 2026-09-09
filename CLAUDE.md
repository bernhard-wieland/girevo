# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Project name: Kettlebell Einstieg (DACH). German-language web tool for the first weeks with a
kettlebell. Read this whole file at the start of every session. When convenience conflicts with the
Hard Rules below, the Hard Rules win.

## Repository state

Very early. Two codebases, one repo:

- **`web/`** — Next.js (App Router, TypeScript, Tailwind). The React app = website + PWA. This is
  where the free weight finder and all SSR content pages live. Ships first (build order step 4).
  - Design system: **"Gusseisen, kein Hochglanz"** (girevo brand) — warm-paper palette, one rust
    accent reserved for actions, Archivo type, 8-pt grid, hairlines over shadows, light + dark.
    Tokens in `src/app/globals.css` (`--color-*`, `--space-*`, `--radius-*`), sourced from the
    Claude Design project (`Style Tile.dc.html`). New UI uses these tokens, not raw Tailwind colors.
  - The weight finder is a 4→5-step client wizard (`src/components/WeightFinderWizard.tsx`) inside
    an SSR page that also carries evergreen prose for indexing. All step copy is rendered in the
    initial HTML (`hidden` toggles the active panel) so crawlers see it.
  - Shared chrome: `SiteHeader` / `SiteFooter` in `layout.tsx`, nav from `src/lib/nav.ts`
    (`ready: false` entries are hidden until their page ships). Homepage (`app/page.tsx`) from
    `Startseite.dc.html` — hero CTA into the finder (the design's rep-count mini-calc was dropped,
    same reason as the wizard), signpost cards (unbuilt ones show a "bald" tag), long-form prose.
- **`KettlebellFinder.slnx`** (.NET 10, the new XML solution format) — the C#/.NET backend, for the
  *paid* product (rule-based plan generator, recalculation, auth, payment) per the build order.
  Not wired to a host yet. Two projects:
  - `src/KettlebellFinder.Domain/` — the rule engine (`WeightFinder.cs`) implementing spec D.2.
  - `tests/KettlebellFinder.Domain.Tests/` — xUnit, one test per row of the verified D.2 table.

- **`db/`** — PostgreSQL content schema (`schema.sql` = DDL + structural seed;
  `seed_draft_de.sql` = German draft copy owned by the content pass). Covers content pages,
  the buyer's-guide tier/type structure, and a thin product/affiliate placeholder. Not wired to
  an app yet. See `db/README.md` for conventions and open decisions.

Also present: `docs/weight-finder-rules.md` — the deterministic rule spec for the free weight
finder. **This is the single source of truth for the weight-finder logic**; both the C# and the TS
implementations are subordinate to its section D.2.

Not built yet: SSR content pages beyond the weight finder, the .NET web host, DB-driven routing.

## Commands

Weight finder / web (`cd web`):
- `npm run dev` — local dev server
- `npm test` — Vitest (includes the ported D.2 table tests, `src/lib/weightFinder.test.ts`)
- `npm run build` — production build (must be clean before committing)
- `npm run lint`

C# backend (repo root):
- `dotnet test` — all xUnit tests
- `dotnet test --filter "FullyQualifiedName~WeightFinderTests.Female_ShiftsDownOneBand"` — one test
- `dotnet build`

## Rule engine architecture

The weight finder resolves an input to exactly one recommendation (a kg range + an `Edge` advisory,
never a bare number — §7) by applying the spec D.2 steps **in a fixed order**: base band from
`TrainingBackground` (the main axis) → `Focus` (sets edge; bumps the band up only on a clean
overhead + press proxy) → technique check (any unclean mandatory movement forces the lower edge) →
`Sex` (female shifts one band down) → `AgeBand` (50+ only affects an untrained starter) → cap the
net band shift to ±1 from base, then clamp.

There are **two implementations of this, kept in lockstep**:
- `web/src/lib/weightFinder.ts` — runs client-side in the browser (spec D: nothing is persisted,
  the calc never hits a server). This is the one users hit.
- `src/KettlebellFinder.Domain/WeightFinder.cs` — the reference oracle and the future backend
  implementation for the paid product.

Both are pure and deterministic. The D.2 test table exists in both test suites with identical
cases — if you change the logic in one language, change it in the other and keep the tables equal,
or a test fails loudly. The kg boundaries (`Bands`) are a working draft (see Hard Rules).

Everything below is the project charter. It constrains *what* gets built and *how content is
worded*, not just code style.

## Framing (do not lose this)

Portfolio / learning project. Measured revenue ceiling ≈ €75/month under optimistic assumptions.
Optimise for shipping the free channel and starting the SEO clock, not for feature completeness.
Content is the larger half of the work, not the code — plan and count it separately.

## Hard Rules — never violate

**Liability (§7).**
- The weight recommendation NEVER outputs a single number. Always a self-test protocol + a range
  ("if you can do X cleanly, you're in range Y–Z kg").
- No word about pain, back pain, injury, rehab, therapy, or seeing a doctor — anywhere, including
  FAQ and helpful-sounding asides.
- No body metrics accepted, computed, or stored: no weight, body fat, measurements, photos.
- Age and sex only as far as they feed the weight recommendation, and always optional.

**Scope — permanently OUT (not "later"):**
- Nutrition, calories, deficit, weight-loss goals.
- Sex/gender as a plan-structure variable (allowed only as a starting-weight modifier).
- Video (static illustrations + precise text only).
- Native app build / app-store release.
- Social, community, challenges, leaderboards.
- Anything about complaints, pain, rehabilitation.
- AI-generated training plans — the generator is rule-based and deterministic.

If a task drifts into any of the above, stop and flag it instead of building it silently.

**Differentiator (§6).** Plans are repeatable and recalculate after progress. This must never be
removed or placed behind an extra paywall — it is the reason to pick this over the competitor.

**Price (§9).** One-time €19–29. No subscription. Second revenue = affiliate on the hardware,
surfaced on the free weight finder / buyer's guide.

## Language & schema (§4)

- Code, identifiers, comments, commit messages, DB keys, slugs: **English**.
- Shipped content: **German only**. Standard German aimed at Germany (not Austrian-flavoured).
  Address the user with "du", not "Sie".
- i18n-ready from day one, one locale shipped (de). No hard-coded strings.
- **No language-bearing columns.** Translation-table pattern:
  ```
  exercise       (id, slug, category, level, bell_count, ...)
  exercise_text  (exercise_id, locale, name, description, execution, mistakes, ...)
                   PK: (exercise_id, locale)
  ```
  Same pattern for plan templates, SEO pages, UI text.

## Architecture (§3, §8)

- One React app that is website + app, installable as a PWA. No native build, no store.
- Content pages server-side rendered for indexability (SEO is the only channel).
- Offline scope = the currently running plan and its exercises only. Nothing more.
- Backend C#/.NET. Database SQL.
- Auth: email + magic link. No social login, no password management.
- Payment: Merchant of Record (Paddle or Lemon Squeezy), not raw Stripe.
- Ops: one server or managed hosting. No microservices, no container orchestration.
- Illustrations: static, one consistent style, no licensed templates.
- No push-notification dependence, no Apple Health / Google Fit, no wearables.

## Build order (reduced entry path first — §2, §12)

1. `weight-finder-rules.md` — rule spec (DONE, in `docs/`).
2. Rule engine implemented + tests (DONE: `src/KettlebellFinder.Domain`, `tests/KettlebellFinder.Domain.Tests`).
3. Minimal SQL schema with translation tables — only what the content pages need. DONE (draft):
   `db/schema.sql`. Not applied by any app yet. (The weight finder needs no DB — spec D.)
4. **Weight finder page (SSR) — ship this FIRST, before anything else.** Starts the §10 clock.
   DONE (dev): `web/src/app/kettlebell-startgewicht/` — girevo-branded wizard.
   Not deployed yet. NOTE: the Claude Design artboard (`Gewichtsfinder.dc.html`) proposed a
   different rule model (rep-count self-test, 6 bands, 8–28 kg). That was NOT adopted — its
   `<script>` scoring is prototype-quality and its kg numbers are unreviewed and skew heavy.
   The wizard collects the frozen D.2 inputs and calls the verified `weightFinder.ts`. If the
   rep-count model is ever wanted, it needs a proper spec rewrite + source-reviewed boundaries
   first (working method: table + tests before implementation).
5. Buyer's guide page (SSR) — DONE (dev): `web/src/app/kettlebell-kaufen/` from
   `Kaufberatung.dc.html`. Four decision criteria + four options compared + "was du nicht
   brauchst". Affiliate links gated behind `web/src/lib/affiliate.ts` `AFFILIATE_READY` (false):
   while off, no "Werbung" banner and cards show "Händler-Links folgen". Flip it only after the
   §8 legal round signs off on the Kennzeichnungspflicht wording. Prices are observation ranges,
   no brand/model names.
6. Search Console set up, §10 counter started. Needs a deployed site first.
   Deploy: static export → Cloudflare Pages, see `docs/deploy.md`. Config is ready
   (`output: "export"`, `sitemap.ts`, `robots.ts`); the Cloudflare project + domain +
   Search Console verification are manual (account access).

Only if impressions appear (see §10): 12 exercises (finish one as the template first), the
rule-based plan generator, progress/recalculation, then the paid product (auth + payment + legal).

## Working method (§11)

- Slice work into session-sized, testable units. Plan + acceptance criteria before each big block.
- Rule-heavy logic: table + tests first, then implementation.
- Count content work separately from code work.

## Must NOT be done from memory — verify live when reached

- Austrian legal texts: Impressum, AGB, Widerrufsrecht, Datenschutzerklärung, AVV,
  Kleinunternehmerregelung. Check current rules.
- Affiliate program specifics and the German disclosure requirement (Kennzeichnungspflicht) —
  exact form belongs in the legal round.
- The kg boundaries in the rule spec (D.1) are a WORKING draft — verify against sources before
  go-live. Structure is stable, exact numbers are not frozen.
- Current product models and prices for the buyer's guide.

## Abort criterion (§10)

If the free weight finder is not on page 1 for `kettlebell startgewicht` six months after launch,
the channel is disproven → stop or keep as a hobby artifact, do not double down. Early signal: no
impressions in Search Console after 3 months means month 6 likely won't deliver either. Cite this
rule on any major post-launch expansion decision.
