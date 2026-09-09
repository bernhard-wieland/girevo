// German content for the weight finder. One locale shipped (de); a future locale is a
// sibling file with the same shape. No shipped string is hard-coded in a component (§4).
//
// §7 self-check for everything in this file:
//  - no output is a bare number — always a condition plus a range
//  - not one word about pain, complaints, injury, rehab, therapy, or seeing anyone
//  - no body metrics are asked for
//  - sex and age appear only as optional range modifiers

import type {
  AgeBand,
  Edge,
  Focus,
  TrainingBackground,
  WeightRange,
} from "@/lib/weightFinder";

export const focusLabels: Record<Focus, string> = {
  strength_press: "überwiegend Kraft und Drücken",
  mixed: "gemischt",
  conditioning_swings: "überwiegend Swings und Kondition",
};

export const trainingBackgroundLabels: Record<TrainingBackground, string> = {
  untrained: "kein regelmäßiges Training",
  occasional: "gelegentlich aktiv",
  active_no_strength: "regelmäßig aktiv, kein Krafttraining",
  strength_trained: "regelmäßiges Krafttraining",
};

export const sexLabels = {
  unset: "keine Angabe",
  female: "weiblich",
  male: "männlich",
} as const;

export const ageBandLabels: Record<AgeBand | "unset", string> = {
  unset: "keine Angabe",
  under_50: "unter 50",
  age_50_plus: "50 oder älter",
};

export const techniqueMovements = [
  {
    key: "squatClean",
    label: "Tiefe Kniebeuge",
    detail:
      "In die tiefe Hocke und wieder hoch, Fersen bleiben am Boden, der Rücken bleibt lang, die Bewegung bleibt kontrolliert.",
  },
  {
    key: "hingeClean",
    label: "Hüftbeuge (Hip Hinge)",
    detail:
      "Das Gesäß nach hinten schieben und den Oberkörper nach vorn neigen, Knie nur leicht gebeugt, der Rücken bleibt lang.",
  },
  {
    key: "overheadClean",
    label: "Arme über den Kopf strecken",
    detail:
      "Beide Arme frei nach oben strecken, ohne dass du ins Hohlkreuz ausweichst oder die Rippen nach vorn kippst.",
  },
] as const;

export const pressProxy = {
  label: "Optionaler Drück-Test",
  detail:
    "Einen vollen 5-Liter-Kanister (etwa 5 kg) einige Male sauber über den Kopf drücken. Nur drücken, nie schwingen. Lass diesen Test weg, wenn du dir unsicher bist.",
  checkboxLabel: "Den 5-kg-Kanister habe ich sauber über den Kopf gedrückt",
};

const rangeText = (range: WeightRange) => `${range.lowKg}–${range.highKg} kg`;

const edgeHint: Record<Edge, string> = {
  lower: "Fang an der unteren Kante des Bereichs an.",
  upper: "Du kannst an der oberen Kante des Bereichs anfangen.",
  either: "Wo im Bereich du anfängst, kannst du nach deinem Schwerpunkt wählen: eher unten, wenn du viel über Kopf drücken willst, eher oben, wenn du vor allem schwingen willst.",
};

/**
 * Builds the §7-compliant recommendation text: always a condition, then a range, then an
 * edge hint. `techniqueClean` is false when at least one mandatory movement was marked
 * "noch nicht" — in that case the extra, value-neutral technique line is appended.
 */
export function recommendationText(args: {
  range: WeightRange;
  edge: Edge;
  trainingBackground: TrainingBackground;
  techniqueClean: boolean;
}): { headline: string; body: string; techniqueNote: string | null } {
  const backgroundClause = {
    untrained: "aktuell nicht regelmäßig trainierst",
    occasional: "gelegentlich aktiv bist",
    active_no_strength: "regelmäßig aktiv bist, aber kein Krafttraining machst",
    strength_trained: "regelmäßig Krafttraining machst",
  }[args.trainingBackground];

  return {
    headline: `Für dich liegt eine Allzweck-Kettlebell im Bereich ${rangeText(args.range)}.`,
    body: `Wenn du die drei Bewegungen sauber schaffst und ${backgroundClause}, ist das der Bereich, aus dem du deine erste Hantel wählst. ${edgeHint[args.edge]}`,
    techniqueNote: args.techniqueClean
      ? null
      : "Weil eine der drei Bewegungen noch nicht rund läuft: Setz an der unteren Kante an und arbeite zuerst an der Technik. Wenn die Bewegungen sauber sitzen, kannst du im Bereich nach oben gehen.",
  };
}

export const copy = {
  h1: "Kettlebell-Startgewicht: welches ist deins?",
  intro:
    "Die passende erste Kettlebell hängt nicht von einer Tabelle mit Körpergewicht ab, sondern davon, wie sicher du dich in ein paar Grundbewegungen bewegst und was du mit der Hantel vorhast. Der Selbsttest unten braucht keine Kettlebell — du kannst ihn machen, bevor du eine kaufst.",
  howItWorksTitle: "So funktioniert der Selbsttest",
  howItWorksSteps: [
    "Probiere die drei Bewegungen ohne Gewicht aus und markiere für jede, ob sie kontrolliert läuft oder noch nicht.",
    "Wähle, was du vor allem trainieren willst und wie aktiv du gerade bist.",
    "Du bekommst einen Gewichtsbereich statt einer einzelnen Zahl — plus einen Hinweis, wo im Bereich du für deinen Schwerpunkt anfängst.",
  ],
  whyRangeTitle: "Warum ein Bereich und keine feste Zahl",
  whyRangeBody:
    "Eine einzelne Kettlebell ist immer ein Kompromiss: Zum Schwingen dürfte sie schwerer sein, zum Drücken über Kopf leichter. Der begrenzende Faktor ist das Drücken. Deshalb nennt dir dieser Finder einen Bereich und überlässt dir die Feinwahl — je nachdem, ob du eher schwingen oder eher drücken willst.",
  bandsTitle: "Die vier Grundbereiche",
  bandsIntro:
    "Ausgangspunkt ist, wie regelmäßig du dich gerade belastest. Fokus, Technik-Check und die optionalen Angaben verschieben dich innerhalb dieser Bereiche oder um höchstens einen Bereich.",
  bandsDraftNote:
    "Arbeitsstand: Die Struktur aus vier Bereichen steht. Die genauen kg-Grenzen werden vor der Veröffentlichung noch gegen mehrere Quellen geprüft.",
  formTitle: "Dein Startgewicht bestimmen",
  resultPlaceholder:
    "Sobald du die drei Bewegungen und deinen Schwerpunkt gewählt hast, erscheint hier dein Bereich.",
  fieldsetFocus: "Was willst du vor allem trainieren?",
  fieldsetBackground: "Wie aktiv bist du gerade?",
  fieldsetTechnique: "Technik-Check ohne Gewicht",
  fieldsetTechniqueHint:
    "Für jede Bewegung: läuft sie kontrolliert, oder noch nicht?",
  techniqueClean: "läuft kontrolliert",
  techniqueNotClean: "noch nicht",
  fieldsetOptional: "Optional",
  fieldsetOptionalHint:
    "Beides ist freiwillig und verschiebt den Bereich nur leicht. Ohne Angabe rechnet der Finder neutral.",
  labelSex: "Geschlecht",
  labelAge: "Alter",
  disclaimerNote:
    "Dieser Finder rechnet komplett in deinem Browser. Es wird nichts gespeichert und nichts übertragen.",
};

export const bandRows: { background: TrainingBackground; range: string }[] = [
  { background: "untrained", range: "8–10 kg" },
  { background: "occasional", range: "10–12 kg" },
  { background: "active_no_strength", range: "12–14 kg" },
  { background: "strength_trained", range: "14–18 kg" },
];
