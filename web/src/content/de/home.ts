// German content for the homepage. Kept deliberately short — the homepage's job
// is to get people into the finder, not to explain everything.
//
// §7 check: no bare-number weight advice (the hero teaser shows a range from the
// frozen D.1 bands and links to the real finder); nothing about pain, injury,
// rehab, therapy, or seeing anyone; no body metrics.

export const home = {
  hero: {
    eyebrow: "Kettlebell · Startgewicht",
    h1: "Das richtige Gewicht, bevor du es kaufst.",
    lead: "girevo führt dich in ein paar Minuten zu einem Startbereich in Kilogramm — kein Konto, keine App, kein Trainingsprogramm.",
    facts: [
      { icon: "Timer", text: "Ein paar Minuten, ohne Anmeldung" },
      { icon: "House", text: "Zwei Quadratmeter genügen" },
      { icon: "Dumbbell", text: "Eine Kettlebell reicht für den Start" },
    ],
  },

  heroCard: {
    eyebrow: "Grobe Einordnung",
    question: "Wie regelmäßig belastest du dich zurzeit?",
    explainer:
      "Der vollständige Selbsttest verfeinert den Bereich danach mit drei Bewegungen ohne Gewicht.",
    resultEyebrow: "Grober Bereich",
    resultNote: "Die Spanne ohne Selbsttest.",
    cta: "Vollständigen Gewichtsfinder öffnen",
    ctaNote: "Inklusive kurzem Bewegungs-Check, ohne Gewicht",
    href: "/kettlebell-startgewicht",
  },

  signpostTitle: "Wohin als Nächstes",
  signposts: [
    {
      icon: "ShoppingBag",
      title: "Kaufberatung",
      text: "Guss oder beschichtet, Griff, verstellbar oder einzeln — vier Optionen im Vergleich.",
      href: "/kettlebell-kaufen",
      ready: true,
    },
    {
      icon: "Activity",
      title: "Übungen für die ersten Wochen",
      text: "Vier Bewegungen mit Ausführung und den häufigsten Fehlern.",
      href: "/uebungen",
      ready: true,
    },
    {
      icon: "BookOpen",
      title: "Ratgeber: Startgewicht",
      text: "Die lange Fassung: woher die Bereiche kommen und wie du dich entscheidest.",
      href: "/ratgeber",
      ready: true,
    },
  ],
  soonTag: "bald",

  summary: {
    h2: "Kurz gesagt",
    points: [
      "Startgewicht ist ein Bereich, keine Zahl — zum Schwingen darf die Kettlebell schwerer sein als zum Drücken über Kopf.",
      "Eine Kettlebell reicht für die ersten Wochen. Ein zweites Gewicht wird meist nach sechs bis acht Wochen sinnvoll.",
      "Drei bis vier Bewegungen reichen: Hüftbeuge, Kniebeuge vor der Brust, Überkopfdrücken, Tragegang.",
      "Gusseisen am Stück ist die unkomplizierteste Bauart.",
    ],
  },
};
