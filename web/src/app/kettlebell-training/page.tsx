import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bookmark, CalendarDays, Clock } from "lucide-react";
import { MovementIllustration } from "@/components/illustrations";
import {
  kettlebellTraining as k,
  KETTLEBELL_TRAINING_UPDATED,
} from "@/content/de/kettlebellTraining";
import { formatUpdated } from "@/content/de/ratgeber";
import { og } from "@/lib/meta";
import { articleLd, breadcrumbLd, faqLd, jsonLd } from "@/lib/structuredData";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: `${k.meta.title} — girevo` },
  description: k.meta.description,
  alternates: { canonical: "/kettlebell-training" },
  openGraph: og({
    type: "article",
    title: k.meta.title,
    description: k.meta.description,
    url: "/kettlebell-training",
  }),
};

type MovementKey = "hinge-swing" | "goblet-squat" | "overhead-press" | "carry";

export default function KettlebellTrainingPage() {
  return (
    <main className={styles.wrap}>
      <script
        {...jsonLd([
          articleLd({
            path: "/kettlebell-training",
            headline: k.meta.title,
            description: k.meta.description,
            datePublished: KETTLEBELL_TRAINING_UPDATED,
            dateModified: KETTLEBELL_TRAINING_UPDATED,
          }),
          breadcrumbLd([
            { name: "Start", path: "/" },
            { name: "Einstieg", path: "/kettlebell-training" },
          ]),
          faqLd(k.faq.items),
        ])}
      />
      <header className={styles.head}>
        <div className={styles.metaLine}>
          <span>
            <Bookmark size={15} strokeWidth={1.75} aria-hidden="true" />
            {k.kicker}
          </span>
          <span>
            <CalendarDays size={15} strokeWidth={1.75} aria-hidden="true" />
            {formatUpdated(KETTLEBELL_TRAINING_UPDATED)}
          </span>
          <span>
            <Clock size={15} strokeWidth={1.75} aria-hidden="true" />
            {k.readingTime}
          </span>
        </div>
        <h1 className={styles.h1}>{k.h1}</h1>
        <p className={styles.deck}>{k.deck}</p>
      </header>

      <div className={styles.body}>
        <aside className={styles.toc}>
          <div className={styles.tocLabel}>{k.tocLabel}</div>
          <nav className={styles.tocNav}>
            {k.toc.map((t) => (
              <a key={t.id} href={`#${t.id}`} className={styles.tocLink}>
                {t.label}
              </a>
            ))}
          </nav>
        </aside>

        <article className={styles.article}>
          <p>{k.intro}</p>

          <h2 id="herkunft" className={styles.h2}>
            {k.herkunft.h2}
          </h2>
          <p>{k.herkunft.p}</p>

          <h2 id="unterschied" className={styles.h2}>
            {k.unterschied.h2}
          </h2>
          <p>{k.unterschied.p1}</p>
          <p>{k.unterschied.p2}</p>

          <h2 id="bewegungsmuster" className={styles.h2}>
            {k.bewegungsmuster.h2}
          </h2>
          <p>{k.bewegungsmuster.p1}</p>
          <div className={styles.movementRow}>
            {k.bewegungsmuster.movements.map((m) => (
              <div key={m.key} className={styles.movementItem}>
                <MovementIllustration
                  movement={m.key as MovementKey}
                  className={styles.movementIllo}
                  title={m.label}
                />
                <span className={styles.movementLabel}>{m.label}</span>
                <p className={styles.movementText}>{m.text}</p>
              </div>
            ))}
          </div>
          <p>
            {k.bewegungsmuster.p2Prefix}
            <Link href="/uebungen">{k.bewegungsmuster.p2LinkLabel}</Link>
            {k.bewegungsmuster.p2Suffix}
          </p>

          <h2 id="fuer-wen" className={styles.h2}>
            {k.fuerWen.h2}
          </h2>
          <p>{k.fuerWen.p1}</p>
          <p>
            {k.fuerWen.p2Prefix}
            <Link href="/kettlebell-startgewicht">{k.fuerWen.p2LinkLabel}</Link>
            {k.fuerWen.p2Suffix}
          </p>

          <h2 id="vergleich" className={styles.h2}>
            {k.vergleich.h2}
          </h2>
          <p>{k.vergleich.p1}</p>
          <p>
            {k.vergleich.p2Prefix}
            <Link href="/kettlebell-kaufen">{k.vergleich.p2LinkLabel}</Link>
            {k.vergleich.p2Suffix}
          </p>

          <h2 className={styles.h2}>{k.faq.title}</h2>
          {k.faq.items.map((item) => (
            <div key={item.q}>
              <h3 className={styles.h3}>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}

          <div className={styles.ctaCard}>
            <span className={styles.ctaEyebrow}>{k.ctaCard.eyebrow}</span>
            <p className={styles.ctaText}>{k.ctaCard.text}</p>
            <Link href="/kettlebell-startgewicht" className={styles.ctaButton}>
              {k.ctaCard.cta}
            </Link>
          </div>

          <div className={styles.nextRow}>
            {k.nextCards.map((c) => (
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
