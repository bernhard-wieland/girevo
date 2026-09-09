// Deterministic weight-finder rule engine.
// Spec reference: docs/weight-finder-rules.md, section D.2.
//
// This is the browser-side implementation. It is kept in lockstep with the C# reference
// implementation at src/KettlebellFinder.Domain/WeightFinder.cs — same steps, same order,
// same D.2 test table. Change one, change the other.
//
// LIABILITY (§7): output is always a range plus an edge hint, never a bare number.
// No body metrics are accepted, computed, or stored — every input below is non-metric.
// Nothing is persisted; this runs entirely client-side (spec D).

export type Focus = "strength_press" | "mixed" | "conditioning_swings";

export type TrainingBackground =
  | "untrained"
  | "occasional"
  | "active_no_strength"
  | "strength_trained";

export type Sex = "female" | "male";

export type AgeBand = "under_50" | "age_50_plus";

/** Where within the recommended range to start. Advisory only — never collapses the range. */
export type Edge = "lower" | "upper" | "either";

/** Bodyweight self-check plus an optional press proxy. All non-metric (§7). */
export interface TechniqueCheck {
  squatClean: boolean;
  hingeClean: boolean;
  overheadClean: boolean;
  /** Optional 5 kg overhead-press proxy — press only, never a swing. Defaults to false. */
  pressProxyClean?: boolean;
}

export interface WeightFinderInput {
  focus: Focus;
  trainingBackground: TrainingBackground;
  technique: TechniqueCheck;
  sex?: Sex;
  ageBand?: AgeBand;
}

/** Recommended weight range in kg. Always a span (§7). */
export interface WeightRange {
  lowKg: number;
  highKg: number;
}

export interface WeightRecommendation {
  range: WeightRange;
  edge: Edge;
}

// Ordered by training background — index matches BAND_ORDER below.
const BAND_ORDER: TrainingBackground[] = [
  "untrained",
  "occasional",
  "active_no_strength",
  "strength_trained",
];

// Base ranges per training background (spec D.1). WORKING VALUES: the four-band structure
// is stable, the exact kg boundaries are not frozen and must be checked against sources
// before go-live (spec F.1). Indexed like BAND_ORDER.
const BANDS: readonly WeightRange[] = [
  { lowKg: 8, highKg: 10 }, // untrained
  { lowKg: 10, highKg: 12 }, // occasional
  { lowKg: 12, highKg: 14 }, // active_no_strength
  { lowKg: 14, highKg: 18 }, // strength_trained
];

const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

/**
 * Resolves an input to exactly one recommendation by applying the spec D.2 steps in order.
 * Pure and deterministic: the same input always yields the same output.
 */
export function resolveWeight(input: WeightFinderInput): WeightRecommendation {
  const technique = input.technique;

  const baseBand = BAND_ORDER.indexOf(input.trainingBackground);
  let band = baseBand;
  let edge: Edge = "either";

  // Step 2 — focus.
  switch (input.focus) {
    case "strength_press":
      edge = "lower";
      break;
    case "conditioning_swings":
      edge = "upper";
      // Only bump the band up on a demonstrably clean overhead press.
      if (technique.overheadClean && technique.pressProxyClean) {
        band += 1;
      }
      break;
    case "mixed":
    default:
      break;
  }

  // Step 3 — technique. Any mandatory movement not clean pulls to the lower edge,
  // overriding an upper edge set by a conditioning focus.
  const techniqueClean =
    technique.squatClean && technique.hingeClean && technique.overheadClean;
  if (!techniqueClean) {
    edge = "lower";
  }

  // Step 4 — sex (optional). The press ceiling limits a single all-purpose bell more,
  // so shift one band down. Range modifier only (§7).
  if (input.sex === "female") {
    band -= 1;
  }

  // Step 5 — age (optional). Only relevant for an untrained starter.
  if (input.ageBand === "age_50_plus" && input.trainingBackground === "untrained") {
    edge = "lower";
  }

  // Step 6 — cap the net band shift to one band from base, then clamp to the valid range.
  band = clamp(band, baseBand - 1, baseBand + 1);
  band = clamp(band, 0, BANDS.length - 1);

  return { range: BANDS[band], edge };
}
