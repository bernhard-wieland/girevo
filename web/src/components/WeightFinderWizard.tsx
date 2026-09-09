"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  resolveWeight,
  type AgeBand,
  type Focus,
  type Sex,
  type TrainingBackground,
} from "@/lib/weightFinder";
import { KettlebellMark } from "./KettlebellMark";
import {
  advisoryNote,
  ageOptions,
  buyOptions,
  copy,
  focusOptions,
  movements,
  pressProxy,
  rangeText,
  resultCallout,
  resultLead,
  resultRules,
  sexOptions,
  STEP_LABELS,
  trainingBackgroundOptions,
  type MovementKey,
} from "@/content/de/weightFinder";
import styles from "./WeightFinderWizard.module.css";

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

const BUYERS_GUIDE = "/kettlebell-kaufen"; // TODO: build this page (schema slug already reserved)

type TechniqueState = Record<MovementKey, boolean | null>;

export default function WeightFinderWizard() {
  const [step, setStep] = useState(0);
  const [technique, setTechnique] = useState<TechniqueState>({
    squatClean: null,
    hingeClean: null,
    overheadClean: null,
  });
  const [pressProxyClean, setPressProxyClean] = useState(false);
  const [focus, setFocus] = useState<Focus | null>(null);
  const [background, setBackground] = useState<TrainingBackground | null>(null);
  const [sex, setSex] = useState<Sex | null>(null);
  const [ageBand, setAgeBand] = useState<AgeBand | null>(null);

  const total = STEP_LABELS.length;

  const techniqueAnswered = Object.values(technique).every((v) => v !== null);
  const canAdvance =
    step === 1 ? techniqueAnswered : step === 2 ? focus !== null && background !== null : true;

  const result = useMemo(() => {
    if (focus === null || background === null || !techniqueAnswered) return null;
    const rec = resolveWeight({
      focus,
      trainingBackground: background,
      technique: {
        squatClean: technique.squatClean === true,
        hingeClean: technique.hingeClean === true,
        overheadClean: technique.overheadClean === true,
        pressProxyClean,
      },
      sex: sex ?? undefined,
      ageBand: ageBand ?? undefined,
    });
    const cleanCount = Object.values(technique).filter((v) => v === true).length;
    const techniqueClean = cleanCount === 3;
    const factors: string[] = [
      techniqueClean ? "Alle drei Bewegungen sauber" : `${cleanCount} von 3 Bewegungen sauber`,
      focusOptions.find((f) => f.value === focus)!.label,
    ];
    if (ageBand) factors.push(ageOptions.find((a) => a.value === ageBand)!.label);
    if (sex) factors.push(sexOptions.find((s) => s.value === sex)!.label);
    if (!ageBand && !sex) factors.push(copy.result.factorsUnset);

    return {
      range: rec.range,
      factors,
      note: advisoryNote({
        edge: rec.edge,
        techniqueClean,
        trainingBackground: background,
        ageBand,
      }),
    };
  }, [focus, background, technique, techniqueAnswered, pressProxyClean, sex, ageBand]);

  const next = () => setStep((s) => Math.min(total - 1, s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));

  const setTech = (key: MovementKey, value: boolean) =>
    setTechnique((prev) => ({ ...prev, [key]: value }));

  const chooseFocus = (value: Focus) => {
    setFocus(value);
    if (value !== "conditioning_swings") setPressProxyClean(false);
  };

  return (
    <div className={cx(styles.frame, step === total - 1 && styles.frameResult)}>
      <header className={styles.header}>
        <span className={styles.brand}>
          <KettlebellMark size={22} />
          <span className={styles.brandName}>Gewichtsfinder</span>
        </span>
        <span className={styles.brandLine}>{copy.brandLine}</span>
      </header>

      <div className={styles.body}>
        <div className={styles.progress}>
          <div className={styles.progressTrack}>
            {STEP_LABELS.map((label, i) => (
              <span
                key={label}
                className={cx(styles.seg, i <= step && styles.segOn)}
              />
            ))}
          </div>
          <div className={styles.stepMeta}>
            <span>{STEP_LABELS[step]}</span>
            <span>{copy.nav.counter(step + 1, total)}</span>
          </div>
        </div>

        {/* Step 0 — intro */}
        <section className={styles.step} hidden={step !== 0}>
          <div className={styles.card}>
            <div className={styles.sectionLabel}>{copy.intro.whatToExpectTitle}</div>
            {copy.intro.steps.map((s) => (
              <div key={s.n} className={styles.numItem}>
                <span className={styles.numBadge}>{s.n}</span>
                <span className={styles.numBody}>
                  <span className={styles.numTitle}>{s.title}</span>
                  <span className={styles.numText}>{s.text}</span>
                </span>
              </div>
            ))}
          </div>

          <div className={styles.chipRow}>
            {copy.intro.facts.map((f) => (
              <span key={f} className={styles.factChip}>
                {f}
              </span>
            ))}
          </div>

          <button type="button" className={styles.btnPrimary} onClick={next}>
            {copy.intro.cta}
          </button>
        </section>

        {/* Step 1 — technique self-test */}
        <section className={styles.step} hidden={step !== 1}>
          <div className={styles.stepHead}>
            <h2 className={styles.h2}>{copy.technique.h2}</h2>
            <p className={styles.lead}>{copy.technique.lead}</p>
          </div>

          <div className={styles.cardStrong}>
            <div className={styles.doNow}>
              <span className={styles.doNowLabel}>{copy.technique.doNowLabel}</span>
              <span className={styles.doNowHint}>{copy.technique.doNowHint}</span>
            </div>
            {movements.map((m) => {
              const val = technique[m.key];
              return (
                <div key={m.key} className={styles.movement}>
                  <div className={styles.movementTitle}>{m.label}</div>
                  <div className={styles.movementText}>{m.howTo}</div>
                  <div className={styles.cleanMeans}>
                    <strong>{copy.technique.cleanHeading}</strong> {m.cleanMeans}
                  </div>
                  <div className={styles.toggle} role="group" aria-label={m.label}>
                    <button
                      type="button"
                      aria-pressed={val === true}
                      className={cx(styles.toggleBtn, val === true && styles.toggleOn)}
                      onClick={() => setTech(m.key, true)}
                    >
                      {copy.technique.optionClean}
                    </button>
                    <button
                      type="button"
                      aria-pressed={val === false}
                      className={cx(styles.toggleBtn, val === false && styles.toggleOn)}
                      onClick={() => setTech(m.key, false)}
                    >
                      {copy.technique.optionNotClean}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.btnPrimary}
              onClick={next}
              disabled={!canAdvance}
              style={canAdvance ? undefined : { opacity: 0.5, cursor: "not-allowed" }}
            >
              {copy.technique.cta}
            </button>
            <button type="button" className={styles.btnGhost} onClick={back}>
              {copy.nav.back}
            </button>
          </div>
        </section>

        {/* Step 2 — training */}
        <section className={styles.step} hidden={step !== 2}>
          <div className={styles.stepHead}>
            <h2 className={styles.h2}>{copy.training.h2}</h2>
            <p className={styles.lead}>{copy.training.lead}</p>
          </div>

          <div className={styles.optionGroup}>
            <div className={styles.optionGroupLabel}>{copy.training.backgroundLabel}</div>
            <div className={cx(styles.options, styles.optionStack)}>
              {trainingBackgroundOptions.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  aria-pressed={background === o.value}
                  className={cx(styles.option, background === o.value && styles.optionOn)}
                  onClick={() => setBackground(o.value)}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.optionGroup}>
            <div className={styles.optionGroupLabel}>{copy.training.focusLabel}</div>
            <div className={cx(styles.options, styles.optionStack)}>
              {focusOptions.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  aria-pressed={focus === o.value}
                  className={cx(styles.option, focus === o.value && styles.optionOn)}
                  onClick={() => chooseFocus(o.value)}
                >
                  {o.label}
                  <span className={styles.optionHint}>{o.hint}</span>
                </button>
              ))}
            </div>
          </div>

          {focus === "conditioning_swings" && (
            <div className={styles.dashed}>
              <div className={styles.movementTitle}>{pressProxy.label}</div>
              <div className={styles.movementText}>{pressProxy.detail}</div>
              <label className={styles.checkRow}>
                <input
                  type="checkbox"
                  checked={pressProxyClean}
                  onChange={(e) => setPressProxyClean(e.target.checked)}
                />
                {pressProxy.checkboxLabel}
              </label>
            </div>
          )}

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.btnPrimary}
              onClick={next}
              disabled={!canAdvance}
              style={canAdvance ? undefined : { opacity: 0.5, cursor: "not-allowed" }}
            >
              {copy.training.cta}
            </button>
            <button type="button" className={styles.btnGhost} onClick={back}>
              {copy.nav.back}
            </button>
          </div>
        </section>

        {/* Step 3 — optional */}
        <section className={styles.step} hidden={step !== 3}>
          <div className={styles.stepHead}>
            <span className={styles.eyebrow}>{copy.optional.eyebrow}</span>
            <h2 className={styles.h2}>{copy.optional.h2}</h2>
            <p className={styles.lead}>{copy.optional.lead}</p>
          </div>

          <div className={styles.optionGroup}>
            <div className={styles.optionGroupLabel}>
              {copy.optional.ageLabel}
              <span className={styles.opt}>{copy.optional.optionalTag}</span>
            </div>
            <div className={styles.options}>
              {ageOptions.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  aria-pressed={ageBand === o.value}
                  className={cx(styles.option, ageBand === o.value && styles.optionOn)}
                  onClick={() => setAgeBand(ageBand === o.value ? null : o.value)}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.optionGroup}>
            <div className={styles.optionGroupLabel}>
              {copy.optional.sexLabel}
              <span className={styles.opt}>{copy.optional.optionalTag}</span>
            </div>
            <div className={styles.options}>
              {sexOptions.map((o) => {
                const active = o.value === null ? sex === null : sex === o.value;
                return (
                  <button
                    key={o.label}
                    type="button"
                    aria-pressed={active}
                    className={cx(styles.option, active && styles.optionOn)}
                    onClick={() => setSex(o.value)}
                  >
                    {o.label}
                  </button>
                );
              })}
            </div>
            <div className={styles.smallNote}>{copy.optional.sexNote}</div>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.btnPrimary} onClick={next}>
              {copy.optional.cta}
            </button>
            <div className={styles.navRow}>
              <button type="button" className={styles.btnGhost} onClick={back}>
                {copy.nav.back}
              </button>
              <button
                type="button"
                className={styles.btnGhostAccent}
                onClick={() => {
                  setAgeBand(null);
                  setSex(null);
                  next();
                }}
              >
                {copy.optional.skip}
              </button>
            </div>
          </div>
        </section>

        {/* Step 4 — result */}
        {result && (
          <section className={styles.step} hidden={step !== total - 1}>
            <div className={styles.resultGrid}>
              <div className={styles.resultMain}>
                <div className={styles.readoutCard}>
                  <div className={styles.sectionLabel}>{copy.result.eyebrow}</div>
                  <div className={styles.readout}>{rangeText(result.range)}</div>
                  <div className={styles.hr} />
                  <p className={styles.readoutLead}>{resultLead(result.range)}</p>
                  <div className={styles.chipRow}>
                    {result.factors.map((f) => (
                      <span key={f} className={styles.factChipSm}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {result.note && <div className={styles.advisory}>{result.note}</div>}

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <h3 className={styles.h3}>{copy.result.rulesTitle}</h3>
                  {resultRules(result.range).map((r) => (
                    <div key={r.title} className={styles.ruleCard}>
                      <div className={styles.ruleTitle}>{r.title}</div>
                      <div className={styles.ruleText}>{r.text}</div>
                    </div>
                  ))}
                </div>

                <div className={styles.callout}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8h.01" />
                    <path d="M11 12h1v4h1" />
                  </svg>
                  <span>{resultCallout(result.range)}</span>
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button
                    type="button"
                    className={styles.btnSecondary}
                    onClick={() => {
                      setTechnique({
                        squatClean: null,
                        hingeClean: null,
                        overheadClean: null,
                      });
                      setStep(1);
                    }}
                  >
                    {copy.result.restart}
                  </button>
                  <button type="button" className={styles.btnGhost} onClick={() => setStep(3)}>
                    {copy.result.back}
                  </button>
                </div>
              </div>

              <div className={styles.resultAside}>
                <h3 className={styles.h3}>{copy.result.buy.h3}</h3>
                <p className={styles.ruleText}>{copy.result.buy.intro}</p>
                {buyOptions(result.range).map((b) => (
                  <div key={b.title} className={styles.buyCard}>
                    <div className={styles.buyHead}>
                      <div className={styles.buyTitle}>{b.title}</div>
                      <div className={styles.buyPrice}>{b.price}</div>
                    </div>
                    <div className={styles.buyCriterion}>
                      <strong>Passt, wenn</strong> {b.criterion}
                    </div>
                    <div className={styles.buyDetail}>{b.detail}</div>
                    <Link href={BUYERS_GUIDE} className={styles.buyLink}>
                      {copy.result.buy.cta}
                    </Link>
                  </div>
                ))}
                <div className={styles.disclaimer}>{copy.result.buy.disclosure}</div>
              </div>
            </div>
          </section>
        )}

        <div className={styles.disclaimer} style={{ maxWidth: "var(--measure)" }}>
          {copy.disclaimerNote}
        </div>
      </div>
    </div>
  );
}
