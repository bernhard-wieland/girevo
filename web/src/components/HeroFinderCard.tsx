"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { home } from "@/content/de/home";
import { bandRows, trainingBackgroundOptions } from "@/content/de/weightFinder";
import styles from "./HeroFinderCard.module.css";

const cx = (...c: (string | false)[]) => c.filter(Boolean).join(" ");

export default function HeroFinderCard() {
  const [picked, setPicked] = useState(1);
  const { heroCard } = home;
  const range = bandRows[picked].range;

  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.eyebrow}>{heroCard.eyebrow}</span>
        <span className={styles.progress}>
          <span className={cx(styles.progressDot, styles.progressDotOn)} />
          <span className={styles.progressDot} />
        </span>
      </div>

      <h2 className={styles.cardQ}>{heroCard.question}</h2>
      <p className={styles.cardExplain}>{heroCard.explainer}</p>

      <div
        className={styles.options}
        role="radiogroup"
        aria-label={heroCard.question}
      >
        {trainingBackgroundOptions.map((o, i) => (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={picked === i}
            className={cx(styles.option, picked === i && styles.optionOn)}
            onClick={() => setPicked(i)}
          >
            <span className={styles.optionLabel}>{o.label}</span>
            <span className={styles.optionKg}>{bandRows[i].range}</span>
          </button>
        ))}
      </div>

      <div className={styles.result} aria-live="polite">
        <span className={styles.eyebrow}>{heroCard.resultEyebrow}</span>
        <span className={styles.resultRange}>{range}</span>
        <p className={styles.resultNote}>{heroCard.resultNote}</p>
      </div>

      <div className={styles.ctaWrap}>
        <ButtonLink href={heroCard.href} fullWidth>
          {heroCard.cta}
          <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
        </ButtonLink>
        <p className={styles.ctaNote}>{heroCard.ctaNote}</p>
      </div>
    </div>
  );
}
