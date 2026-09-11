// German content for the "Kettlebell-Workout zu Hause" article.
//
// Scope: how a training session is structured — order of movements, sets,
// rest, duration, frequency. Distinct from /kettlebell-zuhause-training
// (physical setup: space, floor, noise) and from /uebungen (per-movement
// technique). Deliberately NOT a personalized or day-by-day training plan —
// that is the §12-gated, rule-based plan generator's job, not this article's.
//
// §7 check: no word about pain, complaints, injury, rehab, therapy, or seeing
// anyone — anywhere, including the FAQ. Warm-up is framed mechanically
// (movement, circulation) never as injury prevention. No body metrics. No
// bare-number weight advice — weight always defers to the finder.

export const KETTLEBELL_WORKOUT_UPDATED = "2026-09-11";

export const kettlebellWorkout = {
  meta: {
    title: "Kettlebell-Workout zu Hause: der Ablauf einer Einheit",
    description:
      "Aufwärmen, die vier Grundbewegungen in der richtigen Reihenfolge, Sätze und Pausen, und wie eine Einheit endet — der Ablauf für dein Training zu Hause.",
  },

  kicker: "Workout zu Hause",
  readingTime: "5 Minuten Lesezeit",
  h1: "Kettlebell-Workout zu Hause: der Ablauf einer Einheit",
  deck: "Aufwärmen, die vier Grundbewegungen in der richtigen Reihenfolge, Sätze und Pausen, und wie eine Einheit endet.",

  introPrefix: "Sobald Platz, Unterlage und ",
  introLinkLabel: "die passende Kettlebell",
  introSuffix:
    " stehen, bleibt eine Frage: Wie sieht eine Einheit eigentlich aus? Hier ist der Ablauf, mit dem die meisten in den ersten Wochen fahren — vom ersten Handgriff bis die Kettlebell wieder in der Ecke steht.",

  ctaCard: {
    eyebrow: "Gewichtsfinder",
    text: "Passt das Gewicht noch nicht sicher? Der Selbsttest dauert ein paar Minuten und braucht kein Zusatzgewicht.",
    cta: "Zum Gewichtsfinder",
  },

  toc: [
    { id: "aufwaermen", label: "Aufwärmen ohne Zusatzgewicht" },
    { id: "reihenfolge", label: "Die vier Bewegungen in der richtigen Reihenfolge" },
    { id: "saetze-pausen", label: "Sätze, Wiederholungen, Pausen" },
    { id: "dauer-haeufigkeit", label: "Wie lange und wie oft" },
    { id: "abschluss", label: "Zum Abschluss" },
  ],

  aufwaermen: {
    h2: "Aufwärmen ohne Zusatzgewicht",
    p1: "Zwei bis drei Minuten reichen. Ziel ist, Hüfte, Schultern und Handgelenke in Bewegung zu bringen, bevor Gewicht dazukommt — nicht, ins Schwitzen zu kommen.",
    steps: [
      "Zehn Armkreisen pro Richtung, groß und langsam.",
      "Zehn Hüftkreisen, dann zehn Kniebeugen ohne Gewicht.",
      "Ein paar Handgelenksdrehungen — sie halten später den Griff.",
    ],
    p2: "Wer die drei Bewegungen aus dem Selbsttest des Gewichtsfinders schon kennt, kann sie hier gleich als Aufwärmen nutzen.",
  },

  reihenfolge: {
    h2: "Die vier Bewegungen in der richtigen Reihenfolge",
    p1: "Die Reihenfolge ist kein Zufall: Hüftbeuge und Swing zuerst, solange der Kopf noch frisch ist — diese Bewegung verlangt am meisten Timing. Kniebeuge und Drücken folgen, Tragegang kommt zum Schluss, weil er auch mit müdem Griff noch funktioniert.",
    movements: [
      { key: "hinge-swing", label: "Hüftbeuge und Swing" },
      { key: "goblet-squat", label: "Goblet-Kniebeuge" },
      { key: "overhead-press", label: "Überkopfdrücken" },
      { key: "carry", label: "Tragegang" },
    ],
    p2Prefix: "Wie jede der vier Bewegungen im Detail aussieht, steht in den ",
    p2LinkLabel: "Übungen",
    p2Suffix: ".",
  },

  saetzePausen: {
    h2: "Sätze, Wiederholungen, Pausen",
    p1: "Fünf bis zehn saubere Wiederholungen pro Satz, dann ist der Satz vorbei — nicht die Muskulatur soll aufgeben, die Technik soll sauber bleiben. Zwischen den Sätzen reichen ein bis zwei Minuten.",
    p2: "Pro Bewegung zwei bis drei Sätze. Bei vier Bewegungen macht das acht bis zwölf Sätze insgesamt — das ist der Rahmen, nicht die Pflicht. Ein kürzerer Tag mit sauberer Technik zählt mehr als ein langer mit nachlassender.",
  },

  dauerHaeufigkeit: {
    h2: "Wie lange und wie oft",
    p1: "Mit Aufwärmen, den vier Bewegungen und den Pausen dazwischen dauert eine Einheit üblicherweise 20 bis 30 Minuten.",
    callout:
      "Zwei bis drei Einheiten pro Woche mit mindestens einem Tag Abstand dazwischen reichen für die ersten Wochen — der Abstand gibt den neuen Bewegungsmustern Zeit, sich zu setzen.",
  },

  abschluss: {
    h2: "Zum Abschluss",
    p1: "Kein festes Ritual nötig. Die Kettlebell zurückstellen, kurz durchatmen — fertig. Wer mag, geht die vier Bewegungen noch einmal ohne Gewicht durch, das festigt das Muster für die nächste Einheit.",
    p2Prefix: "Nach sechs bis acht Wochen kommt bei den meisten eine zweite Kettlebell dazu — der ",
    p2LinkLabel: "Ratgeber",
    p2Suffix: " erklärt, woran du den richtigen Zeitpunkt erkennst.",
  },

  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Muss ich mich vor dem Kettlebell-Training aufwärmen?",
        a: "Ein kurzes Aufwärmen von zwei bis drei Minuten reicht — Hüfte, Schultern und Handgelenke in Bewegung bringen, mehr braucht es vor den vier Grundbewegungen nicht.",
      },
      {
        q: "Wie lange dauert eine Kettlebell-Einheit zu Hause?",
        a: "Mit Aufwärmen, vier Bewegungen und Pausen meist 20 bis 30 Minuten.",
      },
      {
        q: "Wie oft pro Woche sollte ich trainieren?",
        a: "Zwei bis drei Einheiten mit mindestens einem Tag Abstand reichen für die ersten Wochen.",
      },
      {
        q: "In welcher Reihenfolge trainiere ich die vier Bewegungen?",
        a: "Hüftbeuge und Swing zuerst, dann Kniebeuge und Drücken, Tragegang zum Schluss — die Bewegung mit dem meisten Timing zuerst, solange die Konzentration am höchsten ist.",
      },
      {
        q: "Brauche ich für jede Einheit ein neues Programm?",
        a: "Nein. Dieselben vier Bewegungen in denselben Sätzen, bis sie sauber laufen — Wiederholung bringt in den ersten Wochen mehr als Abwechslung.",
      },
    ],
  },

  nextCards: [
    {
      label: "Übungen",
      title: "Vier Übungen für die ersten Wochen",
      href: "/uebungen",
      ready: true,
    },
    {
      label: "Zu Hause",
      title: "Platz, Boden und Lautstärke zu Hause",
      href: "/kettlebell-zuhause-training",
      ready: true,
    },
    {
      label: "Gewichtsfinder",
      title: "Welches Startgewicht zu dir passt",
      href: "/kettlebell-startgewicht",
      ready: true,
    },
    {
      label: "Einstieg",
      title: "Was ist Kettlebell-Training?",
      href: "/kettlebell-training",
      ready: true,
    },
  ],
  tocLabel: "Inhalt",
};
