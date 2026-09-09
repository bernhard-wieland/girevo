import { describe, expect, it } from "vitest";
import {
  resolveWeight,
  type TechniqueCheck,
  type WeightFinderInput,
} from "./weightFinder";

// One test per row of the verified D.2 table (docs/weight-finder-rules.md).
// This table is identical to tests/KettlebellFinder.Domain.Tests/WeightFinderTests.cs —
// keep the two in lockstep. These lock the resolution order: change the engine and a
// broken rule fails loudly.

const allClean = (pressProxyClean = false): TechniqueCheck => ({
  squatClean: true,
  hingeClean: true,
  overheadClean: true,
  pressProxyClean,
});

const input = (partial: Partial<WeightFinderInput> & Pick<WeightFinderInput, "focus" | "trainingBackground">): WeightFinderInput => ({
  technique: allClean(),
  ...partial,
});

describe("resolveWeight — D.2 table", () => {
  it("baseline: occasional / mixed / clean → full band, either edge", () => {
    const r = resolveWeight(input({ focus: "mixed", trainingBackground: "occasional" }));
    expect(r.range).toEqual({ lowKg: 10, highKg: 12 });
    expect(r.edge).toBe("either");
  });

  it("strength-trained + press focus → lower edge", () => {
    const r = resolveWeight(input({ focus: "strength_press", trainingBackground: "strength_trained" }));
    expect(r.range).toEqual({ lowKg: 14, highKg: 18 });
    expect(r.edge).toBe("lower");
  });

  it("active-no-strength / mixed → matches spec example", () => {
    const r = resolveWeight(input({ focus: "mixed", trainingBackground: "active_no_strength" }));
    expect(r.range).toEqual({ lowKg: 12, highKg: 14 });
    expect(r.edge).toBe("either");
  });

  it("conditioning + clean press proxy → bumps band up", () => {
    const r = resolveWeight({
      focus: "conditioning_swings",
      trainingBackground: "active_no_strength",
      technique: allClean(true),
    });
    expect(r.range).toEqual({ lowKg: 14, highKg: 18 });
    expect(r.edge).toBe("upper");
  });

  it("conditioning without press proxy → does not bump", () => {
    const r = resolveWeight({
      focus: "conditioning_swings",
      trainingBackground: "active_no_strength",
      technique: allClean(false),
    });
    expect(r.range).toEqual({ lowKg: 12, highKg: 14 });
    expect(r.edge).toBe("upper");
  });

  it("technique failure overrides the upper edge", () => {
    const r = resolveWeight({
      focus: "conditioning_swings",
      trainingBackground: "strength_trained",
      technique: { squatClean: false, hingeClean: true, overheadClean: true, pressProxyClean: true },
    });
    expect(r.range).toEqual({ lowKg: 14, highKg: 18 }); // bump capped at max band
    expect(r.edge).toBe("lower");
  });

  it("female shifts down one band", () => {
    const r = resolveWeight(input({ focus: "mixed", trainingBackground: "occasional", sex: "female" }));
    expect(r.range).toEqual({ lowKg: 8, highKg: 10 });
    expect(r.edge).toBe("either");
  });

  it("age 50+ when untrained → lower edge", () => {
    const r = resolveWeight(input({ focus: "mixed", trainingBackground: "untrained", ageBand: "age_50_plus" }));
    expect(r.range).toEqual({ lowKg: 8, highKg: 10 });
    expect(r.edge).toBe("lower");
  });

  it("age 50+ when not untrained → no effect", () => {
    const r = resolveWeight(input({ focus: "mixed", trainingBackground: "occasional", ageBand: "age_50_plus" }));
    expect(r.range).toEqual({ lowKg: 10, highKg: 12 });
    expect(r.edge).toBe("either");
  });

  it("female on untrained clamps to the lowest band", () => {
    const r = resolveWeight(input({ focus: "mixed", trainingBackground: "untrained", sex: "female" }));
    expect(r.range).toEqual({ lowKg: 8, highKg: 10 });
    expect(r.edge).toBe("either");
  });

  it("conditioning bump cannot exceed the max band", () => {
    const r = resolveWeight({
      focus: "conditioning_swings",
      trainingBackground: "strength_trained",
      technique: allClean(true),
    });
    expect(r.range).toEqual({ lowKg: 14, highKg: 18 });
    expect(r.edge).toBe("upper");
  });

  it("press focus and technique failure both resolve to lower", () => {
    const r = resolveWeight({
      focus: "strength_press",
      trainingBackground: "active_no_strength",
      technique: { squatClean: true, hingeClean: false, overheadClean: true },
    });
    expect(r.range).toEqual({ lowKg: 12, highKg: 14 });
    expect(r.edge).toBe("lower");
  });
});
