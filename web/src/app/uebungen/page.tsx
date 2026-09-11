import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MovementIllustration } from "@/components/illustrations";
import { uebungen as u } from "@/content/de/uebungen";
import { og } from "@/lib/meta";
import { breadcrumbLd, jsonLd } from "@/lib/structuredData";
import styles from "./page.module.css";

type MovementKey = "hinge-swing" | "goblet-squat" | "overhead-press" | "carry";

const NEXT_CARDS = [
  {
    href: "/kettlebell-startgewicht",
    label: "Gewichtsfinder",
    title: "Welches Startgewicht zu dir passt",
  },
  {
    href: "/kettlebell-zuhause-training",
    label: "Zu Hause trainieren",
    title: "Platz, Boden und Lautstärke",
  },
  {
    href: "/kettlebell-kaufen",
    label: "Kaufberatung",
    title: "Bauart, Griff, Beschichtung, verstellbar",
  },
  {
    href: "/kettlebell-workout-zuhause",
    label: "Workout zu Hause",
    title: "Der Ablauf einer Einheit",
  },
];

export const metadata: Metadata = {
  title: { absolute: `${u.meta.title} — girevo` },
  description: u.meta.description,
  alternates: { canonical: "/uebungen" },
  openGraph: og({
    title: u.meta.title,
    description: u.meta.description,
    url: "/uebungen",
  }),
};

export default function UebungenPage() {
  return (
    <main className={styles.main}>
      <script
        {...jsonLd(
          breadcrumbLd([
            { name: "Start", path: "/" },
            { name: "Übungen", path: "/uebungen" },
          ]),
        )}
      />

      <div className={styles.intro}>
        <span className={styles.eyebrow}>{u.eyebrow}</span>
        <h1 className={styles.h1}>{u.h1}</h1>
        <p className={styles.lead}>
          {u.intro} {u.introFinderPrefix}
          <Link href="/kettlebell-startgewicht">
            {u.introFinderLinkLabel}
          </Link>
          {u.introFinderSuffix}
        </p>
      </div>

      <div className={styles.movements}>
        {u.movements.map((m, i) => (
          <article key={m.key} className={styles.card}>
            <div className={styles.cardHead}>
              <div className={styles.cardHeadText}>
                <span className={styles.num}>{`Bewegung ${i + 1}`}</span>
                <h2 className={styles.name}>{m.name}</h2>
                <p className={styles.nameEn}>
                  <span className={styles.nameEnLabel}>{u.nameEnLabel}:</span>{" "}
                  {m.nameEn}
                </p>
                <p className={styles.whatFor}>{m.whatFor}</p>
              </div>
              <MovementIllustration
                movement={m.key as MovementKey}
                className={styles.cardIllo}
                title={m.name}
              />
            </div>

            <div>
              <span className={styles.subLabel}>{u.howToTitle}</span>
              <ol className={styles.steps}>
                {m.how.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>

            <div className={styles.block}>
              <span className={styles.subLabel}>{u.cleanLabel}</span>
              <p>{m.clean}</p>
            </div>
            <div className={styles.block}>
              <span className={styles.subLabel}>{u.errorLabel}</span>
              <p>{m.error}</p>
            </div>
          </article>
        ))}
      </div>

      <section className={styles.repsBox}>
        <h2 className={styles.h2}>
          <span className={styles.h2Mark} aria-hidden="true" />
          {u.reps.title}
        </h2>
        <p className={styles.repsText}>{u.reps.text}</p>
      </section>

      <div className={styles.nextRow}>
        {NEXT_CARDS.map((c) => (
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
            <span className={styles.nextCardTitle}>{c.title}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
