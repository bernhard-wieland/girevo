// CLAUDE.md §7 is a Hard Rule: shipped content must not contain a single word about
// pain, injury, rehab, therapy, or seeing a doctor — anywhere, including asides.
// This module lets a test enforce that automatically over every content module.

/**
 * Health / medical terms that must never appear in shipped German content.
 * Substrings, matched case-insensitively. Chosen to avoid false positives:
 * "Rücken" (fine as a technique cue) and "Beschwerde" (a DSGVO legal term) are
 * deliberately NOT here — only unambiguous health language is.
 */
export const FORBIDDEN_TERMS: string[] = [
  "schmerz",
  "wehtun",
  "weh tun",
  "tut weh",
  "verletz", // Verletzung, verletzt, verletzen
  "reha", // Reha, Rehabilitation, Reha-
  "therapie", // Therapie, Physiotherapie, therapeutisch
  "physio",
  "arzt",
  "ärzt", // Ärztin, ärztlich
  "mediziner",
  "medizinisch",
  "orthopäd",
  "bandscheibe",
  "hexenschuss",
  "zerrung",
  "prellung",
  "diagnose",
  "krankheit",
  "chronisch",
  "heilung",
  "heilen",
];

/** Recursively collect every string value in a content object. */
export function collectStrings(value: unknown, out: string[] = []): string[] {
  if (typeof value === "string") {
    out.push(value);
  } else if (Array.isArray(value)) {
    for (const item of value) collectStrings(item, out);
  } else if (value && typeof value === "object") {
    for (const v of Object.values(value)) collectStrings(v, out);
  }
  return out;
}

export interface PolicyHit {
  term: string;
  text: string;
}

export function findForbidden(strings: string[]): PolicyHit[] {
  const hits: PolicyHit[] = [];
  for (const text of strings) {
    const lower = text.toLowerCase();
    for (const term of FORBIDDEN_TERMS) {
      if (lower.includes(term)) hits.push({ term, text });
    }
  }
  return hits;
}
