// German content for the buyer's guide (Kaufberatung.dc.html).
//
// §7 check: no bare-number weight advice (weight questions defer to the finder);
// nothing about pain, complaints, injury, rehab, therapy, or seeing anyone; no
// body metrics. Prices are ranges from observation, explicitly not day prices.
//
// Affiliate links are NOT live yet (see lib/affiliate.ts AFFILIATE_READY). When
// they are, add rel="sponsored nofollow" and the §8-approved disclosure.

export const kaufberatung = {
  disclosure:
    "Die Links zu Händlern auf dieser Seite sind Affiliate-Links. Kaufst du darüber, bekommt girevo eine Provision — der Preis für dich bleibt gleich. Welche Modelle hier stehen, entscheidet das nicht.",

  h1: "Kettlebell kaufen: wonach du entscheidest",
  intro:
    "Kein Shop, keine Deal-Seite. Vier Merkmale entscheiden über den Alltag mit einer Kettlebell: Bauart, Griff, Beschichtung und Verstellbarkeit.",
  introFinderLink: "Welchen Bereich du brauchst, klärt der Gewichtsfinder.",

  criteriaTitle: "Die vier Entscheidungen",
  criteria: [
    {
      icon: "Layers",
      kicker: "Bauart",
      title: "Gusseisen am Stück",
      text: "Korpus und Bügel in einem Guss haben keine Schweißnaht, die man in der Handfläche spürt. Zweiteilige Billigmodelle erkennst du an der umlaufenden Kante am Bügelansatz.",
      advice: "Ein Guss, keine Naht in der Griffzone.",
    },
    {
      icon: "Grip",
      kicker: "Griff",
      title: "Durchmesser 33–35 mm",
      text: "Dicker heißt nicht robuster, sondern nur schwerer zu halten. Unter 30 mm wird der Bügel bei schwereren Gewichten unangenehm kantig.",
      advice: "33–35 mm, zwei Handbreiten Innenmaß.",
    },
    {
      icon: "Droplets",
      kicker: "Oberfläche",
      title: "Pulverbeschichtet statt lackiert",
      text: "Pulverbeschichtung gibt leichten Grip und nutzt sich gleichmäßig ab. Lack wird glatt, sobald die Hände feucht sind, und Vinylhüllen verdecken, was darunter ist.",
      advice: "Matte Pulverbeschichtung, Bügel unbeschichtet oder fein geschliffen.",
    },
    {
      icon: "SlidersHorizontal",
      kicker: "Aufbau",
      title: "Einzelgewicht oder verstellbar",
      text: "Verstellbar spart Stellfläche, kostet aber Griffgefühl und hat einen Verschluss, den du bei Schwungübungen im Ohr hast. Einzelgewichte sind kompromisslos einfach.",
      advice: "Einzelgewicht, außer die Stellfläche zwingt dich.",
    },
  ],

  compareTitle: "Vier Optionen im Vergleich",
  compareIntro:
    "Sortiert nach Situation, nicht nach Preis. Alle Preisrahmen sind Spannen aus laufender Beobachtung, keine Tagespreise.",
  linkPending: "Konkrete Händler-Links folgen",
  linkLabel: "Händler ansehen (Werbung)",

  products: [
    {
      kind: "Klassiker",
      illo: "klassiker",
      title: "Gusseisen, pulverbeschichtet",
      fit: "du zum ersten Mal kaufst und es unkompliziert willst.",
      specs: [
        { k: "Bauart", v: "Ein Guss" },
        { k: "Griff", v: "34 mm" },
        { k: "Oberfläche", v: "Pulver, matt" },
        { k: "Stufen", v: "Einzelgewicht" },
        { k: "Preisrahmen", v: "30–55 €" },
      ],
      note: "Der Normalfall. In 4-kg-Schritten erhältlich, überall nachzukaufen.",
    },
    {
      kind: "Zwei Enden",
      illo: "paar",
      title: "Paar aus dem Bereich",
      fit: "du weißt, dass du dranbleibst, und Platz zum Abstellen hast.",
      specs: [
        { k: "Bauart", v: "Ein Guss" },
        { k: "Griff", v: "33–35 mm" },
        { k: "Oberfläche", v: "Pulver, matt" },
        { k: "Stufen", v: "Zwei Gewichte" },
        { k: "Preisrahmen", v: "70–110 €" },
      ],
      note: "Je eine Kettlebell am unteren und oberen Ende deines Bereichs — deckt leichte und schwere Übungen ab Tag eins.",
    },
    {
      kind: "Wenig Platz",
      illo: "verstellbar",
      title: "Verstellbare Kettlebell",
      fit: "du in der Wohnung trainierst und wegräumen musst.",
      specs: [
        { k: "Bauart", v: "Korpus + Platten" },
        { k: "Griff", v: "35–38 mm" },
        { k: "Oberfläche", v: "Pulver oder Stahl" },
        { k: "Stufen", v: "4–6 Stufen" },
        { k: "Preisrahmen", v: "90–160 €" },
      ],
      note: "Ein Gerät statt drei. Vor dem Kauf prüfen, ob der Verschluss bei Schwungübungen ruhig bleibt.",
    },
    {
      kind: "Langfristig",
      illo: "wettkampf",
      title: "Wettkampf-Stahl",
      fit: "du in einer Kettlebell-Sportart antrittst oder es fest vorhast.",
      specs: [
        { k: "Bauart", v: "Stahlhohlkörper" },
        { k: "Griff", v: "33 mm, genormt" },
        { k: "Oberfläche", v: "Lack, farbcodiert" },
        { k: "Stufen", v: "Einzelgewicht" },
        { k: "Preisrahmen", v: "80–140 €" },
      ],
      note: "Gleiche Abmessungen bei jedem Gewicht. Für den Einstieg unnötig — hier nur der Vollständigkeit halber.",
    },
  ],

  avoid: {
    h2: "Was du nicht brauchst",
    p: "Vinyl- oder Neoprenhüllen in bunten Farben verdecken schlechte Gussnähte und machen den Griff dicker. Ein Sechser-Set steht nach acht Wochen zu zwei Dritteln unbenutzt an der Wand. Wettkampf-Stahl lohnt nur, wenn du in einer Sportart antrittst.",
    h3: "Gebraucht kaufen",
    p2: "Gusseisen altert nicht. Prüf beim Abholen drei Sachen: keine scharfen Kanten oder sichtbare Naht in der Griffzone, plane Standfläche, Beschichtung blättert nicht in Platten ab. Rost lässt sich abschleifen.",
  },

  meta: {
    title: "Kettlebell kaufen: Bauart, Griff, Beschichtung",
    description:
      "Die vier Merkmale, an denen du eine Einsteiger-Kettlebell erkennst — Guss, Griff, Beschichtung, Verstellbarkeit — plus vier Optionen im Vergleich.",
  },

  faq: {
    title: "Häufige Fragen zum Kauf",
    // Every answer restates a fact already stated above — no new claims for the FAQ.
    items: [
      {
        q: "Einzelgewicht oder verstellbare Kettlebell?",
        a: "Für die ersten Wochen reicht ein Einzelgewicht — kompromisslos einfach, ohne Verschluss, den du bei Schwungübungen im Ohr hast. Eine verstellbare Kettlebell lohnt sich, wenn dir schlicht die Stellfläche fehlt.",
      },
      {
        q: "Worauf achte ich beim Griff?",
        a: "Auf einen Durchmesser von 33–35 mm. Dicker heißt nicht robuster, sondern nur schwerer zu halten — unter 30 mm wird der Bügel bei schwereren Gewichten unangenehm kantig.",
      },
      {
        q: "Pulverbeschichtet oder lackiert?",
        a: "Pulverbeschichtung gibt leichten Grip und nutzt sich gleichmäßig ab. Lack wird glatt, sobald die Hände feucht sind, und Vinylhüllen verdecken, was darunter ist.",
      },
      {
        q: "Lohnt sich eine gebrauchte Kettlebell?",
        a: "Ja, Gusseisen altert nicht. Prüf beim Abholen drei Dinge: keine scharfe Kante oder sichtbare Naht in der Griffzone, eine plane Standfläche, und dass die Beschichtung nicht in Platten abblättert. Rost lässt sich abschleifen.",
      },
    ],
  },
};
