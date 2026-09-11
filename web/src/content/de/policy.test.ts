import { describe, expect, it } from "vitest";
import { collectStrings, findForbidden } from "@/lib/contentPolicy";
import { home } from "./home";
import { kaufberatung } from "./kaufberatung";
import { kettlebellZuhause } from "./kettlebellZuhause";
import { datenschutz, impressum } from "./legal";
import { ratgeber } from "./ratgeber";
import { uebungen } from "./uebungen";
import * as weightFinder from "./weightFinder";

// CLAUDE.md §7: no word about pain, injury, rehab, therapy, or seeing a doctor —
// anywhere in shipped content. This locks that in.

const modules: Record<string, unknown> = {
  home,
  kaufberatung,
  impressum,
  datenschutz,
  ratgeber,
  uebungen,
  kettlebellZuhause,
  weightFinder: {
    ...weightFinder,
    // rangeText is a function; collectStrings ignores it.
  },
};

describe("§7 — shipped content carries no health/medical language", () => {
  for (const [name, mod] of Object.entries(modules)) {
    it(name, () => {
      const hits = findForbidden(collectStrings(mod));
      expect(
        hits,
        hits.map((h) => `"${h.term}" in: ${h.text}`).join("\n"),
      ).toEqual([]);
    });
  }
});

describe("§7 — weight advice is always a range, never a bare number", () => {
  it("no content string recommends a single kg value", () => {
    const strings = collectStrings(modules);
    // Allowed: ranges ("8–12 kg"), the 4 kg step-up ("vier Kilogramm", "4-kg-Schritte"),
    // the 5 kg / 5-Liter press-proxy canister, and a weight quoted as a bad example
    // („16 kg") — that is the opposite of a recommendation.
    const ALLOWED_BARE = new Set(["4", "5"]);
    const offenders: string[] = [];

    for (const s of strings) {
      for (const m of s.matchAll(/(\d{1,2})\s?kg\b/gi)) {
        const idx = m.index ?? 0;
        const before = s.slice(Math.max(0, idx - 8), idx);
        const after = s.slice(idx + m[0].length, idx + m[0].length + 6);
        const isRange = /\d\s?[–-]\s?$/.test(before) || /^\s?[–-]\s?\d/.test(after);
        const isQuoted = /[„"»](\s?)$/.test(before);
        if (isRange || isQuoted || ALLOWED_BARE.has(m[1])) continue;
        offenders.push(`"${m[0]}" in: ${s}`);
      }
    }
    expect(offenders, offenders.join("\n")).toEqual([]);
  });
});
