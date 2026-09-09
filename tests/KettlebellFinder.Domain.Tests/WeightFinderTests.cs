using Xunit;

namespace KettlebellFinder.Domain.Tests;

// One test per row of the verified D.2 table (weight-finder-rules.md).
// These lock the resolution order: change the engine and a broken rule fails loudly.
public class WeightFinderTests
{
    private static TechniqueCheck AllClean(bool pressProxy = false) =>
        new(SquatClean: true, HingeClean: true, OverheadClean: true, PressProxyClean: pressProxy);

    [Fact]
    public void Baseline_Occasional_Mixed_Clean()
    {
        var r = WeightFinder.Resolve(new(Focus.Mixed, TrainingBackground.Occasional, AllClean()));
        Assert.Equal(new WeightRange(10, 12), r.Range);
        Assert.Equal(Edge.Either, r.Edge);
    }

    [Fact]
    public void StrengthTrained_PressFocus_PullsToLowerEdge()
    {
        var r = WeightFinder.Resolve(new(Focus.StrengthPress, TrainingBackground.StrengthTrained, AllClean()));
        Assert.Equal(new WeightRange(14, 18), r.Range);
        Assert.Equal(Edge.Lower, r.Edge);
    }

    [Fact]
    public void ActiveNoStrength_Mixed_MatchesSpecExample()
    {
        var r = WeightFinder.Resolve(new(Focus.Mixed, TrainingBackground.ActiveNoStrength, AllClean()));
        Assert.Equal(new WeightRange(12, 14), r.Range);
        Assert.Equal(Edge.Either, r.Edge);
    }

    [Fact]
    public void Conditioning_WithCleanPressProxy_BumpsBandUp()
    {
        var r = WeightFinder.Resolve(new(Focus.ConditioningSwings, TrainingBackground.ActiveNoStrength, AllClean(pressProxy: true)));
        Assert.Equal(new WeightRange(14, 18), r.Range);
        Assert.Equal(Edge.Upper, r.Edge);
    }

    [Fact]
    public void Conditioning_WithoutPressProxy_DoesNotBump()
    {
        var r = WeightFinder.Resolve(new(Focus.ConditioningSwings, TrainingBackground.ActiveNoStrength, AllClean(pressProxy: false)));
        Assert.Equal(new WeightRange(12, 14), r.Range);
        Assert.Equal(Edge.Upper, r.Edge);
    }

    [Fact]
    public void TechniqueFailure_OverridesUpperEdge()
    {
        var tech = new TechniqueCheck(SquatClean: false, HingeClean: true, OverheadClean: true, PressProxyClean: true);
        var r = WeightFinder.Resolve(new(Focus.ConditioningSwings, TrainingBackground.StrengthTrained, tech));
        Assert.Equal(new WeightRange(14, 18), r.Range); // bump capped at max band
        Assert.Equal(Edge.Lower, r.Edge);
    }

    [Fact]
    public void Female_ShiftsDownOneBand()
    {
        var r = WeightFinder.Resolve(new(Focus.Mixed, TrainingBackground.Occasional, AllClean(), Sex: Sex.Female));
        Assert.Equal(new WeightRange(8, 10), r.Range);
        Assert.Equal(Edge.Either, r.Edge);
    }

    [Fact]
    public void Age50Plus_WhenUntrained_PullsToLowerEdge()
    {
        var r = WeightFinder.Resolve(new(Focus.Mixed, TrainingBackground.Untrained, AllClean(), AgeBand: AgeBand.Age50Plus));
        Assert.Equal(new WeightRange(8, 10), r.Range);
        Assert.Equal(Edge.Lower, r.Edge);
    }

    [Fact]
    public void Age50Plus_WhenNotUntrained_HasNoEffect()
    {
        var r = WeightFinder.Resolve(new(Focus.Mixed, TrainingBackground.Occasional, AllClean(), AgeBand: AgeBand.Age50Plus));
        Assert.Equal(new WeightRange(10, 12), r.Range);
        Assert.Equal(Edge.Either, r.Edge);
    }

    [Fact]
    public void Female_OnUntrained_ClampsToLowestBand()
    {
        var r = WeightFinder.Resolve(new(Focus.Mixed, TrainingBackground.Untrained, AllClean(), Sex: Sex.Female));
        Assert.Equal(new WeightRange(8, 10), r.Range);
        Assert.Equal(Edge.Either, r.Edge);
    }

    [Fact]
    public void Conditioning_Bump_CannotExceedMaxBand()
    {
        var r = WeightFinder.Resolve(new(Focus.ConditioningSwings, TrainingBackground.StrengthTrained, AllClean(pressProxy: true)));
        Assert.Equal(new WeightRange(14, 18), r.Range);
        Assert.Equal(Edge.Upper, r.Edge);
    }

    [Fact]
    public void PressFocus_AndTechniqueFailure_BothResolveToLower()
    {
        var tech = new TechniqueCheck(SquatClean: true, HingeClean: false, OverheadClean: true);
        var r = WeightFinder.Resolve(new(Focus.StrengthPress, TrainingBackground.ActiveNoStrength, tech));
        Assert.Equal(new WeightRange(12, 14), r.Range);
        Assert.Equal(Edge.Lower, r.Edge);
    }
}
