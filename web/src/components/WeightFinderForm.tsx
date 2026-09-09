"use client";

import { useMemo, useState } from "react";
import {
  resolveWeight,
  type AgeBand,
  type Focus,
  type Sex,
  type TrainingBackground,
} from "@/lib/weightFinder";
import {
  ageBandLabels,
  copy,
  focusLabels,
  pressProxy,
  recommendationText,
  sexLabels,
  techniqueMovements,
  trainingBackgroundLabels,
} from "@/content/de/weightFinder";

type TechniqueKey = (typeof techniqueMovements)[number]["key"];
type TechniqueState = Record<TechniqueKey, boolean | null>;

const focusOrder: Focus[] = ["strength_press", "mixed", "conditioning_swings"];
const backgroundOrder: TrainingBackground[] = [
  "untrained",
  "occasional",
  "active_no_strength",
  "strength_trained",
];

const fieldBox =
  "rounded-lg border border-zinc-200 p-4 has-[:checked]:border-zinc-900 has-[:checked]:bg-zinc-50 cursor-pointer text-sm";

export default function WeightFinderForm() {
  const [focus, setFocus] = useState<Focus | null>(null);
  const [background, setBackground] = useState<TrainingBackground | null>(null);
  const [technique, setTechnique] = useState<TechniqueState>({
    squatClean: null,
    hingeClean: null,
    overheadClean: null,
  });
  const [pressProxyClean, setPressProxyClean] = useState(false);
  const [sex, setSex] = useState<Sex | "unset">("unset");
  const [ageBand, setAgeBand] = useState<AgeBand | "unset">("unset");

  const allAnswered =
    focus !== null &&
    background !== null &&
    Object.values(technique).every((v) => v !== null);

  const result = useMemo(() => {
    if (!allAnswered || focus === null || background === null) return null;

    const techniqueClean =
      technique.squatClean === true &&
      technique.hingeClean === true &&
      technique.overheadClean === true;

    const rec = resolveWeight({
      focus,
      trainingBackground: background,
      technique: {
        squatClean: technique.squatClean === true,
        hingeClean: technique.hingeClean === true,
        overheadClean: technique.overheadClean === true,
        pressProxyClean,
      },
      sex: sex === "unset" ? undefined : sex,
      ageBand: ageBand === "unset" ? undefined : ageBand,
    });

    return {
      ...recommendationText({
        range: rec.range,
        edge: rec.edge,
        trainingBackground: background,
        techniqueClean,
      }),
    };
  }, [allAnswered, focus, background, technique, pressProxyClean, sex, ageBand]);

  return (
    <div className="grid gap-8">
      <form className="grid gap-8" onSubmit={(e) => e.preventDefault()}>
        <fieldset className="grid gap-3">
          <legend className="mb-1 font-semibold">{copy.fieldsetFocus}</legend>
          {focusOrder.map((value) => (
            <label key={value} className={fieldBox}>
              <input
                type="radio"
                name="focus"
                className="mr-2 accent-zinc-900"
                checked={focus === value}
                onChange={() => setFocus(value)}
              />
              {focusLabels[value]}
            </label>
          ))}
        </fieldset>

        <fieldset className="grid gap-3">
          <legend className="mb-1 font-semibold">{copy.fieldsetBackground}</legend>
          {backgroundOrder.map((value) => (
            <label key={value} className={fieldBox}>
              <input
                type="radio"
                name="background"
                className="mr-2 accent-zinc-900"
                checked={background === value}
                onChange={() => setBackground(value)}
              />
              {trainingBackgroundLabels[value]}
            </label>
          ))}
        </fieldset>

        <fieldset className="grid gap-4">
          <legend className="mb-1 font-semibold">{copy.fieldsetTechnique}</legend>
          <p className="text-sm text-zinc-600">{copy.fieldsetTechniqueHint}</p>
          {techniqueMovements.map((movement) => (
            <div key={movement.key} className="grid gap-2 rounded-lg border border-zinc-200 p-4">
              <p className="font-medium">{movement.label}</p>
              <p className="text-sm text-zinc-600">{movement.detail}</p>
              <div className="mt-1 flex gap-2">
                {[
                  { label: copy.techniqueClean, value: true },
                  { label: copy.techniqueNotClean, value: false },
                ].map((option) => (
                  <label
                    key={String(option.value)}
                    className="flex-1 rounded-md border border-zinc-200 px-3 py-2 text-center text-sm has-[:checked]:border-zinc-900 has-[:checked]:bg-zinc-900 has-[:checked]:text-white cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={movement.key}
                      className="sr-only"
                      checked={technique[movement.key] === option.value}
                      onChange={() =>
                        setTechnique((prev) => ({ ...prev, [movement.key]: option.value }))
                      }
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="grid gap-2 rounded-lg border border-dashed border-zinc-300 p-4">
            <p className="font-medium">{pressProxy.label}</p>
            <p className="text-sm text-zinc-600">{pressProxy.detail}</p>
            <label className="mt-1 flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="accent-zinc-900"
                checked={pressProxyClean}
                onChange={(e) => setPressProxyClean(e.target.checked)}
              />
              {pressProxy.checkboxLabel}
            </label>
          </div>
        </fieldset>

        <fieldset className="grid gap-3">
          <legend className="mb-1 font-semibold">{copy.fieldsetOptional}</legend>
          <p className="text-sm text-zinc-600">{copy.fieldsetOptionalHint}</p>
          <label className="grid gap-1 text-sm">
            {copy.labelSex}
            <select
              className="rounded-md border border-zinc-300 px-3 py-2"
              value={sex}
              onChange={(e) => setSex(e.target.value as Sex | "unset")}
            >
              <option value="unset">{sexLabels.unset}</option>
              <option value="female">{sexLabels.female}</option>
              <option value="male">{sexLabels.male}</option>
            </select>
          </label>
          <label className="grid gap-1 text-sm">
            {copy.labelAge}
            <select
              className="rounded-md border border-zinc-300 px-3 py-2"
              value={ageBand}
              onChange={(e) => setAgeBand(e.target.value as AgeBand | "unset")}
            >
              <option value="unset">{ageBandLabels.unset}</option>
              <option value="under_50">{ageBandLabels.under_50}</option>
              <option value="age_50_plus">{ageBandLabels.age_50_plus}</option>
            </select>
          </label>
        </fieldset>
      </form>

      <aside
        className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 scroll-mt-6"
        aria-live="polite"
        id="ergebnis"
      >
        {result ? (
          <div className="grid gap-3">
            <p className="text-lg font-semibold">{result.headline}</p>
            <p className="text-sm text-zinc-700">{result.body}</p>
            {result.techniqueNote && (
              <p className="rounded-md bg-amber-50 p-3 text-sm text-amber-900">
                {result.techniqueNote}
              </p>
            )}
          </div>
        ) : (
          <p className="text-sm text-zinc-600">{copy.resultPlaceholder}</p>
        )}
        <p className="mt-4 border-t border-zinc-200 pt-3 text-xs text-zinc-500">
          {copy.disclaimerNote}
        </p>
      </aside>
    </div>
  );
}
