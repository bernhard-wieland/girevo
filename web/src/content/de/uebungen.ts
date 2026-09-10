// German content for the exercises overview (/uebungen).
//
// Scope: free orientation content — the four movements the first weeks are built
// on. NOT the §12-gated exercise system (12 exercises + per-exercise pages + the
// rule-based plan generator), which waits for SEO validation.
//
// §7 check: technique cues only. Not one word about pain, complaints, injury,
// rehab, therapy, or seeing anyone. Rep guidance is orientational, never a
// prescribed set/rep plan. No body metrics.

export const uebungen = {
  meta: {
    title: "Vier Kettlebell-Übungen für die ersten Wochen",
    description:
      "Hüftbeuge und Swing, Goblet-Kniebeuge, Überkopfdrücken, Tragegang (engl. Kettlebell Swing, Goblet Squat, Overhead Press, Suitcase Carry) — was jede Bewegung ist und der häufigste Fehler.",
  },

  eyebrow: "Übungen",
  h1: "Vier Übungen für die ersten Wochen",
  intro:
    "Mehr braucht der Anfang nicht. Diese vier Bewegungen decken Hüfte, Beine, Schultern und Griff ab und sind die Bausteine für fast alles Weitere. Erst wenn sie sauber laufen, lohnt es sich, etwas hinzuzunehmen.",
  introFinderPrefix: "Welches Gewicht dazu passt, klärt der ",
  introFinderLinkLabel: "Gewichtsfinder",
  introFinderSuffix: ".",

  movements: [
    {
      key: "hinge-swing",
      name: "Hüftbeuge und Swing",
      nameEn: "Hip Hinge & Kettlebell Swing",
      whatFor:
        "Die Grundbewegung schlechthin. Aus der sauberen Hüftbeuge wird mit mehr Tempo der Swing.",
      how: [
        "Füße hüftbreit, Kettlebell eine Unterarmlänge vor den Zehen.",
        "Becken nach hinten schieben, Rücken lang, die Hantel zwischen die Beine kippen lassen.",
        "Hüfte kraftvoll strecken, Gesäß fest anspannen — die Hantel schwingt bis etwa auf Brusthöhe, nicht höher.",
        "Sie fällt zurück, du fängst sie mit der nächsten Hüftbeuge auf.",
      ],
      clean:
        "Der Schwung kommt aus der Hüfte, nicht aus den Armen. Der Rücken bleibt über die ganze Bewegung lang, die Arme bleiben locker.",
      error:
        "Die Hantel mit den Schultern hochziehen. Dann wird der Bogen kurz und das Gewicht sackt oben ab — zurück zu weniger Wiederholungen und mehr Pause.",
    },
    {
      key: "goblet-squat",
      name: "Goblet-Kniebeuge",
      nameEn: "Goblet Squat",
      whatFor:
        "Kniebeuge mit der Kettlebell vor der Brust. Das Gegengewicht hält den Oberkörper aufrecht und macht die Bewegung leichter zu lernen als ohne Gewicht.",
      how: [
        "Kettlebell am Bügel dicht vor der Brust halten, Ellbogen zeigen nach unten.",
        "Füße etwas mehr als hüftbreit, Zehen leicht nach außen.",
        "Kontrolliert so tief absetzen, wie es geht, ohne dass die Fersen abheben oder der Rücken rundet.",
        "Über die ganze Fußsohle wieder hochdrücken.",
      ],
      clean:
        "Fersen bleiben am Boden, die Knie folgen der Richtung der Zehen, der Oberkörper bleibt aufrecht.",
      error:
        "Die Knie fallen nach innen. Kurz die Tiefe reduzieren und die Knie bewusst nach außen schieben, bis das Muster sitzt.",
    },
    {
      key: "overhead-press",
      name: "Überkopfdrücken",
      nameEn: "Overhead Press (Strict Press)",
      whatFor:
        "Eine Kettlebell von der Schulter gerade nach oben drücken. Die Übung, die das obere Ende deines Gewichtsbereichs begrenzt.",
      how: [
        "Kettlebell auf der Schulter, der Griff liegt diagonal in der Hand, der Korpus ruht am Unterarm.",
        "Rippen unten lassen, Bauch leicht anspannen — kein Ausweichen ins Hohlkreuz.",
        "Gerade nach oben drücken, bis der Arm gestreckt ist und der Kopf leicht durch die Arme nach vorn geht.",
        "Auf demselben Weg kontrolliert zurück zur Schulter.",
      ],
      clean:
        "Der Weg nach oben ist gerade, der Oberkörper bleibt stabil, oben stehen Handgelenk, Ellbogen und Schulter in einer Linie.",
      error:
        "Sich unter das Gewicht lehnen und ins Hohlkreuz ausweichen. Eine Stufe leichter wählen und den Bauch vor jeder Wiederholung anspannen.",
    },
    {
      key: "carry",
      name: "Tragegang",
      nameEn: "Suitcase Carry (Loaded Carry)",
      whatFor:
        "Eine Kettlebell aufnehmen und ein paar Schritte gehen. Trainiert Griff und Rumpf, ohne dass viel schiefgehen kann.",
      how: [
        "Kettlebell in einer Hand neben dem Körper, Schulter bewusst nach unten und hinten.",
        "Aufrecht gehen, als trügst du auf der anderen Seite ein volles Glas.",
        "Zehn bis zwanzig Schritte, dann absetzen und die Seite wechseln.",
      ],
      clean:
        "Der Oberkörper bleibt gerade, du kippst nicht zur beladenen Seite, die Schritte bleiben ruhig.",
      error:
        "Zur Gewichtsseite kippen. Weniger Gewicht nehmen und die freie Hand zur Kontrolle kurz auf die seitlichen Bauchmuskeln legen.",
    },
  ],

  nameEnLabel: "In Videos meist",
  howToTitle: "So geht’s",
  cleanLabel: "Sauber heißt",
  errorLabel: "Häufigster Fehler",

  reps: {
    title: "Wie viel in den ersten Wochen",
    text: "Kurze Sätze, viele Pausen: fünf bis zehn saubere Wiederholungen am Stück, dann ist der Satz vorbei. Zwei bis drei kurze Einheiten pro Woche mit einem Tag Abstand reichen, um die Bewegungen zu lernen.",
  },
};
