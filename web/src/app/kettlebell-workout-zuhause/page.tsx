import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bookmark, CalendarDays, Clock } from "lucide-react";
import { MovementIllustration } from "@/components/illustrations";
import {
  kettlebellWorkout as w,
  KETTLEBELL_WORKOUT_UPDATED,
} from "@/content/de/kettlebellWorkout";
import { formatUpdated } from "@/content/de/ratgeber";
import { og } from "@/lib/meta";
import { articleLd, breadcrumbLd, faqLd, jsonLd } from "@/lib/structuredData";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: `${w.meta.title} — girevo` },
  description: w.meta.description,
  alternates: { canonical: "/kettlebell-workout-zuhause" },
  openGraph: og({
    type: "article",
    title: w.meta.title,
    description: w.meta.description,
    url: "/kettlebell-workout-zuhause",
  }),
};

type MovementKey = "hinge-swing" | "goblet-squat" | "overhead-press" | "carry";

export default function KettlebellWorkoutPage() {
  return (
    <main className={styles.wrap}>
      <script
        {...jsonLd([
          articleLd({
            path: "/kettlebell-workout-zuhause",
            headline: w.meta.title,
            description: w.meta.description,
            datePublished: KETTLEBELL_WORKOUT_UPDATED,
            dateModified: KETTLEBELL_WORKOUT_UPDATED,
          }),
          breadcrumbLd([
            { name: "Start", path: "/" },
            { name: "Workout zu Hause", path: "/kettlebell-workout-zuhause" },
          ]),
          faqLd(w.faq.items),
        ])}
      />
      <header className={styles.head}>
        <div className={styles.metaLine}>
          <span>
            <Bookmark size={15} strokeWidth={1.75} aria-hidden="true" />
            {w.kicker}
          </span>
          <span>
            <CalendarDays size={15} strokeWidth={1.75} aria-hidden="true" />
            {formatUpdated(KETTLEBELL_WORKOUT_UPDATED)}
          </span>
          <span>
            <Clock size={15} strokeWidth={1.75} aria-hidden="true" />
            {w.readingTime}
          </span>
        </div>
        <h1 className={styles.h1}>{w.h1}</h1>
        <p className={styles.deck}>{w.deck}</p>
      </header>

      <div className={styles.body}>
        <aside className={styles.toc}>
          <div className={styles.tocLabel}>{w.tocLabel}</div>
          <nav className={styles.tocNav}>
            {w.toc.map((t) => (
              <a key={t.id} href={`#${t.id}`} className={styles.tocLink}>
                {t.label}
              </a>
            ))}
          </nav>
        </aside>

        <article className={styles.article}>
          <p>
            {w.introPrefix}
            <Link href="/kettlebell-kaufen">{w.introLinkLabel}</Link>
            {w.introSuffix}
          </p>

          <h2 id="aufwaermen" className={styles.h2}>
            {w.aufwaermen.h2}
          </h2>
          <p>{w.aufwaermen.p1}</p>
          <ol className={styles.steps}>
            {w.aufwaermen.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <p>{w.aufwaermen.p2}</p>

          <h2 id="reihenfolge" className={styles.h2}>
            {w.reihenfolge.h2}
          </h2>
          <p>{w.reihenfolge.p1}</p>
          <div className={styles.movementRow}>
            {w.reihenfolge.movements.map((m) => (
              <div key={m.key} className={styles.movementItem}>
                <MovementIllustration
                  movement={m.key as MovementKey}
                  className={styles.movementIllo}
                  title={m.label}
                />
                <span className={styles.movementLabel}>{m.label}</span>
              </div>
            ))}
          </div>
          <p>
            {w.reihenfolge.p2Prefix}
            <Link href="/uebungen">{w.reihenfolge.p2LinkLabel}</Link>
            {w.reihenfolge.p2Suffix}
          </p>

          <h2 id="saetze-pausen" className={styles.h2}>
            {w.saetzePausen.h2}
          </h2>
          <p>{w.saetzePausen.p1}</p>
          <p>{w.saetzePausen.p2}</p>

          <h2 id="dauer-haeufigkeit" className={styles.h2}>
            {w.dauerHaeufigkeit.h2}
          </h2>
          <p>{w.dauerHaeufigkeit.p1}</p>
          <p>{w.dauerHaeufigkeit.callout}</p>

          <h2 id="abschluss" className={styles.h2}>
            {w.abschluss.h2}
          </h2>
          <p>{w.abschluss.p1}</p>
          <p>
            {w.abschluss.p2Prefix}
            <Link href="/ratgeber">{w.abschluss.p2LinkLabel}</Link>
            {w.abschluss.p2Suffix}
          </p>

          <h2 className={styles.h2}>{w.faq.title}</h2>
          {w.faq.items.map((item) => (
            <div key={item.q}>
              <h3 className={styles.h3}>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}

          <div className={styles.ctaCard}>
            <span className={styles.ctaEyebrow}>{w.ctaCard.eyebrow}</span>
            <p className={styles.ctaText}>{w.ctaCard.text}</p>
            <Link href="/kettlebell-startgewicht" className={styles.ctaButton}>
              {w.ctaCard.cta}
            </Link>
          </div>

          <div className={styles.nextRow}>
            {w.nextCards.map((c) => (
              <Link key={c.href} href={c.href} className={styles.nextCard}>
                <span className={styles.nextLabel}>
                  <span>{c.label}</span>
                  <ArrowUpRight
                    size={17}
                    strokeWidth={2}
                    aria-hidden="true"
                    color="var(--color-coral)"
                  />
                </span>
                <span className={styles.nextTitle}>{c.title}</span>
              </Link>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
