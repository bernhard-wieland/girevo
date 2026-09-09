// Impressum + Datenschutzerklärung content.
//
// CLAUDE.md: Austrian legal texts must be verified, not written from memory. This
// is a careful draft grounded in the site's *actual* data processing (which is
// minimal — static site on Cloudflare, no cookies, no analytics, no third-party
// runtime requests, self-hosted fonts). Before the URL is promoted publicly it
// still needs a check against current Austrian rules — run it through an AT
// generator (WKO, activeMind AT, Dr. DSGVO) or a lawyer.
//
// § 5 ECG + § 25 MedienG for the Impressum; DSGVO Art. 13/14 for the DSE.
//
// TO VERIFY / UPDATE before go-live:
//  - Cloudflare contracting entity + transfer mechanism (SCCs / EU-US DPF status)
//  - Whether a Gewerbe/UID becomes required once the paid product exists
//  - The §7 question of a medical disclaimer is deliberately NOT here — CLAUDE.md
//    spec F.2 defers that to the §8 round; §7 forbids the wording site-wide.

export const OPERATOR = {
  name: "Bernhard Wieland",
  street: "Neubaustraße 5/8",
  city: "8490 Bad Radkersburg",
  country: "Österreich",
  email: "bernhard.wieland@yahoo.de",
};

export const LEGAL_UPDATED = "2026-09-09";

export function formatLegalUpdated(): string {
  const months = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember",
  ];
  const [y, m, day] = LEGAL_UPDATED.split("-").map(Number);
  return `${day}. ${months[m - 1]} ${y}`;
}

export const impressum = {
  meta: {
    title: "Impressum",
    description: "Impressum und Offenlegung gemäß § 5 ECG und § 25 MedienG.",
  },
  h1: "Impressum",
  intro: "Offenlegung gemäß § 5 E-Commerce-Gesetz (ECG) und § 25 Mediengesetz (MedienG).",
  sections: [
    {
      h2: "Medieninhaber, Herausgeber und für den Inhalt verantwortlich",
      lines: [
        OPERATOR.name,
        OPERATOR.street,
        `${OPERATOR.city}, ${OPERATOR.country}`,
      ],
    },
    {
      h2: "Kontakt",
      lines: [`E-Mail: ${OPERATOR.email}`],
    },
    {
      h2: "Unternehmensgegenstand und grundlegende Richtung",
      body: "girevo.de ist eine private, derzeit nicht-kommerzielle Informationswebsite zum Einstieg mit der Kettlebell. Sie stellt ein Werkzeug zur Bestimmung eines Startgewichts-Bereichs sowie erklärende Inhalte bereit. Es besteht keine Gewerbeberechtigung und keine Umsatzsteuer-Identifikationsnummer; sollte sich das ändern, wird dieses Impressum entsprechend ergänzt.",
    },
    {
      h2: "Haftung für Inhalte",
      body: "Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität wird jedoch keine Gewähr übernommen. Die Angaben zu Trainingsgewichten sind Orientierungswerte und ersetzen keine individuelle Anleitung.",
    },
    {
      h2: "Haftung für Links",
      body: "Diese Website enthält gegebenenfalls Verweise auf externe Websites Dritter, auf deren Inhalte kein Einfluss besteht. Für diese fremden Inhalte wird keine Gewähr übernommen; verantwortlich ist stets der jeweilige Anbieter der verlinkten Seite.",
    },
    {
      h2: "Urheberrecht",
      body: "Texte, Grafiken und das Layout dieser Website sind urheberrechtlich geschützt. Eine Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.",
    },
  ],
};

export const datenschutz = {
  meta: {
    title: "Datenschutzerklärung",
    description:
      "Wie girevo.de mit personenbezogenen Daten umgeht: kein Tracking, keine Cookies, selbst gehostete Schriften, Auslieferung über Cloudflare.",
  },
  h1: "Datenschutzerklärung",
  intro:
    "Diese Website ist bewusst datensparsam aufgebaut: keine Cookies, keine Analyse- oder Tracking-Dienste, keine Einbindung sozialer Netzwerke, keine Ladevorgänge von Drittservern beim Aufruf. Nachfolgend die Details gemäß Art. 13 DSGVO.",
  sections: [
    {
      h2: "Verantwortlicher",
      body: `Verantwortlich für die Datenverarbeitung auf dieser Website ist ${OPERATOR.name}, ${OPERATOR.street}, ${OPERATOR.city}, ${OPERATOR.country}, E-Mail ${OPERATOR.email}.`,
    },
    {
      h2: "Aufruf der Website und Server-Logs",
      body: "Beim Aufruf der Website verarbeitet der Hosting- und Content-Delivery-Dienst technisch notwendige Zugriffsdaten: IP-Adresse, Datum und Uhrzeit des Zugriffs, die angeforderte Ressource, HTTP-Statuscode, übertragene Datenmenge, Referrer sowie Angaben zu Browser und Betriebssystem. Diese Daten sind erforderlich, um die Seite auszuliefern, ihre Stabilität und Sicherheit zu gewährleisten und Angriffe abzuwehren. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren, funktionierenden Auftritt). Eine Zusammenführung dieser Daten mit anderen Datenquellen oder eine Auswertung zu Werbezwecken findet nicht statt.",
    },
    {
      h2: "Hosting und Content Delivery (Cloudflare)",
      body: "Die Website wird über Cloudflare, Inc. (101 Townsend Street, San Francisco, CA 94107, USA) ausgeliefert. Cloudflare verarbeitet die oben genannten Zugriffsdaten als Auftragsverarbeiter, um die Inhalte performant bereitzustellen und vor Missbrauch und Angriffen zu schützen. Dabei kann es zu einer Übermittlung von Daten in die USA kommen. Grundlage der Übermittlung sind die Standardvertragsklauseln der EU-Kommission (Art. 46 DSGVO); Cloudflare hat sich zudem dem EU-US Data Privacy Framework unterworfen. Einzelheiten: https://www.cloudflare.com/privacypolicy/ und https://www.cloudflare.com/cloudflare-customer-dpa/.",
    },
    {
      h2: "Schriftarten",
      body: "Die verwendete Schriftart „Archivo“ wird lokal von diesem Server ausgeliefert. Beim Seitenaufruf besteht keine Verbindung zu Google Fonts oder anderen externen Schriftanbietern.",
    },
    {
      h2: "Cookies und lokale Speicherung",
      body: "Diese Website setzt keine Cookies. Der Gewichtsfinder rechnet vollständig im Browser und speichert dabei nichts — weder auf dem Server noch lokal im Browser. Es werden keine Eingaben übertragen oder gespeichert.",
    },
    {
      h2: "Kontaktaufnahme per E-Mail",
      body: `Wenn du uns eine E-Mail schreibst, werden deine Angaben (E-Mail-Adresse, Name soweit angegeben, Inhalt der Nachricht) zur Bearbeitung der Anfrage verarbeitet und gespeichert, solange dies zur Bearbeitung erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO. Der E-Mail-Verkehr wird über den Anbieter Yahoo (Yahoo EMEA Limited, 5-7 Point Village, North Wall Quay, Dublin 1, Irland) abgewickelt.`,
    },
    {
      h2: "Keine automatisierte Entscheidungsfindung",
      body: "Es findet keine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne des Art. 22 DSGVO statt.",
    },
    {
      h2: "Deine Rechte",
      body: "Du hast das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie das Recht, einer auf berechtigtem Interesse beruhenden Verarbeitung zu widersprechen (Art. 21). Wende dich dafür an die oben genannte Kontaktadresse.",
    },
    {
      h2: "Beschwerderecht",
      body: "Wenn du der Ansicht bist, dass die Verarbeitung deiner Daten gegen die DSGVO verstößt, kannst du dich bei einer Aufsichtsbehörde beschweren. Zuständig ist die Österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Wien, dsb@dsb.gv.at, www.dsb.gv.at.",
    },
  ],
};
