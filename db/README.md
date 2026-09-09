# Database

PostgreSQL 16+. Content schema only — the minimum the SSR content pages need
(CLAUDE.md build order step 3).

## Files

| File | What | Owner |
|---|---|---|
| `schema.sql` | DDL + structural seed (`locale`, tier/type keys and their mapping) | stable |
| `seed_draft_de.sql` | German draft copy for the content pages, tiers and types | content pass — every string is a placeholder |

Apply in order, `schema.sql` then `seed_draft_de.sql`, against the same database.

```bash
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f db/schema.sql
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f db/seed_draft_de.sql
```

Both were validated against `postgres:16-alpine`.

## What is and isn't here

**In:** content pages (SEO landing pages, guides, prose, legal texts) with per-locale
text; the buyer's-guide tier/type structure; a thin product + affiliate-link
placeholder; a `ui_text` table.

**Out, on purpose:**
- The weight finder — spec D: it computes client-side and persists nothing.
- Exercises and plan templates — later, and only if the SEO channel delivers
  impressions (CLAUDE.md §10).
- Prices — the guide links out for current pricing; a stored figure goes stale and
  prices are verify-live (CLAUDE.md).

## Conventions

- snake_case, English identifiers and `key` values.
- **Translation-table pattern.** Language-bearing columns live only in `<entity>_text`
  tables, primary key `(<entity>_id, locale)`. A second locale is added as rows, never
  as columns.
- **`key` vs `slug`.** A base row has a stable English `key` (`weight_finder`,
  `buyers_guide`). The URL `slug` is per-locale content and lives in the text table —
  a German keyword slug is the entire SEO play, so §4's "slugs: English" is read as
  applying to code-level identifiers, not the public URL. *Confirm this reading.*
- `updated_at` is maintained by the `set_updated_at()` trigger, not the app.
- One locale ships: `locale` has a single `is_default` row (`de`), enforced by a
  partial unique index.

## Open decisions

1. **DB engine.** PostgreSQL is assumed (managed Postgres is ubiquitous, pairs well
   with .NET via Npgsql/EF Core). Not yet ratified in CLAUDE.md, which says only
   "Database SQL."
2. **Routing.** `content_page_text (locale, slug)` is the lookup key for a future
   `app/[slug]/page.tsx` catch-all. The weight finder currently ships as a static
   route (`web/src/app/kettlebell-startgewicht/`); its row here documents the slug.
   Decide whether the buyer's guide is the first DB-driven page or also a static route.
3. **Migrations tooling.** This file is the canonical current state. When the .NET web
   host is built, decide between EF Core migrations and a plain SQL migration runner.
4. **Legal locale.** Resolved: the operator is in Austria, so the legal framework is
   Austrian (§ 5 ECG, § 25 MedienG, DSGVO). Site content stays standard German aimed at
   Germany. `/impressum` + `/datenschutz` currently ship as static routes; if migrated to
   the DB they are `content_page` rows with `template = 'legal'`.
