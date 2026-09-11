// German content for the "Was ist Kettlebell-Training?" article.
//
// Scope: orientation/introduction — what kettlebell training is, how it
// differs from dumbbell training, which movement patterns it covers, who it
// suits. Complements /uebungen (per-movement technique) without repeating it.
//
// §7 check: no word about pain, complaints, injury, rehab, therapy, or seeing
// anyone — anywhere, including the FAQ. No body metrics. No bare-number
// weight advice — weight always defers to the finder.

export const KETTLEBELL_TRAINING_UPDATED = "2026-09-11";

export const kettlebellTraining = {
  meta: {
    title: "Was ist Kettlebell-Training?",
    description:
      "Woher die Kettlebell kommt, was sie von Hanteln unterscheidet und welche vier Bewegungsmuster das Training abdeckt — die kurze Einordnung vor dem Einstieg.",
  },

  kicker: "Einstieg",
  readingTime: "5 Minuten Lesezeit",
  h1: "Was ist Kettlebell-Training?",
  deck: "Woher die Kugelhantel kommt, was sie von Hanteln und Fitnessgeräten unterscheidet, und welche vier Bewegungsmuster in ihr stecken.",

  intro:
    "Eine Kettlebell sieht aus wie eine Kanonenkugel mit Henkel — und genau daraus ergibt sich, was das Training mit ihr besonders macht. Ein Überblick, bevor es an die Praxis geht.",

  ctaCard: {
    eyebrow: "Gewichtsfinder",
    text: "Für den Einstieg zählt die Technik mehr als die Vorerfahrung. Der Selbsttest zeigt dir in ein paar Minuten deinen Gewichtsbereich.",
    cta: "Zum Gewichtsfinder",
  },

  toc: [
    { id: "herkunft", label: "Herkunft: die Girya" },
    { id: "unterschied", label: "Was Kettlebell-Training unterscheidet" },
    { id: "bewegungsmuster", label: "Die vier Bewegungsmuster" },
    { id: "fuer-wen", label: "Für wen das Training passt" },
    { id: "vergleich", label: "Kettlebell, Hanteln oder Fitnessstudio" },
  ],

  herkunft: {
    h2: "Herkunft: die Girya",
    p: "Die Kettlebell — auf Russisch Girya — war ursprünglich ein genormtes Gewicht für den Markt, bevor sie im 19. Jahrhundert als Trainingsgerät für Kraft und Ausdauer diente. Der Wettkampfsport Girevoy Sport (Kettlebell-Sport) hält die Bewegungen bis heute in ihrer ursprünglichen Form. Was heute unter „Kettlebell-Training“ läuft, ist eine breitere Auswahl daraus — auf Einsteiger und Training zu Hause zugeschnitten.",
  },

  unterschied: {
    h2: "Was Kettlebell-Training von Hanteltraining unterscheidet",
    p1: "Bei einer Hantel liegt der Schwerpunkt in der Hand. Bei einer Kettlebell liegt er ein Stück darunter, außerhalb der Hand — dadurch verhält sich dasselbe Gewicht in der Bewegung anders und beansprucht Rumpf und Griff spürbar mit, auch bei Übungen, die nicht direkt auf sie zielen.",
    p2: "Der zweite Unterschied ist die Bewegungsart: Eine Kettlebell deckt sowohl schwungvolle Bewegungen wie den Swing als auch langsame, druckende Bewegungen wie die Kniebeuge oder das Überkopfdrücken mit demselben Gerät ab. Für beides bräuchte es im Hantelbereich unterschiedliches Gerät.",
  },

  bewegungsmuster: {
    h2: "Die vier Bewegungsmuster",
    p1: "Vier Grundmuster decken fast alles ab, was in den ersten Monaten zählt:",
    movements: [
      {
        key: "hinge-swing",
        label: "Hüftbeuge und Swing",
        text: "Hüfte und hintere Beinkette",
      },
      {
        key: "goblet-squat",
        label: "Goblet-Kniebeuge",
        text: "Beine, aufrechter Rumpf",
      },
      {
        key: "overhead-press",
        label: "Überkopfdrücken",
        text: "Schultern, ein Arm allein",
      },
      {
        key: "carry",
        label: "Tragegang",
        text: "Griff und Rumpfspannung",
      },
    ],
    p2Prefix: "Zusammen trainieren die vier Bewegungen Hüfte, Beine, Schultern, Rumpf und Griff — ohne Gerätewechsel. Wie jede einzelne genau ausgeführt wird, steht in den ",
    p2LinkLabel: "Übungen",
    p2Suffix: ".",
  },

  fuerWen: {
    h2: "Für wen das Training passt",
    p1: "Gut geeignet, wenn wenig Platz, wenig Zeit und ein einzelnes Gerät gefragt sind — eine Kettlebell deckt Kraft- und Konditionsarbeit gleichzeitig ab. Wer lieber gezielt an einzelnen Muskelgruppen arbeitet oder sehr hohe Gewichte bewegen will, ist mit klassischem Hantel- oder Maschinentraining oft besser bedient.",
    p2Prefix: "Für den Einstieg zählt weniger die Vorerfahrung als die Technik. Ein kurzer ",
    p2LinkLabel: "Selbsttest",
    p2Suffix: " sagt mehr über das passende Startgewicht als jede Tabelle.",
  },

  vergleich: {
    h2: "Kettlebell, Hanteln oder Fitnessstudio",
    p1: "Eine Kettlebell braucht eine Ecke im Zimmer, keine feste Anmeldung und deckt mit einem Gewicht überraschend viel ab. Ein Hantelset mit verstellbaren Gewichten kommt an ähnliche Vielseitigkeit heran, braucht für denselben Trainingsumfang aber mehr Stellfläche. Ein Fitnessstudio bietet die größte Geräteauswahl und oft auch Anleitung vor Ort — dafür laufende Kosten und feste Wege.",
    p2Prefix: "Welche Bauart sich für den Einstieg eignet, steht in der ",
    p2LinkLabel: "Kaufberatung",
    p2Suffix: ".",
  },

  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Ist Kettlebell-Training für Anfänger geeignet?",
        a: "Ja. Die vier Grundbewegungen lassen sich ohne Vorerfahrung lernen — ein technisch sauberer Ablauf zählt mehr als Vorerfahrung.",
      },
      {
        q: "Ersetzt eine Kettlebell das Fitnessstudio?",
        a: "Für Kraft- und Konditionstraining zu Hause reicht eine Kettlebell für die ersten Monate meist aus. Für gezieltes Training einzelner Muskelgruppen oder sehr hohe Gewichte ist ein Fitnessstudio im Vorteil.",
      },
      {
        q: "Wie unterscheidet sich Kettlebell-Training von Hanteltraining?",
        a: "Der Schwerpunkt der Kettlebell liegt außerhalb der Hand, dazu deckt ein einzelnes Gewicht sowohl schwungvolle als auch druckende Bewegungen ab — bei Hanteln braucht das meist unterschiedliches Gerät.",
      },
      {
        q: "Reicht eine Kettlebell für den ganzen Körper?",
        a: "Für die ersten Monate ja. Die vier Grundbewegungen trainieren Hüfte, Beine, Schultern, Rumpf und Griff.",
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
      label: "Workout zu Hause",
      title: "Der Ablauf einer Einheit",
      href: "/kettlebell-workout-zuhause",
      ready: true,
    },
    {
      label: "Gewichtsfinder",
      title: "Welches Startgewicht zu dir passt",
      href: "/kettlebell-startgewicht",
      ready: true,
    },
  ],
  tocLabel: "Inhalt",
};
