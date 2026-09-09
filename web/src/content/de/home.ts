// German content for the homepage (Startseite.dc.html).
//
// §7 check: no bare-number weight advice (the hero points at the finder, which
// always returns a range); nothing about pain, complaints, injury, rehab, therapy,
// or seeing anyone; no body metrics.
//
// The design's hero carried a prototype rep-count mini-calculator with unreviewed
// 8–28 kg ranges — not used (same call as the wizard). The hero card is a CTA into
// the real finder instead.

export const home = {
  hero: {
    h1: "girevo hilft dir durch die ersten Wochen mit einer Kettlebell.",
    lead: "Kein Programm, kein Konto, keine App. Zwei Fragen sind am Anfang wichtig: welches Gewicht und welche Übungen. Fang mit dem Gewicht an — der Gewichtsfinder führt dich in etwa zwei Minuten durch.",
    chips: ["Keller, Garage, Garten", "Eine Kettlebell reicht zum Start"],
    card: {
      eyebrow: "Gewichtsfinder",
      title: "Fang mit dem Gewicht an",
      text: "Ein kurzer Selbsttest — drei Bewegungen ohne Zusatzgewicht — nennt dir einen Gewichtsbereich statt einer einzelnen Zahl, und wovon die Wahl innerhalb der Spanne abhängt.",
      reassurance: "Etwa 2 Minuten · kein Konto · nichts wird gespeichert",
      cta: "Gewichtsfinder starten",
      href: "/kettlebell-startgewicht",
    },
  },

  signpostTitle: "Wohin als Nächstes",
  signposts: [
    {
      title: "Kaufberatung",
      text: "Gusseisen oder beschichtet, Griffdurchmesser, verstellbar oder einzeln — und vier konkrete Optionen im Vergleich.",
      href: "/kettlebell-kaufen",
      ready: true,
    },
    {
      title: "Übungen für die ersten Wochen",
      text: "Vier Bewegungen mit Ausführung, Zählweise und den häufigsten Ausführungsfehlern.",
      href: "/uebungen",
      ready: false,
    },
    {
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
      "Eine Kettlebell ist ein einfaches Werkzeug: ein Stück Gusseisen mit einem Bügel. Der Unterschied zwischen „liegt im Keller herum“ und „wird benutzt“ entsteht fast immer in den ersten drei Wochen, und er hängt an zwei Dingen — einem Gewicht, das zu deinen Übungen passt, und einer Handvoll Bewegungen, die du oft genug wiederholst, um sie zu können.",
    sections: [
      {
        h3: "Das Gewicht bestimmt die Übung, nicht umgekehrt",
        p: "Für Schwungübungen aus der Hüfte darf die Kettlebell deutlich schwerer sein als für Übungen, bei denen du sie über Kopf drückst oder einarmig hältst. Deshalb gibt girevo nie eine einzelne Zahl aus, sondern immer einen Bereich: Innerhalb dieser Spanne entscheidest du nach Übung und Tagesform.",
      },
      {
        h3: "Wenige Bewegungen, oft wiederholt",
        p: "Drei bis vier Übungen reichen für die ersten Wochen völlig aus. Die Hüftbeuge, aus der später der Schwung wird. Eine Kniebeuge mit der Kettlebell vor der Brust. Ein Überkopfdrücken. Ein einfacher Tragegang durch den Raum. Alles Weitere baut darauf auf.",
      },
      {
        h3: "Der Ort ist Teil der Ausrüstung",
        p: "Zwei Quadratmeter, ein fester Untergrund und genug Höhe, um die Arme über Kopf zu strecken — mehr braucht es nicht. Auf Fliesen oder Estrich lohnt eine Gummimatte, damit die Kettlebell beim Abstellen nichts abplatzt. Im Garten reicht eine ebene Fläche; auf weichem Rasen steht die Kettlebell schief, das merkst du beim ersten Absetzen.",
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
