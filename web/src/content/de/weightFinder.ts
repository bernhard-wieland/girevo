// German content for the weight finder wizard. One locale shipped (de); a future
// locale is a sibling file with the same shape. No shipped string is hard-coded in
// a component (§4).
//
// §7 self-check for everything in this file:
//  - no output is a bare number — always a condition plus a range
//  - not one word about pain, complaints, injury, rehab, therapy, or seeing anyone
//  - no body metrics are asked for
//  - sex and age appear only as optional range modifiers
//
// The wizard collects the inputs of docs/weight-finder-rules.md D.2 (the frozen
// spec). The visual design (Gewichtsfinder.dc.html) contributed the flow, tone and
// layout; its prototype scoring is NOT used — resolveWeight() is.

import type {
  AgeBand,
  Edge,
  Focus,
  Sex,
  TrainingBackground,
  WeightRange,
} from "@/lib/weightFinder";

export const STEP_LABELS = [
  "Einstieg",
  "Selbsttest",
  "Dein Training",
  "Optionale Angaben",
  "Ergebnis",
] as const;

export type StepIndex = 0 | 1 | 2 | 3 | 4;

// --- Option lists (engine value + German label) --------------------------------

export const focusOptions: { value: Focus; label: string; hint: string }[] = [
  {
    value: "strength_press",
    label: "Kraft und Drücken über Kopf",
    hint: "Military Press, Push Press, Halten über Kopf",
  },
  {
    value: "mixed",
    label: "Gemischt",
    hint: "Swings, Squats und Drücken zu etwa gleichen Teilen",
  },
  {
    value: "conditioning_swings",
    label: "Swings und Kondition",
    hint: "überwiegend Schwungübungen, wenig über Kopf",
  },
];

export const trainingBackgroundOptions: {
  value: TrainingBackground;
  label: string;
}[] = [
  { value: "untrained", label: "Kein regelmäßiges Training zurzeit" },
  { value: "occasional", label: "Ab und zu aktiv, nichts Festes" },
  { value: "active_no_strength", label: "Regelmäßig aktiv, aber kein Krafttraining" },
  { value: "strength_trained", label: "Regelmäßiges Krafttraining" },
];

export const ageOptions: { value: AgeBand; label: string }[] = [
  { value: "under_50", label: "Unter 50" },
  { value: "age_50_plus", label: "50 oder älter" },
];

export const sexOptions: { value: Sex | null; label: string }[] = [
  { value: "female", label: "Weiblich" },
  { value: "male", label: "Männlich" },
  { value: null, label: "Keine Angabe" },
];

// --- Static copy --------------------------------------------------------------

export const movements = [
  {
    key: "squatClean",
    label: "Tiefe Kniebeuge",
    howTo:
      "Füße etwa schulterbreit, Zehen leicht nach außen. So tief runter, wie es kontrolliert geht, Fersen bleiben am Boden. Wieder hoch.",
    cleanMeans:
      "Fersen bleiben unten, die Knie fallen nicht nach innen, der untere Rücken rundet sich nicht ein.",
  },
  {
    key: "hingeClean",
    label: "Hüftbeuge mit Besenstiel",
    howTo:
      "Besenstiel senkrecht am Rücken: Kopf, Schulterblätter und Kreuzbein berühren ihn. Becken nach hinten schieben, bis der Oberkörper etwa waagerecht ist, dann wieder aufrichten.",
    cleanMeans:
      "Der Stiel behält an allen drei Stellen Kontakt, die Bewegung kommt aus der Hüfte, nicht aus dem unteren Rücken.",
  },
  {
    key: "overheadClean",
    label: "Arme über den Kopf strecken",
    howTo:
      "Aufrecht stehen, beide Arme gerade nach oben strecken, bis die Oberarme neben den Ohren sind.",
    cleanMeans:
      "Die Arme kommen neben die Ohren, ohne dass die Rippen nach vorn kippen oder du ins Hohlkreuz ausweichst.",
  },
] as const;

export type MovementKey = (typeof movements)[number]["key"];

export const pressProxy = {
  label: "Optionaler Zusatz-Check",
  detail:
    "Nur wenn du bei „Swings und Kondition“ bist: einen vollen 5-Liter-Kanister (etwa 5 kg) ein paar Mal sauber über den Kopf drücken. Nur drücken, nie schwingen. Lass ihn weg, wenn du unsicher bist.",
  checkboxLabel: "Den 5-kg-Kanister habe ich sauber über den Kopf gedrückt",
};

export const copy = {
  intro: {
    eyebrow: "Gewichtsfinder",
    h1: "Welches Kettlebell-Startgewicht passt zu dir?",
    lead: "Du machst gleich einen kurzen Selbsttest — drei Bewegungen ohne Zusatzgewicht. Danach zwei kurze Fragen zu deinem Training. Am Ende bekommst du einen Gewichtsbereich, keine einzelne Zahl.",
    whatToExpectTitle: "Was dich erwartet",
    steps: [
      {
        n: "1",
        title: "Drei Bewegungen, kein Gerät",
        text: "Kniebeuge, Hüftbeuge, Arme über Kopf. Für jede hältst du fest, ob sie sauber läuft oder noch nicht.",
      },
      {
        n: "2",
        title: "Zwei Fragen zum Training",
        text: "Was du vor allem trainieren willst und wie aktiv du gerade bist. Mehr braucht die Empfehlung nicht.",
      },
      {
        n: "3",
        title: "Bereich statt Zahl",
        text: "Du bekommst eine Spanne in Kilogramm und die Begründung dazu, wovon die Wahl innerhalb der Spanne abhängt.",
      },
    ],
    facts: ["Etwa 2 Minuten", "Kein Konto, keine E-Mail", "Nichts wird gespeichert"],
    cta: "Selbsttest starten",
  },

  technique: {
    h2: "Selbsttest: drei Bewegungen ohne Gewicht",
    lead: "Diese drei Bewegungen stecken in fast jeder Kettlebell-Übung. Wie sauber sie ohne Gewicht laufen, sagt mehr über dein Startgewicht als jede Tabelle.",
    doNowLabel: "Jetzt machen",
    doNowHint: "Handy hinlegen, mitlesen",
    cleanHeading: "Sauber heißt:",
    optionClean: "läuft sauber",
    optionNotClean: "noch nicht",
    cta: "Weiter",
  },

  training: {
    h2: "Zwei Fragen zu deinem Training",
    lead: "Beides bestimmt, in welchem Bereich du landest — die Aktivität am stärksten.",
    focusLabel: "Was willst du vor allem trainieren?",
    backgroundLabel: "Wie aktiv bist du gerade?",
    cta: "Weiter",
  },

  optional: {
    eyebrow: "Optional",
    h2: "Zwei Angaben, die den Bereich schärfen",
    lead: "Beides kannst du weglassen. Ohne Angaben bekommst du denselben Bereich, nur etwas breiter.",
    ageLabel: "Alter",
    sexLabel: "Geschlecht",
    sexNote:
      "Wird nur benutzt, um Erfahrungswerte aus Anfängerkursen einzuordnen. Nichts davon wird gespeichert oder verschickt.",
    optionalTag: "optional",
    cta: "Bereich anzeigen",
    skip: "Ohne Angaben weiter",
  },

  result: {
    eyebrow: "Dein Startbereich",
    factorsUnset: "ohne optionale Angaben",
    rulesTitle: "Wovon die Wahl im Bereich abhängt",
    secondWeight: {
      title: "Zweites Gewicht später",
      text: "Die meisten kommen nach sechs bis acht Wochen mit einer zweiten Kettlebell weiter — üblicherweise vier Kilogramm über der ersten. Kein Grund, heute schon zwei zu kaufen.",
    },
    techniqueNote:
      "Weil eine der drei Bewegungen noch nicht sauber läuft: Setz an der unteren Kante an und arbeite zuerst an der Technik. Wenn die Bewegungen sitzen, kannst du im Bereich nach oben gehen.",
    ageNote:
      "Für einen Start ohne regelmäßiges Training zählt hier die untere Kante — es geht schneller nach oben, als du denkst.",
    restart: "Test wiederholen",
    back: "Angaben ändern",
    buy: {
      h3: "Wenn du jetzt kaufst",
      intro: "Drei Wege, sortiert nach Situation — nicht nach Preis.",
      introAffiliate:
        "Die Händler-Links sind Affiliate-Links; für dich ändert sich am Preis nichts.",
      cta: "Zur Kaufberatung",
      disclosure:
        "girevo verkauft nichts selbst. Die Kaufberatung nennt keine Marken, nur die Merkmale, auf die es ankommt.",
    },
  },

  nav: {
    back: "Zurück",
    counter: (step: number, total: number) => `Schritt ${step} von ${total}`,
  },

  disclaimerNote:
    "Dieser Finder rechnet komplett in deinem Browser. Es wird nichts gespeichert und nichts übertragen.",

  // Server-rendered evergreen section below the wizard (SEO — the only channel).
  page: {
    bandsTitle: "Kettlebell-Startgewicht: ein Bereich statt einer Zahl",
    bandsIntro:
      "Zum Schwingen darf die Kettlebell schwerer sein, zum Drücken über Kopf leichter — deshalb ein Bereich statt einer Zahl. Ausgangspunkt ist, wie regelmäßig du dich belastest; Technik-Check und Schwerpunkt verschieben dich darin um höchstens eine Stufe.",
    bandsHeadActivity: "Wie aktiv du gerade bist",
    bandsHeadRange: "Bereich für eine Allzweck-Hantel",
    ratgeberLine: "Die lange Fassung steht im",
    faqTitle: "Häufige Fragen zum Startgewicht",
    nextTitle: "Und dann?",
  },
};

// §7 check applied to every answer: no bare number, no health/pain language,
// nothing stored. Every claim here restates copy that already exists above —
// no new facts introduced just for the FAQ.
export const faqItems: { q: string; a: string }[] = [
  {
    q: "Reicht eine Kettlebell zum Anfangen?",
    a: "Ja. Eine reicht für den Start. Die meisten kommen nach sechs bis acht Wochen mit einer zweiten Kettlebell weiter — üblicherweise vier Kilogramm über der ersten. Kein Grund, heute schon zwei zu kaufen.",
  },
  {
    q: "Wie genau ist der Selbsttest?",
    a: "Er ersetzt keine Formel und keine Waage. Er prüft, wie sauber drei Grundbewegungen ohne Gewicht laufen, und verbindet das mit deiner Trainingsaktivität. Das Ergebnis ist deshalb ein Bereich, kein Fixwert — die passende Kettlebell unterscheidet sich ohnehin je nach Übung.",
  },
  {
    q: "Muss ich Alter und Geschlecht angeben?",
    a: "Nein, beide Angaben sind optional. Ohne sie bekommst du denselben Bereich, nur etwas breiter.",
  },
  {
    q: "Was, wenn eine der drei Testbewegungen noch nicht sauber läuft?",
    a: "Dann setzt du an der unteren Kante deines Bereichs an und arbeitest zuerst an der Technik. Sobald die Bewegung sitzt, kannst du im Bereich nach oben gehen.",
  },
  {
    q: "Werden meine Angaben gespeichert?",
    a: "Nein. Der Finder rechnet komplett in deinem Browser. Es wird nichts gespeichert und nichts übertragen.",
  },
];

export const bandRows: { label: string; range: string }[] = [
  { label: "kein regelmäßiges Training", range: "8–10 kg" },
  { label: "gelegentlich aktiv", range: "10–12 kg" },
  { label: "regelmäßig aktiv, kein Krafttraining", range: "12–14 kg" },
  { label: "regelmäßiges Krafttraining", range: "14–18 kg" },
];

// --- Result helpers ----------------------------------------------------------

export const rangeText = (r: WeightRange) => `${r.lowKg}–${r.highKg} kg`;

const half = (r: WeightRange) => {
  const mid = (r.lowKg + r.highKg) / 2;
  return { low: `${r.lowKg}–${mid} kg`, high: `${mid}–${r.highKg} kg` };
};

export function resultLead(range: WeightRange): string {
  return `Alles innerhalb von ${rangeText(
    range,
  )} ist für deinen Start eine vernünftige Wahl. Der Bereich ist keine Unschärfe — er deckt ab, dass eine Kettlebell für Schwungübungen schwerer sein darf als für Druck- und Halteübungen.`;
}

export function resultCallout(range: WeightRange): string {
  return `Innerhalb von ${rangeText(
    range,
  )} entscheidet die Übung, nicht der Katalog. Fang am unteren Ende an, wenn du zuerst die Bewegung sauber haben willst.`;
}

export function resultRules(range: WeightRange): { title: string; text: string }[] {
  const h = half(range);
  return [
    {
      title: `Unteres Ende (${h.low})`,
      text: "Wenn du die Bewegung erst sauber bekommen willst, überwiegend über Kopf oder einarmig drückst oder länger als vier Wochen nicht trainiert hast.",
    },
    {
      title: `Oberes Ende (${h.high})`,
      text: "Wenn der Selbsttest glatt lief, du zwei- bis dreimal pro Woche trainieren willst und mit Schwungübungen anfängst.",
    },
    copy.result.secondWeight,
  ];
}

export function buyOptions(range: WeightRange): {
  title: string;
  price: string;
  criterion: string;
  detail: string;
}[] {
  const h = half(range);
  return [
    {
      title: `Eine Kettlebell, unteres Ende (${h.low})`,
      price: "ca. 30–55 €",
      criterion:
        "du zum ersten Mal mit Kettlebells arbeitest und erst die Bewegung willst.",
      detail:
        "Gusseisen am Stück, pulverbeschichteter Griff, keine Schweißnaht in der Handfläche. Griffdurchmesser 33–35 mm.",
    },
    {
      title: `Zwei Gewichte über den Bereich (${rangeText(range)})`,
      price: "ca. 70–110 €",
      criterion:
        "du sicher bist, dass du dranbleibst, und Platz zum Abstellen hast.",
      detail:
        "Je eine Kettlebell am unteren und am oberen Ende. Deckt leichte und schwere Übungen ab dem ersten Tag ab und ist zusammen meist günstiger als zwei Einzelbestellungen.",
    },
    {
      title: "Verstellbare Kettlebell",
      price: "ca. 90–160 €",
      criterion:
        "du in einer Wohnung wenig Stellfläche hast oder das Gerät wegräumen musst.",
      detail:
        "Ein Korpus, mehrere Stufen. Etwas klobiger im Griff — für Schwungübungen prüfen, ob der Verschluss ruhig bleibt.",
    },
  ];
}

/** Which advisory note (if any) to show, derived the same way as spec D.2. */
export function advisoryNote(args: {
  edge: Edge;
  techniqueClean: boolean;
  trainingBackground: TrainingBackground;
  ageBand: AgeBand | null;
}): string | null {
  if (!args.techniqueClean) return copy.result.techniqueNote;
  if (args.ageBand === "age_50_plus" && args.trainingBackground === "untrained") {
    return copy.result.ageNote;
  }
  return null;
}
