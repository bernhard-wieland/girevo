"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUp, CalendarClock, Play } from "lucide-react";
import {
  resolveWeight,
  type AgeBand,
  type Focus,
  type Sex,
  type TrainingBackground,
} from "@/lib/weightFinder";
import { AFFILIATE_READY } from "@/lib/affiliate";
import { Banner } from "./Banner";
import { Button } from "./Button";
import { Chip } from "./Chip";
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
const BUYERS_GUIDE = "/kettlebell-kaufen";
const RULE_ICONS = [ArrowDown, ArrowUp, CalendarClock];

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
    <div className={styles.wizard}>
      <div className={styles.progress}>
        <div className={styles.progressTrack}>
          {STEP_LABELS.map((label, i) => (
            <span key={label} className={cx(styles.seg, i <= step && styles.segOn)} />
          ))}
        </div>
        <div className={styles.stepMeta}>
          <span className={styles.stepMetaLabel}>{STEP_LABELS[step]}</span>
          <span>{copy.nav.counter(step + 1, total)}</span>
        </div>
      </div>

      {/* Step 0 — intro */}
      <section className={styles.step} hidden={step !== 0}>
        <div className={styles.card}>
          <span className={styles.eyebrow}>{copy.intro.whatToExpectTitle}</span>
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

        <div className={styles.factRow}>
          {copy.intro.facts.map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>

        <Button onClick={next}>{copy.intro.cta}</Button>
      </section>

      {/* Step 1 — technique self-test */}
      <section className={styles.step} hidden={step !== 1}>
        <div className={styles.stepHead}>
          <h2 className={styles.h2}>{copy.technique.h2}</h2>
          <p className={styles.lead}>{copy.technique.lead}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.doNow}>
            <Play size={14} strokeWidth={2} aria-hidden="true" />
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
                <div className={styles.chipGroup} role="group" aria-label={m.label}>
                  <Chip selected={val === true} onClick={() => setTech(m.key, true)}>
                    {copy.technique.optionClean}
                  </Chip>
                  <Chip selected={val === false} onClick={() => setTech(m.key, false)}>
                    {copy.technique.optionNotClean}
                  </Chip>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.actions}>
          <Button fullWidth onClick={next} disabled={!canAdvance}>
            {copy.technique.cta}
          </Button>
          <Button variant="tertiary" size="small" onClick={back}>
            {copy.nav.back}
          </Button>
        </div>
      </section>

      {/* Step 2 — training */}
      <section className={styles.step} hidden={step !== 2}>
        <div className={styles.stepHead}>
          <h2 className={styles.h2}>{copy.training.h2}</h2>
          <p className={styles.lead}>{copy.training.lead}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.optionGroup}>
            <span className={styles.optionGroupLabel}>{copy.training.backgroundLabel}</span>
            <div className={styles.optionStack}>
              {trainingBackgroundOptions.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  aria-pressed={background === o.value}
                  className={cx(styles.rowOption, background === o.value && styles.rowOptionOn)}
                  onClick={() => setBackground(o.value)}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.optionGroup}>
            <span className={styles.optionGroupLabel}>{copy.training.focusLabel}</span>
            <div className={styles.optionStack}>
              {focusOptions.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  aria-pressed={focus === o.value}
                  className={cx(styles.rowOption, focus === o.value && styles.rowOptionOn)}
                  onClick={() => chooseFocus(o.value)}
                >
                  {o.label}
                  <span className={styles.optionHint}>{o.hint}</span>
                </button>
              ))}
            </div>
          </div>

          {focus === "conditioning_swings" && (
            <label className={styles.checkRow}>
              <input
                type="checkbox"
                checked={pressProxyClean}
                onChange={(e) => setPressProxyClean(e.target.checked)}
              />
              <span>
                <strong>{pressProxy.label}.</strong> {pressProxy.detail}
                <br />
                {pressProxy.checkboxLabel}
              </span>
            </label>
          )}
        </div>

        <div className={styles.actions}>
          <Button fullWidth onClick={next} disabled={!canAdvance}>
            {copy.training.cta}
          </Button>
          <Button variant="tertiary" size="small" onClick={back}>
            {copy.nav.back}
          </Button>
        </div>
      </section>

      {/* Step 3 — optional */}
      <section className={styles.step} hidden={step !== 3}>
        <div className={styles.stepHead}>
          <span className={styles.eyebrow}>{copy.optional.eyebrow}</span>
          <h2 className={styles.h2}>{copy.optional.h2}</h2>
          <p className={styles.lead}>{copy.optional.lead}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.optionGroup}>
            <span className={styles.optionGroupLabel}>{copy.optional.ageLabel}</span>
            <div className={styles.chipWrap}>
              {ageOptions.map((o) => (
                <Chip
                  key={o.value}
                  selected={ageBand === o.value}
                  onClick={() => setAgeBand(ageBand === o.value ? null : o.value)}
                >
                  {o.label}
                </Chip>
              ))}
            </div>
          </div>

          <div className={styles.optionGroup}>
            <span className={styles.optionGroupLabel}>{copy.optional.sexLabel}</span>
            <div className={styles.chipWrap}>
              {sexOptions.map((o) => {
                const active = o.value === null ? sex === null : sex === o.value;
                return (
                  <Chip key={o.label} selected={active} onClick={() => setSex(o.value)}>
                    {o.label}
                  </Chip>
                );
              })}
            </div>
            <span className={styles.smallNote}>{copy.optional.sexNote}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <Button fullWidth onClick={next}>
            {copy.optional.cta}
          </Button>
          <div className={styles.navRow}>
            <Button variant="tertiary" size="small" onClick={back}>
              {copy.nav.back}
            </Button>
            <Button
              variant="tertiary"
              size="small"
              onClick={() => {
                setAgeBand(null);
                setSex(null);
                next();
              }}
            >
              {copy.optional.skip}
            </Button>
          </div>
        </div>
      </section>

      {/* Step 4 — result */}
      {result && (
        <section className={styles.step} hidden={step !== total - 1}>
          <div className={styles.resultGrid}>
            <div className={styles.resultMain}>
              <div className={styles.readoutCard}>
                <span className={styles.eyebrow}>{copy.result.eyebrow}</span>
                <span className={styles.readout}>{rangeText(result.range)}</span>
                <div className={styles.pills}>
                  {result.factors.map((f) => (
                    <span key={f} className={styles.pill}>
                      {f}
                    </span>
                  ))}
                </div>
                <p className={styles.readoutLead}>{resultLead(result.range)}</p>
              </div>

              {result.note && <Banner tone="info">{result.note}</Banner>}

              <div className={styles.rules}>
                <h3 className={styles.h3}>{copy.result.rulesTitle}</h3>
                {resultRules(result.range).map((r, i) => {
                  const Icon = RULE_ICONS[i] ?? CalendarClock;
                  return (
                    <div key={r.title} className={styles.ruleRow}>
                      <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                      <span>
                        <span className={styles.ruleTitle}>{r.title}</span>
                        <span className={styles.ruleText}>{r.text}</span>
                      </span>
                    </div>
                  );
                })}
              </div>

              <Banner tone="info" title="Ein Bereich ist kein Kompromiss">
                {resultCallout(result.range)}
              </Banner>

              <div className={styles.navRow}>
                <Button
                  variant="secondary"
                  size="small"
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
                </Button>
                <Button variant="tertiary" size="small" onClick={() => setStep(3)}>
                  {copy.result.back}
                </Button>
              </div>
            </div>

            <aside className={styles.resultAside}>
              {AFFILIATE_READY && (
                <span className={styles.adTag}>Werbung · Affiliate</span>
              )}
              <h3 className={styles.h3}>{copy.result.buy.h3}</h3>
              <p className={styles.smallNote}>
                {copy.result.buy.intro}
                {AFFILIATE_READY ? ` ${copy.result.buy.introAffiliate}` : ""}
              </p>
              <div className={styles.buyList}>
                {buyOptions(result.range).map((b) => (
                  <Link key={b.title} href={BUYERS_GUIDE} className={styles.buyRow}>
                    <span className={styles.buyBody}>
                      <span className={styles.buyTitle}>{b.title}</span>
                      <span className={styles.buyCriterion}>Passt, wenn {b.criterion}</span>
                      <span className={styles.buyPrice}>{b.price}</span>
                    </span>
                    <ArrowRight size={18} strokeWidth={1.75} aria-hidden="true" />
                  </Link>
                ))}
                <Link href={BUYERS_GUIDE} className={styles.buyAll}>
                  {copy.result.buy.cta}
                  <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
              <span className={styles.smallNote}>{copy.result.buy.disclosure}</span>
            </aside>
          </div>
        </section>
      )}

      <p className={styles.disclaimer}>{copy.disclaimerNote}</p>
    </div>
  );
}
