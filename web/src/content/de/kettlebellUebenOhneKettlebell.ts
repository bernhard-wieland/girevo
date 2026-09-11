// German content for "Kettlebell-Technik schon vor dem Kauf üben".
//
// Content gap found by research: competitors cover DIY kettlebell substitutes
// (sandbags, water sacks) as alternatives to *buying* a kettlebell. Nobody
// covers practicing the movement PATTERNS with household items while you
// wait for delivery — which is exactly the self-test philosophy the weight
// finder already uses (squatClean, hingeClean, overheadClean, the 5-litre
// press-proxy canister). This article reuses those established facts rather
// than inventing new ones, and points the reader toward buying (kaufen) and
// the finder rather than away from a purchase.
//
// §7 check: no word about pain, complaints, injury, rehab, therapy, or seeing
// anyone — anywhere, including the FAQ. No body metrics. The only bare
// number is the already-reviewed "5 kg" press-proxy canister from
// weightFinder.ts (policy.test.ts explicitly allows "5").

export const KETTLEBELL_UEBEN_UPDATED = "2026-09-11";

export const kettlebellUeben = {
  meta: {
    title: "Kettlebell-Technik schon vor dem Kauf üben",
    description:
      "Mit Besenstiel, Wasserkanister und Rucksack lernst du die vier Grundbewegungen, bevor deine erste Kettlebell überhaupt da ist.",
  },

  kicker: "Vorbereitung",
  readingTime: "4 Minuten Lesezeit",
  h1: "Kettlebell-Technik schon vor dem Kauf üben",
  deck: "Mit Besenstiel, Wasserkanister und Rucksack lernst du die vier Grundbewegungen, bevor deine erste Kettlebell überhaupt da ist.",

  intro:
    "Die Lieferzeit überbrücken, oder einfach vorab spüren, wie sich die Bewegungen anfühlen — beides geht ganz ohne Gewicht. Mit ein paar Gegenständen, die in jedem Haushalt stehen, lernst du die Technik der vier Grundbewegungen, sodass du am ersten Trainingstag nicht bei null anfängst.",

  ctaCard: {
    eyebrow: "Gewichtsfinder",
    text: "Sobald die Bewegungen sitzen, sagt dir der Selbsttest in ein paar Minuten deinen Startbereich.",
    cta: "Zum Gewichtsfinder",
  },

  toc: [
    { id: "warum", label: "Warum sich das Üben ohne Gewicht lohnt" },
    { id: "besenstiel", label: "Hüftbeuge mit dem Besenstiel" },
    { id: "kniebeuge", label: "Goblet-Kniebeuge mit Büchern oder Rucksack" },
    { id: "ueberkopf", label: "Überkopfdrücken mit dem Wasserkanister" },
    { id: "tragegang", label: "Tragegang mit dem vollen Rucksack" },
    { id: "danach", label: "Und wenn die Kettlebell da ist?" },
  ],

  warum: {
    h2: "Warum sich das Üben ohne Gewicht lohnt",
    p1: "Der Gewichtsfinder macht es vor: Er beginnt mit einem Selbsttest, keiner Zahl. Drei der vier Grundbewegungen lassen sich vollständig ohne Kettlebell überprüfen — die Technik entscheidet später mehr über das passende Gewicht als jede Tabelle.",
    p2: "Das gilt auch für die Zeit davor. Wer die Bewegungsmuster schon kennt, wenn die Kettlebell ankommt, verschwendet die ersten Einheiten nicht mit Ausprobieren, sondern trainiert direkt mit Gewicht sauber weiter.",
  },

  besenstiel: {
    h2: "Hüftbeuge mit dem Besenstiel",
    p1Prefix: "Ein Besenstiel senkrecht am Rücken zeigt dir ohne Spiegel, wann die Bewegung von der Hüfte in den Rücken wandert — der genaue Ablauf steht im ",
    p1LinkLabel: "Selbsttest des Gewichtsfinders",
    p1Suffix: ".",
    p2: "Fürs Üben reicht das Prinzip: Becken nach hinten schieben, bis der Oberkörper etwa waagerecht steht, dabei bleibt der Stiel an Kopf, Schulterblättern und Kreuzbein in Kontakt. Zehn bis fünfzehn Wiederholungen, dann kennt dein Körper die Bewegung.",
  },

  kniebeuge: {
    h2: "Goblet-Kniebeuge mit Büchern oder Rucksack",
    p1: "Ein paar schwere Bücher oder ein gefüllter Rucksack, dicht vor der Brust gehalten, simulieren den Goblet-Griff gut genug, um die Kniebeuge-Technik zu lernen.",
    p2: "Kontrolliert so tief absetzen, wie es geht, ohne dass die Fersen abheben oder der Rücken rundet — genau wie später mit der Kettlebell. Zehn Wiederholungen, Fersen bleiben unten.",
  },

  ueberkopf: {
    h2: "Überkopfdrücken mit dem Wasserkanister",
    p1: "Ein voller 5-Liter-Wasserkanister wiegt etwa 5 kg und lässt sich am Henkel ähnlich greifen wie eine leichte Kettlebell — der Gewichtsfinder nutzt genau diesen Trick als optionalen Zusatz-Check.",
    p2: "Nur drücken, nie schwingen: den Kanister auf Schulterhöhe halten und gerade nach oben strecken, bis der Arm durchgestreckt ist. Lass es weg, wenn du unsicher bist — das ist schon ein Hinweis, an der unteren Kante deines Bereichs zu starten.",
  },

  tragegang: {
    h2: "Tragegang mit dem vollen Rucksack",
    p1: "Ein Rucksack mit Büchern oder Wasserflaschen in einer Hand getragen ist die beste Vorbereitung auf den Tragegang — die Übung, bei der ohnehin am wenigsten schiefgehen kann.",
    p2: "Aufrecht gehen, als trügst du auf der anderen Seite ein volles Glas. Zehn bis zwanzig Schritte, dann Seite wechseln. Der Oberkörper bleibt gerade, du kippst nicht zur beladenen Seite.",
  },

  danach: {
    h2: "Und wenn die Kettlebell da ist?",
    p1Prefix: "Dann zählt nur noch der Selbsttest mit echtem Gewicht: Wie fühlen sich die vier Bewegungen jetzt an? Der ",
    p1LinkLabel: "Gewichtsfinder",
    p1Mid: " führt in ein paar Minuten zu deinem Bereich, und die ",
    p1Link2Label: "Übungen",
    p1Suffix: " zeigen, worauf es bei jeder einzelnen mit Gewicht ankommt.",
  },

  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Kann ich Kettlebell-Technik wirklich ohne Kettlebell lernen?",
        a: "Für drei der vier Grundbewegungen ja — Hüftbeuge, Kniebeuge und Überkopfdrücken lassen sich mit Haushaltsgegenständen gut genug üben, um die Technik zu verstehen. Der Gewichtsfinder nutzt genau dieses Prinzip für seinen Selbsttest.",
      },
      {
        q: "Was kann ich statt eines Besenstiels nehmen?",
        a: "Jeder gerade, feste Stab in etwa Körperlänge funktioniert — ein Wischmopp-Stiel oder eine PVC-Rohrstange tun es genauso.",
      },
      {
        q: "Ersetzt das Üben mit Haushaltsgegenständen das echte Training?",
        a: "Nein, es bereitet nur die Technik vor. Die Bewegung mit echtem Gewicht auszuführen fühlt sich anders an und gehört trotzdem dazu, sobald die Kettlebell da ist.",
      },
      {
        q: "Wie schwer sollte der Wasserkanister für den Überkopf-Check sein?",
        a: "Ein voller 5-Liter-Kanister, das sind etwa 5 kg — genau das Gewicht, das der Gewichtsfinder als optionalen Zusatz-Check nutzt.",
      },
    ],
  },

  nextCards: [
    {
      label: "Gewichtsfinder",
      title: "Welches Startgewicht zu dir passt",
      href: "/kettlebell-startgewicht",
      ready: true,
    },
    {
      label: "Übungen",
      title: "Vier Übungen für die ersten Wochen",
      href: "/uebungen",
      ready: true,
    },
    {
      label: "Kaufberatung",
      title: "Bauart, Griff, Beschichtung, verstellbar",
      href: "/kettlebell-kaufen",
      ready: true,
    },
  ],
  tocLabel: "Inhalt",
};
