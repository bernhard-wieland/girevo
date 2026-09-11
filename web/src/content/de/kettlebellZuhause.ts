// German content for the home-setup guide (/kettlebell-zuhause-training).
//
// Scope: free orientation / SEO content — how to set up a minimal spot for the
// first weeks (space, floor, noise, neighbours). NOT a training plan, NOT the
// §12-gated exercise system. Equipment advice defers weight questions to the
// finder and stays inside the buyer's-guide framing (cast iron, one bell).
//
// §7 check: no word about pain, injury, rehab, therapy, or seeing anyone —
// anywhere, including the FAQ. No bare-number weight advice (weight always
// defers to the finder). No body metrics. Room and mat measurements are in
// metres/millimetres, never kilograms.

export const kettlebellZuhause = {
  meta: {
    title: "Kettlebell zu Hause: Platz, Boden und Lautstärke",
    description:
      "Wie viel Platz eine Kettlebell wirklich braucht, womit du den Boden schützt und wie du schwingst, ohne die Nachbarn zu stören.",
  },

  eyebrow: "Zu Hause",
  h1: "Kettlebell zu Hause: das Minimal-Setup",
  lead: "Eine Kettlebell, anderthalb Quadratmeter freie Fläche und eine feste Unterlage — mehr braucht die erste Zeit nicht. Hier steht, wie du den Platz findest, den Boden schützt und schwingst, ohne dass es im Stockwerk darunter poltert.",
  introFinderPrefix: "Welches Gewicht dazugehört, klärt der ",
  introFinderLinkLabel: "Gewichtsfinder",
  introFinderSuffix: ".",

  sections: [
    {
      key: "platz",
      kicker: "Platz",
      title: "Wie viel Platz du wirklich brauchst",
      intro:
        "Die Kettlebell bewegt sich fast nur vor dem Körper und über dem Kopf, nicht quer durch den Raum. Der Platzbedarf ist kleiner als gedacht — aber er geht nach oben.",
      points: [
        "Fläche: etwa 1,5 × 1,5 Meter frei, genug für einen Ausfallschritt in jede Richtung, ohne an Möbel oder Wand zu stoßen.",
        "Höhe: Streck einen Arm gerade nach oben — passt darüber noch eine Handbreit plus die Kettlebell? Bei 2,40 Meter Decke reicht das bis rund 1,90 Meter Körpergröße. Die Lampe direkt über dem Platz ist der häufigste Störfaktor.",
        "Untergrund: fest und eben. Hochfloriger Teppich oder eine weiche Matte machen den Stand wacklig — nimm die festeste Stelle im Raum.",
        "Freiraum: nichts Zerbrechliches in Armreichweite, und hinter dir Platz, um die Kettlebell nach vorn abzustellen statt sie zu halten.",
      ],
    },
    {
      key: "boden",
      kicker: "Boden",
      title: "Den Boden schützen",
      intro:
        "Beim Training passiert dem Boden nichts. Kritisch sind das Abstellen und die seltene Fehlwiederholung: Gusseisen auf Fliese oder Laminat hinterlässt Dellen, Kratzer, im schlechtesten Fall einen Sprung in der Fliese.",
      points: [
        "Standard: eine grobe Gummi- oder Stallmatte, rund 1 × 1 Meter und 8 bis 10 Millimeter dick. Schwer, rutscht nicht, schluckt den Aufprall — die unkomplizierteste Lösung.",
        "Für kleine Räume: zwei ineinandergesteckte Puzzlematten aus EVA-Schaum, doppelt gelegt. Reicht für die leichten Anfangsgewichte, federt aber etwas — der Stand wird minimal weicher.",
        "Reicht nicht: Yogamatte (zu dünn), Teppichrest (rutscht weg), Karton (nach zwei Einheiten platt).",
        "Wettkampf-Stahl und ummantelte Gewichte sind gutmütiger zum Boden, eine Unterlage bleibt trotzdem sinnvoll — vor allem gegen das Verrutschen.",
      ],
    },
    {
      key: "laut",
      kicker: "Lautstärke & Nachbarn",
      title: "Schwingen, ohne dass es unten poltert",
      intro:
        "Was die Nachbarn hören, ist Körperschall: Ein hartes Absetzen überträgt sich über den Estrich in die Decke darunter. Ein einzelner Aufprall um 22 Uhr fällt mehr auf als Musik in Zimmerlautstärke.",
      points: [
        "Weich absetzen: die letzte Wiederholung nicht fallen lassen, sondern mit der Hüfte abbremsen und die Kettlebell neben den Füßen abstellen. Das ist ohnehin die sauberere Technik.",
        "Matte drunter: die Gummimatte von oben halbiert den Aufprall spürbar.",
        "Platzwahl: näher an einer tragenden Wand statt in der Raummitte, und wenn du die Wahl hast, nicht direkt über dem Schlafzimmer der Nachbarn.",
        "Zeiten: die üblichen Ruhezeiten — meist 22 bis 6 Uhr, je nach Hausordnung auch mittags — für Schwungübungen meiden.",
        "Reden hilft: ein kurzer Hinweis bei den Leuten unter dir ist mehr wert als jede Matte. Erdgeschoss, Keller oder Garage lösen das Thema ganz.",
      ],
    },
  ],

  list: {
    title: "Was auf die Liste gehört — und was nicht",
    haveTitle: "Das brauchst du",
    have: [
      "Eine Kettlebell im passenden Bereich",
      "Eine feste Unterlage, rund einen Quadratmeter",
      "1,5 × 1,5 Meter freie Fläche mit Höhe über Kopf",
      "Feste Schuhe mit flacher Sohle oder barfuß auf festem Boden",
    ],
    skipTitle: "Das brauchst du nicht",
    skip: [
      "Ständer oder Rack — eine Kettlebell steht auf dem Boden",
      "Ein ganzes Set — ein, später zwei Gewichte reichen für Monate",
      "Gummiboden im ganzen Raum — ein Quadratmeter Matte genügt",
      "Chalk — für zu Hause und leichte Gewichte reicht ein trockenes Handtuch",
      "Bank, Klimmzugstange, Spiegelwand",
    ],
  },

  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Wie viel Platz braucht eine Kettlebell in der Wohnung?",
        a: "Für die vier Grundbewegungen reichen etwa 1,5 × 1,5 Meter freie Bodenfläche und so viel Deckenhöhe, dass du einen Arm mit der Kettlebell gerade nach oben strecken kannst. Bei 2,40 Meter Raumhöhe geht das bis rund 1,90 Meter Körpergröße.",
      },
      {
        q: "Kann ich auf Laminat oder Fliesen mit der Kettlebell trainieren?",
        a: "Ja, aber mit einer Unterlage. Eine grobe Gummimatte von etwa einem Quadratmeter fängt das Abstellen ab und schützt den Belag vor Dellen und Kratzern. Direkt auf hartem Boden riskierst du Schäden am Boden und an der Beschichtung der Kettlebell.",
      },
      {
        q: "Stört Kettlebell-Training die Nachbarn?",
        a: "Der Schwung selbst ist leise. Laut wird nur das harte Absetzen, das sich als Körperschall in die Decke überträgt. Mit einer Matte, kontrolliertem Abstellen und Training außerhalb der Ruhezeiten bleibt es unauffällig.",
      },
      {
        q: "Reicht eine Yogamatte als Unterlage?",
        a: "Nein. Eine Yogamatte ist zu dünn, um den Aufprall zu dämpfen, und rutscht unter der Last weg. Besser ist eine 8 bis 10 Millimeter starke Gummi- oder Stallmatte, ersatzweise doppelt gelegte Puzzlematten.",
      },
      {
        q: "Kann ich Swings in einer Mietwohnung im Obergeschoss machen?",
        a: "Meistens ja. Entscheidend ist, die Kettlebell am Ende jeder Serie weich abzustellen statt fallen zu lassen, eine dämpfende Matte zu nutzen und die Ruhezeiten einzuhalten. Ein kurzes Gespräch mit den Nachbarn darunter beugt Ärger vor.",
      },
    ],
  },

  cta: {
    eyebrow: "Nächster Schritt",
    text: "Sobald Platz und Unterlage stehen, fehlt nur das Gewicht. Der Gewichtsfinder führt dich in ein paar Minuten zu deinem Bereich.",
    label: "Zum Gewichtsfinder",
    href: "/kettlebell-startgewicht",
  },

  nextCards: [
    {
      label: "Kaufberatung",
      title: "Welche Bauart am wenigsten Ärger macht",
      href: "/kettlebell-kaufen",
      ready: true,
    },
    {
      label: "Übungen",
      title: "Vier Übungen für die ersten Wochen",
      href: "/uebungen",
      ready: true,
    },
  ],
  soonTag: "bald",
};
