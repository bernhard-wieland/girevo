// German content for the homepage (Startseite.dc.html, Jetzo redesign).
//
// §7 check: no bare-number weight advice (the hero teaser shows a range from the
// frozen D.1 bands and links to the real finder); nothing about pain, injury,
// rehab, therapy, or seeing anyone; no body metrics.
//
// The design's hero carried a prototype rep-count mini-calculator (unreviewed
// 8–28 kg). Not used. The hero card asks the one input that actually anchors the
// range — how active you are — and shows the D.1 base band, then hands off to the
// full self-test.

export const home = {
  hero: {
    eyebrow: "Kettlebell · Startgewicht",
    h1: "Das richtige Gewicht, bevor du es kaufst.",
    lead: "girevo führt dich in ein paar Minuten zu einem Startbereich in Kilogramm — kein Konto, keine App, kein Trainingsprogramm. Zwei Fragen zählen am Anfang: welches Gewicht, und welche Übungen.",
    facts: [
      { icon: "Timer", text: "Ein paar Minuten, ohne Anmeldung" },
      { icon: "House", text: "Keller, Garage, Garten — zwei Quadratmeter genügen" },
      { icon: "Dumbbell", text: "Eine Kettlebell reicht für den Start" },
    ],
  },

  heroCard: {
    eyebrow: "Grobe Einordnung",
    question: "Wie regelmäßig belastest du dich zurzeit?",
    explainer:
      "Das ist die Hauptachse für dein Startgewicht. Der vollständige Selbsttest verfeinert den Bereich danach mit drei Bewegungen ohne Gewicht.",
    resultEyebrow: "Grober Bereich",
    resultNote: "Die Spanne ohne Selbsttest. Der Finder schärft sie mit deinem Schwerpunkt und der Technik.",
    cta: "Vollständigen Gewichtsfinder öffnen",
    href: "/kettlebell-startgewicht",
  },

  signpostTitle: "Wohin als Nächstes",
  signposts: [
    {
      icon: "ShoppingBag",
      title: "Kaufberatung",
      text: "Gusseisen oder beschichtet, Griffdurchmesser, verstellbar oder einzeln — und vier Optionen im Vergleich.",
      href: "/kettlebell-kaufen",
      ready: true,
    },
    {
      icon: "Activity",
      title: "Übungen für die ersten Wochen",
      text: "Vier Bewegungen mit Ausführung, Zählweise und den häufigsten Fehlern.",
      href: "/uebungen",
      ready: true,
    },
    {
      icon: "BookOpen",
      title: "Ratgeber: Startgewicht",
      text: "Die lange Fassung: woher die Bereiche kommen und wie du dich innerhalb entscheidest.",
      href: "/ratgeber",
      ready: true,
    },
  ],
  soonTag: "bald",

  prose: {
    h2: "Was in den ersten Wochen wirklich zählt",
    intro:
      "Eine Kettlebell ist ein einfaches Werkzeug: ein Stück Gusseisen mit einem Bügel. Der Unterschied zwischen „liegt im Keller herum“ und „wird benutzt“ entsteht fast immer in den ersten drei Wochen — und er hängt an einem Gewicht, das zu deinen Übungen passt, und an einer Handvoll Bewegungen, die du oft genug wiederholst.",
    sections: [
      {
        h3: "Das Gewicht bestimmt die Übung, nicht umgekehrt",
        p: "Für Schwungübungen aus der Hüfte darf die Kettlebell deutlich schwerer sein als für Übungen, bei denen du sie über Kopf drückst oder einarmig hältst. Deshalb gibt girevo nie eine einzelne Zahl aus, sondern immer einen Bereich.",
      },
      {
        h3: "Wenige Bewegungen, oft wiederholt",
        p: "Drei bis vier Übungen reichen für die ersten Wochen. Die Hüftbeuge, aus der später der Schwung wird. Eine Kniebeuge mit der Kettlebell vor der Brust. Ein Überkopfdrücken. Ein Tragegang durch den Raum.",
      },
      {
        h3: "Der Ort ist Teil der Ausrüstung",
        p: "Zwei Quadratmeter, fester Untergrund und genug Höhe für gestreckte Arme. Auf Fliesen lohnt eine Gummimatte. Im Garten reicht eine ebene Fläche — auf weichem Rasen steht die Kettlebell schief.",
      },
    ],
  },

  summary: {
    label: "Kurz gesagt",
    points: [
      "Startgewicht ist ein Bereich, keine Zahl.",
      "Eine Kettlebell reicht für die ersten Wochen.",
      "Ein zweites Gewicht wird meist nach sechs bis acht Wochen sinnvoll.",
      "Gusseisen am Stück ist die unkomplizierteste Bauart.",
    ],
  },
};
