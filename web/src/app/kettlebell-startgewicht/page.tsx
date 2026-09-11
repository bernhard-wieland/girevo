import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import WeightFinderWizard from "@/components/WeightFinderWizard";
import { RangeIllustration } from "@/components/illustrations";
import { bandRows, copy, faqItems } from "@/content/de/weightFinder";
import { og } from "@/lib/meta";
import { breadcrumbLd, faqLd, jsonLd } from "@/lib/structuredData";
import styles from "./page.module.css";

const NEXT_CARDS = [
  {
    href: "/kettlebell-kaufen",
    label: "Kaufberatung",
    title: "Welche Kettlebell zu deinem Bereich passt",
  },
  {
    href: "/uebungen",
    label: "Übungen",
    title: "Die vier Bewegungen für die ersten Wochen",
  },
  {
    href: "/ratgeber",
    label: "Ratgeber",
    title: "Warum ein Bereich und keine feste Zahl",
  },
  {
    href: "/kettlebell-training",
    label: "Einstieg",
    title: "Was ist Kettlebell-Training?",
  },
];

const description =
  "Welche Kettlebell zum Anfangen? Ein Selbsttest ohne Gewicht nennt dir einen Gewichtsbereich statt einer festen Zahl — abgestimmt auf Bewegung und Ziel.";

export const metadata: Metadata = {
  title: "Kettlebell-Startgewicht per Selbsttest bestimmen",
  description,
  alternates: { canonical: "/kettlebell-startgewicht" },
  openGraph: og({
    title: "Kettlebell-Startgewicht per Selbsttest bestimmen",
    description,
    url: "/kettlebell-startgewicht",
  }),
};

export default function KettlebellStartgewichtPage() {
  return (
    <main className={styles.wrap}>
      <script
        {...jsonLd([
          breadcrumbLd([
            { name: "Start", path: "/" },
            { name: "Gewichtsfinder", path: "/kettlebell-startgewicht" },
          ]),
          faqLd(faqItems),
        ])}
      />

      <div className={styles.intro}>
        <span className={styles.eyebrow}>{copy.intro.eyebrow}</span>
        <h1 className={styles.h1}>{copy.intro.h1}</h1>
        <p className={styles.introLead}>{copy.intro.lead}</p>
      </div>

      <WeightFinderWizard />

      <section className={styles.evergreen}>
        <h2 className={styles.h2}>
          <span className={styles.h2Mark} aria-hidden="true" />
          {copy.page.bandsTitle}
        </h2>
        <p className={styles.body}>{copy.page.bandsIntro}</p>
        <RangeIllustration className={styles.rangeIllo} />
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{copy.page.bandsHeadActivity}</th>
              <th>{copy.page.bandsHeadRange}</th>
            </tr>
          </thead>
          <tbody>
            {bandRows.map((row) => (
              <tr key={row.label}>
                <td>{row.label}</td>
                <td>{row.range}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={styles.body}>
          {copy.page.ratgeberLine} <Link href="/ratgeber">Ratgeber</Link>.
        </p>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.h2}>
          <span className={styles.h2Mark} aria-hidden="true" />
          {copy.page.faqTitle}
        </h2>
        <div className={styles.faqList}>
          {faqItems.map((item) => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQ}>{item.q}</summary>
              <p className={styles.faqA}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.nextSection}>
        <h2 className={styles.h2}>
          <span className={styles.h2Mark} aria-hidden="true" />
          {copy.page.nextTitle}
        </h2>
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
      </section>
    </main>
  );
}
