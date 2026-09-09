import { describe, expect, it } from "vitest";
import { resolveWeight, type TrainingBackground } from "@/lib/weightFinder";
import { ratgeber } from "./ratgeber";
import {
  advisoryNote,
  bandRows,
  buyOptions,
  copy,
  rangeText,
  resultCallout,
  resultLead,
  resultRules,
  STEP_LABELS,
} from "./weightFinder";

describe("rangeText", () => {
  it("formats as an en-dash range with a unit", () => {
    expect(rangeText({ lowKg: 8, highKg: 12 })).toBe("8–12 kg");
  });
});

describe("bandRows match the engine (the finder table can't drift from D.2)", () => {
  const order: TrainingBackground[] = [
    "untrained",
    "occasional",
    "active_no_strength",
    "strength_trained",
  ];

  it.each(order.map((bg, i) => [bg, i] as const))(
    "%s → bandRows[%i]",
    (bg, i) => {
      const r = resolveWeight({
        focus: "mixed",
        trainingBackground: bg,
        technique: { squatClean: true, hingeClean: true, overheadClean: true },
      });
      expect(rangeText(r.range)).toBe(bandRows[i].range);
    },
  );

  it("the Ratgeber table shows the same four ranges", () => {
    expect(ratgeber.wieDerBereich.table.map((t) => t.v)).toEqual(
      bandRows.map((b) => b.range),
    );
  });
});

describe("advisoryNote — same branching as spec D.2", () => {
  const clean = {
    edge: "either" as const,
    techniqueClean: true,
    trainingBackground: "occasional" as TrainingBackground,
    ageBand: null,
  };

  it("unclean technique → the value-neutral technique line", () => {
    expect(advisoryNote({ ...clean, techniqueClean: false })).toBe(
      copy.result.techniqueNote,
    );
  });

  it("age 50+ AND untrained (technique clean) → the age line", () => {
    expect(
      advisoryNote({ ...clean, trainingBackground: "untrained", ageBand: "age_50_plus" }),
    ).toBe(copy.result.ageNote);
  });

  it("age 50+ but not untrained → no note", () => {
    expect(advisoryNote({ ...clean, ageBand: "age_50_plus" })).toBeNull();
  });

  it("all clean, no modifiers → no note", () => {
    expect(advisoryNote(clean)).toBeNull();
  });

  it("technique failure wins over the age branch", () => {
    expect(
      advisoryNote({
        edge: "lower",
        techniqueClean: false,
        trainingBackground: "untrained",
        ageBand: "age_50_plus",
      }),
    ).toBe(copy.result.techniqueNote);
  });
});

describe("result helpers reference the resolved range", () => {
  const range = { lowKg: 12, highKg: 14 };

  it("lead and callout embed the range text", () => {
    expect(resultLead(range)).toContain("12–14 kg");
    expect(resultCallout(range)).toContain("12–14 kg");
  });

  it("resultRules: lower/upper halves + the second-weight card", () => {
    const rules = resultRules(range);
    expect(rules).toHaveLength(3);
    expect(rules[0].title).toBe("Unteres Ende (12–13 kg)");
    expect(rules[1].title).toBe("Oberes Ende (13–14 kg)");
    expect(rules[2]).toEqual(copy.result.secondWeight);
  });

  it("buyOptions: three, priced ranges, first is the low half", () => {
    const opts = buyOptions(range);
    expect(opts).toHaveLength(3);
    expect(opts[0].title).toContain("12–13 kg");
    expect(opts[1].title).toContain("12–14 kg");
    expect(opts.every((o) => /^ca\. \d+–\d+ €$/.test(o.price))).toBe(true);
  });

  it("odd-width band still yields a clean half (14–18 → 16)", () => {
    const rules = resultRules({ lowKg: 14, highKg: 18 });
    expect(rules[0].title).toBe("Unteres Ende (14–16 kg)");
    expect(rules[1].title).toBe("Oberes Ende (16–18 kg)");
  });
});

describe("wizard shape", () => {
  it("five steps, ending in the result", () => {
    expect(STEP_LABELS).toHaveLength(5);
    expect(STEP_LABELS[STEP_LABELS.length - 1]).toBe("Ergebnis");
  });
});
