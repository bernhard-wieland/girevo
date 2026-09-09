namespace KettlebellFinder.Domain;

// Deterministic weight-finder rule engine.
// Spec reference: weight-finder-rules.md, section D.2.
//
// LIABILITY (§7): output is always a range plus an edge hint, never a bare number.
// No body metrics are accepted, computed, or stored — every input below is non-metric.

public enum Focus
{
    StrengthPress,
    Mixed,
    ConditioningSwings,
}

public enum TrainingBackground
{
    Untrained = 0,
    Occasional = 1,
    ActiveNoStrength = 2,
    StrengthTrained = 3,
}

public enum Sex
{
    Female,
    Male,
}

public enum AgeBand
{
    Under50,
    Age50Plus,
}

/// <summary>Where within the recommended range to start. Advisory text only — never collapses the range.</summary>
public enum Edge
{
    Lower,
    Upper,
    Either,
}

/// <summary>Bodyweight self-check plus an optional press proxy. All non-metric (§7).</summary>
public sealed record TechniqueCheck(
    bool SquatClean,
    bool HingeClean,
    bool OverheadClean,
    bool PressProxyClean = false);

public sealed record WeightFinderInput(
    Focus Focus,
    TrainingBackground TrainingBackground,
    TechniqueCheck Technique,
    Sex? Sex = null,
    AgeBand? AgeBand = null);

/// <summary>Recommended weight range in kg. Always a span (§7).</summary>
public sealed record WeightRange(int LowKg, int HighKg);

public sealed record WeightRecommendation(WeightRange Range, Edge Edge);

public static class WeightFinder
{
    // Base ranges per training background (spec D.1). WORKING VALUES: the four-band structure
    // is stable, the exact kg boundaries are not frozen and must be checked against sources
    // before go-live (spec F.1). Indexed by TrainingBackground.
    private static readonly WeightRange[] Bands =
    {
        new(8, 10),   // Untrained
        new(10, 12),  // Occasional
        new(12, 14),  // ActiveNoStrength
        new(14, 18),  // StrengthTrained
    };

    /// <summary>
    /// Resolves an input to exactly one recommendation by applying the spec D.2 steps in order.
    /// Pure and deterministic: the same input always yields the same output.
    /// </summary>
    public static WeightRecommendation Resolve(WeightFinderInput input)
    {
        ArgumentNullException.ThrowIfNull(input);
        ArgumentNullException.ThrowIfNull(input.Technique);

        int baseBand = (int)input.TrainingBackground;
        int band = baseBand;
        var edge = Edge.Either;

        // Step 2 — focus.
        switch (input.Focus)
        {
            case Focus.StrengthPress:
                edge = Edge.Lower;
                break;
            case Focus.ConditioningSwings:
                edge = Edge.Upper;
                // Only bump the band up on a demonstrably clean overhead press.
                if (input.Technique.OverheadClean && input.Technique.PressProxyClean)
                {
                    band += 1;
                }
                break;
            case Focus.Mixed:
            default:
                break;
        }

        // Step 3 — technique. Any mandatory movement not clean pulls to the lower edge,
        // overriding an upper edge set by a conditioning focus.
        bool techniqueClean =
            input.Technique.SquatClean
            && input.Technique.HingeClean
            && input.Technique.OverheadClean;
        if (!techniqueClean)
        {
            edge = Edge.Lower;
        }

        // Step 4 — sex (optional). The press ceiling limits a single all-purpose bell more,
        // so shift one band down. Range modifier only (§7).
        if (input.Sex == Sex.Female)
        {
            band -= 1;
        }

        // Step 5 — age (optional). Only relevant for an untrained starter.
        if (input.AgeBand == AgeBand.Age50Plus
            && input.TrainingBackground == TrainingBackground.Untrained)
        {
            edge = Edge.Lower;
        }

        // Step 6 — cap the net band shift to one band from base, then clamp to the valid range.
        band = Math.Clamp(band, baseBand - 1, baseBand + 1);
        band = Math.Clamp(band, 0, Bands.Length - 1);

        return new WeightRecommendation(Bands[band], edge);
    }
}
