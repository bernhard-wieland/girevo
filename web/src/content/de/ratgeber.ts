// German content for the Ratgeber article (Ratgeber.dc.html).
//
// The design's rep-count "Kurzfassung" widget and its reps→kg table are the
// prototype rule model — NOT used. This article's argument (why a range, how the
// range is built, deciding within it, execution errors, second weight) is kept;
// the self-test section and the band table are rewritten to match the frozen spec
// docs/weight-finder-rules.md (D.1 bands, 3-movement check + focus + background).
//
// §7 check: weight advice is always a range; nothing about pain, complaints,
// injury, rehab, therapy, or seeing anyone; no body metrics.

// Bump on real edits. Formatted for display below.
export const RATGEBER_UPDATED = "2026-09-09";

export const ratgeber = {
  meta: {
    title: "Kettlebell-Startgewicht: warum es ein Bereich ist",
    description:
      "Warum eine einzelne Zahl beim Kettlebell-Startgewicht nicht funktioniert, wie dein Bereich zustande kommt und wie du dich innerhalb der Spanne von Übung zu Übung entscheidest.",
  },

  kicker: "Ratgeber",
  readingTime: "6 Minuten Lesezeit",
  h1: "Kettlebell-Startgewicht: warum es ein Bereich ist",
  deck: "Warum eine einzelne Zahl nicht funktioniert, wie dein Bereich zustande kommt und wie du dich innerhalb der Spanne von Übung zu Übung entscheidest.",

  intro:
    "Die Frage ist immer dieselbe: reicht das Gewicht, oder ist es zu viel? Die Antwort hängt nicht an deiner Person allein, sondern daran, was du mit der Kettlebell vorhast. Deshalb steht am Ende des Gewichtsfinders kein Wert, sondern eine Spanne.",

  ctaCard: {
    eyebrow: "Gewichtsfinder",
    text: "Der Selbsttest dauert ein paar Minuten und braucht kein Zusatzgewicht. Am Ende steht dein Bereich und die Begründung dazu.",
    cta: "Zum Gewichtsfinder",
  },

  toc: [
    { id: "warum-bereich", label: "Warum eine einzelne Zahl nicht funktioniert" },
    { id: "selbsttest", label: "Der Selbsttest" },
    { id: "wie-der-bereich", label: "So kommt dein Bereich zustande" },
    { id: "innerhalb-entscheiden", label: "Innerhalb des Bereichs entscheiden" },
    { id: "fehler", label: "Häufige Ausführungsfehler" },
    { id: "zweites-gewicht", label: "Wann ein zweites Gewicht sinnvoll wird" },
  ],

  warumBereich: {
    h2: "Warum eine einzelne Zahl nicht funktioniert",
    p: [
      "Eine Kettlebell wird in sehr unterschiedlichen Lagen bewegt. Beim Schwung aus der Hüfte arbeiten die größten Muskelgruppen gemeinsam, die Bewegung ist kurz und der Griff hält das Gewicht nur im Vorbeigehen. Beim Überkopfdrücken arbeitet ein Arm allein gegen dasselbe Gewicht, über einen längeren Weg. Der Unterschied liegt in der Praxis bei acht bis zwölf Kilogramm — bei derselben Person, am selben Tag.",
      "Eine Tabelle, die dir „16 kg“ sagt, hat sich stillschweigend für eine dieser Übungen entschieden und nicht gesagt, für welche. Ein Bereich macht das sichtbar: Das untere Ende ist dein Gewicht für alles über Kopf oder einarmig, das obere für Schwungübungen. Beide Enden bleiben dauerhaft in Gebrauch — es ist keine Reihenfolge, die du abarbeitest.",
    ],
  },

  selbsttest: {
    h2: "Der Selbsttest: drei Bewegungen ohne Gewicht",
    p1: "Der Gewichtsfinder fragt nichts zu deinem Körpergewicht. Er lässt dich drei Bewegungen ohne Zusatzgewicht ausprobieren — eine tiefe Kniebeuge, eine Hüftbeuge und das Strecken der Arme über den Kopf — und für jede hältst du fest, ob sie kontrolliert läuft oder noch nicht. Dazu zwei kurze Fragen: was du vor allem trainieren willst und wie regelmäßig du dich gerade belastest.",
    p2: "Die Hüftbeuge steckt in fast jeder Kettlebell-Übung und ist die aussagekräftigste der drei. Der Besenstiel ist dabei kein Zubehör, sondern das Messgerät: Er zeigt dir ohne Spiegel und ohne Kamera, wann die Bewegung von der Hüfte in den Rücken wandert.",
    steps: [
      "Stiel senkrecht am Rücken anlegen, sodass Kopf, Schulterblätter und Kreuzbein ihn berühren.",
      "Füße hüftbreit, Knie leicht gebeugt, Gewicht auf dem ganzen Fuß.",
      "Becken nach hinten schieben, bis der Oberkörper etwa waagerecht steht — nicht in die Knie gehen.",
      "Aufrichten und am Ende das Gesäß fest anspannen. Das ist eine Wiederholung.",
    ],
    p3: "Sauber heißt: Der Kontakt an allen drei Stellen hält und das Tempo bleibt gleichmäßig. Sobald eine dieser Sachen kippt, läuft die Bewegung noch nicht sauber — das ist kein Makel, sondern die Information, mit der der Finder rechnet.",
  },

  wieDerBereich: {
    h2: "So kommt dein Bereich zustande",
    p1: "Ausgangspunkt ist, wie regelmäßig du dich gerade belastest. Das legt den Grundbereich fest:",
    table: [
      { k: "kein regelmäßiges Training", v: "8–10 kg" },
      { k: "gelegentlich aktiv", v: "10–12 kg" },
      { k: "regelmäßig aktiv, kein Krafttraining", v: "12–14 kg" },
      { k: "regelmäßiges Krafttraining", v: "14–18 kg" },
    ],
    p2: "Der Technik-Check und dein Schwerpunkt verschieben dich innerhalb dieses Bereichs oder um höchstens eine Stufe. Läuft eine der drei Bewegungen noch nicht sauber, zählt die untere Kante. Willst du vor allem schwingen und bekommst einen leichten Gegenstand sauber über den Kopf, darf es eine Stufe mehr sein. Optionale Angaben wie Alter und Geschlecht verschieben die Spanne noch einmal leicht; ohne Angaben bleibt sie etwas breiter.",
  },

  innerhalb: {
    h2: "Wie du dich innerhalb des Bereichs entscheidest",
    p: "Drei Fragen reichen. Erstens: Welche Übung? Schwung und beidarmige Kniebeuge vertragen das obere Ende, Überkopfdrücken und einarmiges Halten das untere. Zweitens: Wie oft in der Woche? Wer zweimal trainiert, arbeitet lieber im unteren Drittel und wiederholt sauberer; wer dreimal trainiert, hat mehr Gelegenheit, sich an das obere Ende zu gewöhnen. Drittens: Wie sicher ist die Bewegung heute? Nach einer längeren Pause fängst du eine Stufe tiefer an, ohne darüber nachzudenken.",
    callout:
      "Wenn du nur eine Kettlebell kaufst, nimm das untere Ende deines Bereichs. Zu leicht lässt sich mit mehr Wiederholungen und langsamerem Tempo ausgleichen — zu schwer lässt sich gar nicht ausgleichen.",
  },

  fehler: {
    h2: "Häufige Ausführungsfehler",
    items: [
      {
        h3: "Aus den Knien statt aus der Hüfte",
        p: "Der häufigste Fehler in der ersten Woche: Die Bewegung sieht aus wie eine Kniebeuge mit hängenden Armen. Kontrolle: Steh mit dem Gesäß eine Handbreit vor einer Wand und schieb das Becken nach hinten, bis du die Wand berührst. Genau dieses Gefühl ist die Hüftbeuge.",
      },
      {
        h3: "Die Kettlebell mit den Armen heben",
        p: "Beim Schwung fliegt die Kettlebell, weil die Hüfte sie beschleunigt. Wenn die Schultern die Arbeit übernehmen, wird der Bogen kurz und das Gewicht sackt am höchsten Punkt. Zurück zu weniger Wiederholungen und mehr Abstand zwischen den Sätzen.",
      },
      {
        h3: "Zu früh zu schwer",
        p: "Wer sofort am oberen Ende anfängt, übt vier Wochen lang eine ungenaue Bewegung ein und muss sie danach wieder abtrainieren. Das ist der teuerste Umweg, den es hier gibt — und der Grund, warum girevo überhaupt mit einem Test beginnt statt mit einer Tabelle.",
      },
    ],
  },

  zweitesGewicht: {
    h2: "Wann ein zweites Gewicht sinnvoll wird",
    p1: "Meistens nach sechs bis acht Wochen. Das Zeichen ist nicht Langeweile, sondern Präzision: Wenn dieselbe Übung mit derselben Wiederholungszahl dreimal hintereinander gleich sauber aussieht, ist die nächste Stufe dran. Der übliche Abstand sind vier Kilogramm nach oben. Die erste Kettlebell wird dabei nicht überflüssig — sie wird zum Gewicht für Überkopf- und Einarmübungen, für die die neue zu schwer ist.",
    p2Prefix: "Welche Bauart dafür in Frage kommt und woran du eine ordentliche Verarbeitung erkennst, steht in der ",
    p2LinkLabel: "Kaufberatung",
    p2Mid: ". Wenn du deinen Bereich noch nicht bestimmt hast, dauert der ",
    p2Link2Label: "Gewichtsfinder",
    p2Suffix: " ein paar Minuten.",
  },

  nextCards: [
    {
      label: "Kaufberatung",
      title: "Kettlebell kaufen: wonach du entscheidest",
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
  tocLabel: "Inhalt",
};

export function formatUpdated(iso: string): string {
  const months = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember",
  ];
  const [y, m, d] = iso.split("-").map(Number);
  return `Aktualisiert am ${d}. ${months[m - 1]} ${y}`;
}
