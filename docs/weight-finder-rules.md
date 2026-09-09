# Gewichtsfinder — Regeltabelle (Spezifikation)

**Zweck:** Referenz für §12.1. Deterministische Regel für die Startgewichts-Empfehlung des
kostenlosen Gewichtsfinders. Dieses Dokument ist die Vorlage für die Test-Suite der späteren
Rule-Engine (§11): jede zulässige Eingabekombination muss genau einen Ausgabebereich ergeben.

**Version:** 1 — 2026-09-09
**Rechtlicher Rahmen:** §7 der Projektanweisungen ist bindend. Nie eine Einzelzahl ohne
Bedingung. Kein Wort zu Schmerz/Beschwerden/Reha/Therapie. Keine Körpermetrik abgefragt oder
gespeichert. Berechnung läuft clientseitig, es wird nichts persistiert.

**Bezeichner/Enums:** Englisch (§4). Ausgabestrings: Deutsch (Content).

---

## A. Designprinzip

Die Zielgruppe hat die Hantel **noch nicht** (§1: Kanal sitzt vor dem Kauf). Daraus folgt:

- Der Selbsttest setzt **keine Kettlebell voraus**. Er baut auf Körpergewichts-Bewegungen auf.
- Improvisierte Gewichte werden **nie geschwungen** — nur ein optionaler, kontrollierter
  Drück-Proxy ist zugelassen.
- Der limitierende Faktor für eine Einzelhantel ist die Drück-Bewegung, nicht der Swing.
  Deshalb ist die Einzelhantel-Empfehlung immer ein Kompromiss und wird als *Bereich* ausgegeben.

---

## B. Eingangsgrößen

| key | Werte (enum) | Pflicht | Rolle |
|---|---|---|---|
| `focus` | `strength_press` · `mixed` · `conditioning_swings` | ja | verschiebt Kante/Band |
| `training_background` | `untrained` · `occasional` · `active_no_strength` · `strength_trained` | ja | **Hauptachse** |
| `technique_check` | siehe C | ja | Feinjustierung nach unten |
| `sex` | `female` · `male` · *(unset)* | nein | Bereichs-Modifier |
| `age_band` | `under_50` · `age_50_plus` · *(unset)* | nein | nur wirksam wenn untrainiert |

Nicht abgefragt, nicht gespeichert: Körpergewicht, Maße, Körperfett, Fotos (§7).

Deutsche Labels (Content, Auswahl im UI):
- `focus`: „überwiegend Kraft/Drücken" · „gemischt" · „überwiegend Swings/Kondition"
- `training_background`: „kein regelmäßiges Training" · „gelegentlich aktiv" ·
  „regelmäßig aktiv, kein Krafttraining" · „regelmäßiges Krafttraining"

---

## C. Technik-Selbstcheck (Körpergewicht, ohne Hantel)

Drei Bewegungen, je „sauber / noch nicht sauber". Bewusst **ohne jeden Bezug zu Schmerz,
Beschwerden oder Abklärung**.

| key | Bewegung (deutsches Label) |
|---|---|
| `squat_clean` | Tiefe Kniebeuge, Fersen am Boden, Rücken lang, kontrolliert |
| `hinge_clean` | Hüftbeuge (Hip Hinge), Rücken lang |
| `overhead_clean` | Arme frei über Kopf strecken, ohne ins Hohlkreuz auszuweichen |

Optionaler Drück-Proxy für die obere Kante (`press_proxy_clean`, boolean, default `false`):
gefüllter 5-Liter-Kanister (≈ 5 kg) einige Male sauber über Kopf drücken. **Nur Drücken,
nie Schwingen.**

Regel: Ist auch nur eine der drei Pflicht-Bewegungen `false` → Ergebnis wird auf die untere Kante
des Bereichs gezogen. Es erscheint **nie** ein Hinweis in Richtung Verletzung oder Arzt — nur:
„setz an der unteren Kante an und arbeite an der Technik".

---

## D. Ausgabe-Logik → Bereich (Einzelhantel, Allzweck)

### D.1 Grundbereich nach Hauptachse

| `training_background` | Bereich |
|---|---|
| `untrained` | 8–10 kg |
| `occasional` | 10–12 kg |
| `active_no_strength` | 12–14 kg |
| `strength_trained` | 14–18 kg |

> **Arbeitsstand.** Die *Struktur* (vier Bänder, Bereich statt Zahl) ist der belastbare Teil.
> Die exakten kg-Grenzen sind Fitness-Content und werden **vor Go-live gegen zwei bis drei
> seriöse deutschsprachige Quellen geprüft**, nicht aus dem Gedächtnis eingefroren. Bis dahin
> gelten die Werte oben als Default für Implementierung und Tests.

### D.2 Deterministische Auflösungsreihenfolge

Die Engine wendet die Schritte **in dieser Reihenfolge** an. „Kante" = Unter- oder Obergrenze
des Bandes. „Band verschieben" = zum benachbarten Band der Tabelle D.1 wechseln.
Nettoverschiebung ist auf **maximal ein Band** gegenüber dem Grundbereich begrenzt.

1. **Start:** Grundbereich aus D.1 nach `training_background`. Ausgabe = volles Band.
2. **focus:**
   - `strength_press` → auf die **untere Kante** setzen.
   - `conditioning_swings` → **obere Kante**; wenn zusätzlich `overhead_clean` und
     `press_proxy_clean` beide `true`, darf das Band um **eine Stufe nach oben** verschoben werden.
   - `mixed` → volles Band bleibt.
3. **technique_check:** ist eine Pflicht-Bewegung `false` → auf die **untere Kante** ziehen
     (überschreibt eine obere Kante aus Schritt 2).
4. **sex = `female`** (falls gesetzt) → Band um **eine Stufe nach unten** verschieben.
5. **age_band = `age_50_plus` UND training_background = `untrained`** → auf **untere Kante**.
6. **Cap:** resultierendes Band um max. **ein Band** von D.1 entfernt. Weiter gehende
     Verschiebungen werden auf dieses Limit gekürzt.

### D.3 Ausgabeformat (Content, §7-konform)

Immer Bedingung + Spanne, nie eine nackte Zahl. Muster:

> „Wenn du die drei Bewegungen sauber schaffst und regelmäßig aktiv bist, liegst du für eine
> Allzweck-Hantel im Bereich 12–14 kg. Willst du vor allem schwingen, kannst du an die obere
> Kante gehen; willst du viel über Kopf drücken, an die untere."

Bei nicht durchweg sauberem Technik-Check zusätzlich, wertneutral:

> „Setz an der unteren Kante an und arbeite zuerst an der Technik."

---

## E. §7-Selbstkontrolle (muss bei jeder Ausgabe erfüllt sein)

- [ ] Keine Zahl ohne Bedingung.
- [ ] Kein Wort zu Schmerz, Beschwerden, Verletzung, Reha, Therapie, Arzt — auch nicht
      wohlmeinend, auch nicht in FAQ.
- [ ] Keine Körpermetrik abgefragt oder gespeichert.
- [ ] `sex`, `age_band` optional und ausschließlich als Bereichs-Modifier.
- [ ] Keine Persistenz; Berechnung clientseitig.

---

## F. Offen / vor Go-live zu klären

1. kg-Grenzen aus D.1 gegen Quellen prüfen und dann als v2 einfrieren.
2. Seiten-Disclaimer („keine medizinische Beratung") gehört in die §8-Rechtstext-Runde,
   nicht in diese Regel — berührt die §7-Grenze und wird dort entschieden.
3. Zweithantel-Empfehlung (Drücken vs. Swing verlangen unterschiedliche Last) ist bewusst
   **nicht** Teil des kostenlosen Finders, sondern gehört ins bezahlte Produkt / die
   Hantel-Empfehlung (§1, §4).
