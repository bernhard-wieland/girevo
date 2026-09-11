import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Minus } from "lucide-react";
import { kettlebellZuhause as z } from "@/content/de/kettlebellZuhause";
import { og } from "@/lib/meta";
import { breadcrumbLd, faqLd, jsonLd } from "@/lib/structuredData";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: `${z.meta.title} — girevo` },
  description: z.meta.description,
  alternates: { canonical: "/kettlebell-zuhause-training" },
  openGraph: og({
    title: z.meta.title,
    description: z.meta.description,
    url: "/kettlebell-zuhause-training",
  }),
};

export default function ZuhauseTrainingPage() {
  return (
    <main className={styles.main}>
      <script
        {...jsonLd([
          breadcrumbLd([
            { name: "Start", path: "/" },
            { name: "Zu Hause trainieren", path: "/kettlebell-zuhause-training" },
          ]),
          faqLd(z.faq.items),
        ])}
      />

      <div className={styles.intro}>
        <span className={styles.eyebrow}>{z.eyebrow}</span>
        <h1 className={styles.h1}>{z.h1}</h1>
        <p className={styles.lead}>{z.lead}</p>
        <p className={styles.leadFinder}>
          {z.introFinderPrefix}
          <Link href="/kettlebell-startgewicht">{z.introFinderLinkLabel}</Link>
          {z.introFinderSuffix}
        </p>
      </div>

      <div className={styles.sections}>
        {z.sections.map((s) => (
          <article key={s.key} className={styles.card}>
            <div className={styles.cardHead}>
              <span className={styles.kicker}>{s.kicker}</span>
              <h2 className={styles.h2}>{s.title}</h2>
              <p className={styles.cardIntro}>{s.intro}</p>
            </div>
            <ul className={styles.points}>
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className={styles.listSection}>
        <h2 className={styles.h2}>
          <span className={styles.h2Mark} aria-hidden="true" />
          {z.list.title}
        </h2>
        <div className={styles.listGrid}>
          <div className={styles.listCol}>
            <span className={styles.listColTitle}>{z.list.haveTitle}</span>
            <ul className={styles.checkList}>
              {z.list.have.map((item) => (
                <li key={item}>
                  <span className={`${styles.marker} ${styles.markerYes}`}>
                    <Check size={13} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.listCol}>
            <span className={styles.listColTitle}>{z.list.skipTitle}</span>
            <ul className={styles.checkList}>
              {z.list.skip.map((item) => (
                <li key={item}>
                  <span className={`${styles.marker} ${styles.markerNo}`}>
                    <Minus size={13} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.h2}>
          <span className={styles.h2Mark} aria-hidden="true" />
          {z.faq.title}
        </h2>
        <div className={styles.faqList}>
          {z.faq.items.map((item) => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQ}>{item.q}</summary>
              <p className={styles.faqA}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className={styles.ctaCard}>
        <span className={styles.ctaEyebrow}>{z.cta.eyebrow}</span>
        <p className={styles.ctaText}>{z.cta.text}</p>
        <Link href={z.cta.href} className={styles.ctaButton}>
          {z.cta.label}
        </Link>
      </div>

      <div className={styles.nextRow}>
        {z.nextCards.map((c) => (
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
    </main>
  );
}
