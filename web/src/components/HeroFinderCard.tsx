"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { home } from "@/content/de/home";
import { bandRows, trainingBackgroundOptions } from "@/content/de/weightFinder";
import styles from "@/app/page.module.css";

const cx = (...c: (string | false)[]) => c.filter(Boolean).join(" ");

export default function HeroFinderCard() {
  const [picked, setPicked] = useState<number | null>(null);
  const { heroCard } = home;

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

      <div className={styles.options} role="radiogroup" aria-label={heroCard.question}>
        {trainingBackgroundOptions.map((o, i) => (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={picked === i}
            className={cx(styles.option, picked === i && styles.optionOn)}
            onClick={() => setPicked(i)}
          >
            {o.label}
          </button>
        ))}
      </div>

      {picked !== null && (
        <div className={styles.peek} aria-live="polite">
          <span className={styles.eyebrow}>{heroCard.resultEyebrow}</span>
          <span className={styles.peekRange}>{bandRows[picked].range}</span>
          <p className={styles.peekNote}>{heroCard.resultNote}</p>
        </div>
      )}

      <Link href={heroCard.href} className={styles.cardCta}>
        {heroCard.cta}
        <ArrowRight size={18} strokeWidth={1.75} aria-hidden="true" />
      </Link>
    </div>
  );
}
