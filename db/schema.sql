-- Kettlebell Einstieg — content schema (PostgreSQL 16+)
--
-- Scope (CLAUDE.md build order step 3): only what the SSR content pages need.
-- The weight finder is NOT in here — spec D: it computes client-side and persists
-- nothing. Exercises and plan templates are NOT in here either — they come later,
-- and only if the SEO channel shows impressions (CLAUDE.md §10).
--
-- Conventions (CLAUDE.md §4):
--   * snake_case, English identifiers, English `key` values.
--   * Language-bearing columns live ONLY in *_text tables, keyed (<entity>_id, locale).
--   * A base row carries a stable English `key`. The localized URL `slug` is content
--     and lives in the *_text table (a German keyword slug is the whole SEO point;
--     "slugs: English" in §4 is read as applying to code-level identifiers).
--   * One locale ships (de). Every text table has a locale FK so a second locale is
--     added as rows, never as columns.
--
-- This file is DDL + structural seed only (locale, tier/type keys and their mapping —
-- all read straight from CLAUDE.md, not editorial). German draft copy is seeded
-- separately in seed_draft_de.sql, which the content pass owns.

begin;

-- ---------------------------------------------------------------------------
-- Shared helpers
-- ---------------------------------------------------------------------------

create function set_updated_at() returns trigger
language plpgsql as $$
begin
    new.updated_at := now();
    return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- Locale
-- ---------------------------------------------------------------------------

create table locale (
    code        text primary key check (code ~ '^[a-z]{2}(-[A-Z]{2})?$'),
    name        text not null,
    is_default  boolean not null default false,
    is_active   boolean not null default true
);

-- At most one default locale.
create unique index locale_single_default on locale (is_default) where is_default;

insert into locale (code, name, is_default) values ('de', 'Deutsch', true);

-- ---------------------------------------------------------------------------
-- Content pages (SEO landing pages, guides, prose articles, legal texts)
-- ---------------------------------------------------------------------------

create table content_page (
    id            bigint generated always as identity primary key,
    key           text not null unique check (key ~ '^[a-z][a-z0-9_]*$'),
    -- which renderer the web app uses for this page
    template      text not null check (template in ('tool', 'guide', 'prose', 'legal')),
    is_indexable  boolean not null default true,
    status        text not null default 'draft' check (status in ('draft', 'published')),
    published_at  timestamptz,
    sort_order    integer not null default 0,
    created_at    timestamptz not null default now(),
    updated_at    timestamptz not null default now(),
    -- a published page must have a publish timestamp
    constraint content_page_published_has_timestamp
        check (status <> 'published' or published_at is not null)
);

create trigger content_page_set_updated_at
    before update on content_page
    for each row execute function set_updated_at();

create index content_page_published on content_page (sort_order)
    where status = 'published';

create table content_page_text (
    page_id          bigint not null references content_page (id) on delete cascade,
    locale           text   not null references locale (code),
    slug             text   not null check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
    title            text   not null,
    meta_description text,
    body             text,   -- Markdown; null for 'tool' pages that the web app renders in code
    updated_at       timestamptz not null default now(),
    primary key (page_id, locale),
    unique (locale, slug)
);

create trigger content_page_text_set_updated_at
    before update on content_page_text
    for each row execute function set_updated_at();

-- Base rows (structural: key + template). Localized slug/title/meta live in
-- seed_draft_de.sql.
insert into content_page (key, template, status, published_at, sort_order) values
    ('weight_finder', 'tool',  'published', now(), 10),
    ('buyers_guide',  'guide', 'draft',     null,  20);

-- ---------------------------------------------------------------------------
-- Buyer's guide — kettlebell tiers and types
--   CLAUDE.md build order step 5:
--   Budget = cast iron / Mid = competition or coated / Premium = adjustable
-- ---------------------------------------------------------------------------

create table kettlebell_tier (
    id          bigint generated always as identity primary key,
    key         text not null unique check (key in ('budget', 'mid', 'premium')),
    sort_order  integer not null
);

create table kettlebell_tier_text (
    tier_id  bigint not null references kettlebell_tier (id) on delete cascade,
    locale   text   not null references locale (code),
    name     text   not null,
    summary  text   not null,
    body     text,
    primary key (tier_id, locale)
);

create table kettlebell_type (
    id          bigint generated always as identity primary key,
    key         text not null unique
                check (key in ('cast_iron', 'competition', 'coated', 'adjustable')),
    sort_order  integer not null
);

create table kettlebell_type_text (
    type_id     bigint not null references kettlebell_type (id) on delete cascade,
    locale      text   not null references locale (code),
    name        text   not null,
    description text   not null,
    pros        text,
    cons        text,
    primary key (type_id, locale)
);

create table kettlebell_tier_type (
    tier_id  bigint not null references kettlebell_tier (id) on delete cascade,
    type_id  bigint not null references kettlebell_type (id) on delete cascade,
    primary key (tier_id, type_id)
);

insert into kettlebell_tier (key, sort_order) values
    ('budget', 10), ('mid', 20), ('premium', 30);

insert into kettlebell_type (key, sort_order) values
    ('cast_iron', 10), ('competition', 20), ('coated', 30), ('adjustable', 40);

insert into kettlebell_tier_type (tier_id, type_id)
select t.id, y.id
from kettlebell_tier t
join kettlebell_type y
  on (t.key, y.key) in (
       ('budget',  'cast_iron'),
       ('mid',     'competition'),
       ('mid',     'coated'),
       ('premium', 'adjustable')
     );

-- ---------------------------------------------------------------------------
-- Products and affiliate links
--   Structural placeholder. The affiliate network details and the German
--   disclosure requirement (Kennzeichnungspflicht) belong to the §8 legal
--   round — do not surface affiliate_link on a live page before then.
--   No price column by design: the guide links out for current pricing rather
--   than storing a figure that goes stale (prices are verify-live, CLAUDE.md).
-- ---------------------------------------------------------------------------

create table product (
    id          bigint generated always as identity primary key,
    key         text not null unique check (key ~ '^[a-z][a-z0-9_]*$'),
    type_id     bigint not null references kettlebell_type (id),
    tier_id     bigint not null references kettlebell_tier (id),
    weight_kg   numeric(4, 1),  -- product spec, not a body metric (§7)
    status      text not null default 'draft' check (status in ('draft', 'published')),
    sort_order  integer not null default 0,
    created_at  timestamptz not null default now(),
    updated_at  timestamptz not null default now()
);

create trigger product_set_updated_at
    before update on product
    for each row execute function set_updated_at();

create index product_type on product (type_id);
create index product_tier on product (tier_id);

create table product_text (
    product_id  bigint not null references product (id) on delete cascade,
    locale      text   not null references locale (code),
    name        text   not null,
    notes       text,
    primary key (product_id, locale)
);

create table affiliate_link (
    id          bigint generated always as identity primary key,
    product_id  bigint not null references product (id) on delete cascade,
    network     text   not null,             -- e.g. 'amazon'
    locale      text   not null references locale (code),  -- programs are region-specific
    url         text   not null,
    is_active   boolean not null default true,
    created_at  timestamptz not null default now(),
    updated_at  timestamptz not null default now(),
    unique (product_id, network, locale)
);

create trigger affiliate_link_set_updated_at
    before update on affiliate_link
    for each row execute function set_updated_at();

create index affiliate_link_product on affiliate_link (product_id);

-- ---------------------------------------------------------------------------
-- UI text
--   For strings that must be editable without a deploy. The shipped Next app
--   currently sources its microcopy from web/src/content/<locale>/ modules;
--   move a string here only when non-deploy editing is actually needed.
-- ---------------------------------------------------------------------------

create table ui_text (
    key     text not null check (key ~ '^[a-z][a-z0-9_]*(\.[a-z0-9_]+)+$'),
    locale  text not null references locale (code),
    value   text not null,
    primary key (key, locale)
);

commit;
