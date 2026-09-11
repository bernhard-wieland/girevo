import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bookmark, CalendarDays, Clock } from "lucide-react";
import {
  kettlebellUeben as u,
  KETTLEBELL_UEBEN_UPDATED,
} from "@/content/de/kettlebellUebenOhneKettlebell";
import { formatUpdated } from "@/content/de/ratgeber";
import { og } from "@/lib/meta";
import { articleLd, breadcrumbLd, faqLd, jsonLd } from "@/lib/structuredData";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: `${u.meta.title} — girevo` },
  description: u.meta.description,
  alternates: { canonical: "/kettlebell-technik-ohne-kettlebell" },
  openGraph: og({
    type: "article",
    title: u.meta.title,
    description: u.meta.description,
    url: "/kettlebell-technik-ohne-kettlebell",
  }),
};

export default function KettlebellUebenPage() {
  return (
    <main className={styles.wrap}>
      <script
        {...jsonLd([
          articleLd({
            path: "/kettlebell-technik-ohne-kettlebell",
            headline: u.meta.title,
            description: u.meta.description,
            datePublished: KETTLEBELL_UEBEN_UPDATED,
            dateModified: KETTLEBELL_UEBEN_UPDATED,
          }),
          breadcrumbLd([
            { name: "Start", path: "/" },
            { name: "Vorbereitung", path: "/kettlebell-technik-ohne-kettlebell" },
          ]),
          faqLd(u.faq.items),
        ])}
      />
      <header className={styles.head}>
        <div className={styles.metaLine}>
          <span>
            <Bookmark size={15} strokeWidth={1.75} aria-hidden="true" />
            {u.kicker}
          </span>
          <span>
            <CalendarDays size={15} strokeWidth={1.75} aria-hidden="true" />
            {formatUpdated(KETTLEBELL_UEBEN_UPDATED)}
          </span>
          <span>
            <Clock size={15} strokeWidth={1.75} aria-hidden="true" />
            {u.readingTime}
          </span>
        </div>
        <h1 className={styles.h1}>{u.h1}</h1>
        <p className={styles.deck}>{u.deck}</p>
      </header>

      <div className={styles.body}>
        <aside className={styles.toc}>
          <div className={styles.tocLabel}>{u.tocLabel}</div>
          <nav className={styles.tocNav}>
            {u.toc.map((t) => (
              <a key={t.id} href={`#${t.id}`} className={styles.tocLink}>
                {t.label}
              </a>
            ))}
          </nav>
        </aside>

        <article className={styles.article}>
          <p>{u.intro}</p>

          <h2 id="warum" className={styles.h2}>
            {u.warum.h2}
          </h2>
          <p>{u.warum.p1}</p>
          <p>{u.warum.p2}</p>

          <h2 id="besenstiel" className={styles.h2}>
            {u.besenstiel.h2}
          </h2>
          <p>
            {u.besenstiel.p1Prefix}
            <Link href="/kettlebell-startgewicht">{u.besenstiel.p1LinkLabel}</Link>
            {u.besenstiel.p1Suffix}
          </p>
          <p>{u.besenstiel.p2}</p>

          <h2 id="kniebeuge" className={styles.h2}>
            {u.kniebeuge.h2}
          </h2>
          <p>{u.kniebeuge.p1}</p>
          <p>{u.kniebeuge.p2}</p>

          <h2 id="ueberkopf" className={styles.h2}>
            {u.ueberkopf.h2}
          </h2>
          <p>{u.ueberkopf.p1}</p>
          <p>{u.ueberkopf.p2}</p>

          <h2 id="tragegang" className={styles.h2}>
            {u.tragegang.h2}
          </h2>
          <p>{u.tragegang.p1}</p>
          <p>{u.tragegang.p2}</p>

          <h2 id="danach" className={styles.h2}>
            {u.danach.h2}
          </h2>
          <p>
            {u.danach.p1Prefix}
            <Link href="/kettlebell-startgewicht">{u.danach.p1LinkLabel}</Link>
            {u.danach.p1Mid}
            <Link href="/uebungen">{u.danach.p1Link2Label}</Link>
            {u.danach.p1Suffix}
          </p>

          <h2 className={styles.h2}>{u.faq.title}</h2>
          {u.faq.items.map((item) => (
            <div key={item.q}>
              <h3 className={styles.h3}>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}

          <div className={styles.ctaCard}>
            <span className={styles.ctaEyebrow}>{u.ctaCard.eyebrow}</span>
            <p className={styles.ctaText}>{u.ctaCard.text}</p>
            <Link href="/kettlebell-startgewicht" className={styles.ctaButton}>
              {u.ctaCard.cta}
            </Link>
          </div>

          <div className={styles.nextRow}>
            {u.nextCards.map((c) => (
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
