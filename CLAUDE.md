# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Project name: Kettlebell Einstieg (DACH). German-language web tool for the first weeks with a
kettlebell. Read this whole file at the start of every session. When convenience conflicts with the
Hard Rules below, the Hard Rules win.

## Repository state

Very early. `KettlebellFinder.slnx` (.NET 10, the new XML solution format) contains two projects:

- `src/KettlebellFinder.Domain/` — the rule engine (`WeightFinder.cs`) implementing spec D.2.
- `tests/KettlebellFinder.Domain.Tests/` — xUnit, one test per row of the verified D.2 table;
  references the domain project.

Also present: `docs/weight-finder-rules.md` — the deterministic rule spec for the free weight
finder (source of truth; German; section D.2 defines the resolution order).

Not built yet: the React/PWA app, SSR content pages, SQL schema. See the build order below.

## Commands

- Run all tests: `dotnet test`
- Run one test: `dotnet test --filter "FullyQualifiedName~WeightFinderTests.Female_ShiftsDownOneBand"`
- Build: `dotnet build`

## Rule engine architecture

`WeightFinder.Resolve` is a pure, deterministic function: `WeightFinderInput → WeightRecommendation`
(a `WeightRange` plus an `Edge` advisory). It applies the spec D.2 steps **in a fixed order** —
base band from `TrainingBackground` (the main axis) → `Focus` (sets edge, may bump band up only on a
clean overhead + press proxy) → technique check (any unclean mandatory movement forces lower edge) →
`Sex` (female shifts one band down) → `AgeBand` (50+ only affects an untrained starter) → cap net
band shift to ±1 from base, then clamp. Changing this order breaks the D.2 table; the tests exist to
make that fail loudly, so treat `docs/weight-finder-rules.md` D.2 as the spec and the tests as its
executable form. The kg boundaries in `Bands` are a working draft (see Hard Rules).

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
3. Minimal SQL schema with translation tables — only what the content pages need.
4. **Weight finder page (SSR) — ship this FIRST, before anything else.** Starts the §10 clock.
5. Buyer's guide page (SSR) — info content + tier structure (Budget = cast iron /
   Mid = competition or coated / Premium = adjustable). Affiliate links added later.
6. Search Console set up, §10 counter started.

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
