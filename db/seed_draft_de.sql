-- Kettlebell Einstieg — German draft content seed
--
-- DRAFT COPY. Owned by the content pass, not the schema. Every string here is a
-- placeholder good enough to render a page during development — replace it before
-- go-live. Structure (schema.sql) is stable; this file is not.
--
-- §7 check applies to everything below: a recommendation is a condition plus a
-- range, never a bare number; not one word about pain, complaints, injury, rehab,
-- therapy, or seeing anyone; no body metrics.
--
-- Run after schema.sql, against the same database.

begin;

-- ---------------------------------------------------------------------------
-- content_page_text
-- ---------------------------------------------------------------------------

insert into content_page_text (page_id, locale, slug, title, meta_description) values
    ((select id from content_page where key = 'weight_finder'), 'de',
     'kettlebell-startgewicht',
     'Kettlebell-Startgewicht per Selbsttest bestimmen',
     'Welche Kettlebell zum Anfangen? Ein Selbsttest ohne Gewicht nennt dir einen '
     || 'Gewichtsbereich statt einer festen Zahl — abgestimmt auf deine Grundbewegungen '
     || 'und deinen Schwerpunkt.'),

    ((select id from content_page where key = 'buyers_guide'), 'de',
     'kettlebell-kaufen',
     'Kettlebell kaufen: Guss, Wettkampf, beschichtet oder verstellbar',
     'Welche Kettlebell-Art passt zum Einstieg? Die Unterschiede zwischen Guss-, '
     || 'Wettkampf-, beschichteten und verstellbaren Kettlebells — und was sie kosten.');

-- ---------------------------------------------------------------------------
-- kettlebell_tier_text
-- ---------------------------------------------------------------------------

insert into kettlebell_tier_text (tier_id, locale, name, summary, body) values
    ((select id from kettlebell_tier where key = 'budget'), 'de',
     'Einstieg',
     'Eine gusseiserne Kettlebell in einer festen Größe — der günstigste Weg, um anzufangen.',
     null),

    ((select id from kettlebell_tier where key = 'mid'), 'de',
     'Mittelklasse',
     'Wettkampfmaße oder eine beschichtete Guss-Kettlebell: gleichbleibende Griffposition, '
     || 'angenehmer in der Hand, unkritisch für den Boden.',
     null),

    ((select id from kettlebell_tier where key = 'premium'), 'de',
     'Verstellbar',
     'Eine verstellbare Kettlebell deckt mehrere Gewichte ab — teurer, spart aber den Nachkauf, '
     || 'wenn dein Bereich sich verschiebt.',
     null);

-- ---------------------------------------------------------------------------
-- kettlebell_type_text
-- ---------------------------------------------------------------------------

insert into kettlebell_type_text (type_id, locale, name, description, pros, cons) values
    ((select id from kettlebell_type where key = 'cast_iron'), 'de',
     'Gusseisen',
     'Aus einem Stück gegossen. Griffdurchmesser und Glockengröße wachsen mit dem Gewicht.',
     'günstig; robust; überall erhältlich',
     'Griff wird bei schweren Größen dicker; blankes Eisen kann den Boden markieren'),

    ((select id from kettlebell_type where key = 'competition'), 'de',
     'Wettkampf (Stahl)',
     'Alle Größen haben dieselben Außenmaße und denselben Griff, unabhängig vom Gewicht.',
     'gleichbleibende Technik über Gewichte hinweg; dünnerer, gleich bleibender Griff',
     'teurer als Guss; ein Hohlkörper-Klang'),

    ((select id from kettlebell_type where key = 'coated'), 'de',
     'Beschichtetes Gusseisen',
     'Guss-Kettlebell mit einer Kunststoff- oder Vinylschicht um die Glocke.',
     'schont den Boden; leiser beim Abstellen',
     'Beschichtung kann mit der Zeit abplatzen'),

    ((select id from kettlebell_type where key = 'adjustable'), 'de',
     'Verstellbar',
     'Eine Glocke mit wechselbaren Platten oder einem Stellmechanismus für mehrere Gewichte.',
     'ein Gerät für einen ganzen Bereich; platzsparend',
     'höherer Einstiegspreis; Griff und Balance weichen von einer festen Kettlebell ab');

-- ---------------------------------------------------------------------------
-- ui_text — intentionally empty. The Next app sources microcopy from
-- web/src/content/de/ until non-deploy editing is actually needed.
-- ---------------------------------------------------------------------------

commit;
