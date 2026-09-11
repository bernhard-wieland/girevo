import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { ArrowUpRight, Bookmark, CalendarDays, Clock } from "lucide-react";
import {
  formatUpdated,
  ratgeber as r,
  RATGEBER_UPDATED,
} from "@/content/de/ratgeber";
import { Banner } from "@/components/Banner";
import { RangeIllustration } from "@/components/illustrations";
import { articleLd, breadcrumbLd, jsonLd } from "@/lib/structuredData";
import { og } from "@/lib/meta";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: `${r.meta.title} — girevo Ratgeber` },
  description: r.meta.description,
  alternates: { canonical: "/ratgeber" },
  openGraph: og({
    type: "article",
    title: r.meta.title,
    description: r.meta.description,
    url: "/ratgeber",
  }),
};

export default function RatgeberPage() {
  return (
    <main className={styles.wrap}>
      <script
        {...jsonLd([
          articleLd({
            path: "/ratgeber",
            headline: r.meta.title,
            description: r.meta.description,
            datePublished: RATGEBER_UPDATED,
            dateModified: RATGEBER_UPDATED,
          }),
          breadcrumbLd([
            { name: "Start", path: "/" },
            { name: "Ratgeber", path: "/ratgeber" },
          ]),
        ])}
      />
      <header className={styles.head}>
        <div className={styles.metaLine}>
          <span>
            <Bookmark size={15} strokeWidth={1.75} aria-hidden="true" />
            {r.kicker}
          </span>
          <span>
            <CalendarDays size={15} strokeWidth={1.75} aria-hidden="true" />
            {formatUpdated(RATGEBER_UPDATED)}
          </span>
          <span>
            <Clock size={15} strokeWidth={1.75} aria-hidden="true" />
            {r.readingTime}
          </span>
        </div>
        <h1 className={styles.h1}>{r.h1}</h1>
        <p className={styles.deck}>{r.deck}</p>
      </header>

      <div className={styles.body}>
        <aside className={styles.toc}>
          <div className={styles.tocLabel}>{r.tocLabel}</div>
          <nav className={styles.tocNav}>
            {r.toc.map((t) => (
              <a key={t.id} href={`#${t.id}`} className={styles.tocLink}>
                {t.label}
              </a>
            ))}
          </nav>
        </aside>

        <article className={styles.article}>
          <p>{r.intro}</p>

          <h2 id="warum-bereich" className={styles.h2}>
            {r.warumBereich.h2}
          </h2>
          {r.warumBereich.p.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <RangeIllustration className={styles.figure} />

          <h2 id="selbsttest" className={styles.h2}>
            {r.selbsttest.h2}
          </h2>
          <p>{r.selbsttest.p1}</p>
          <p>{r.selbsttest.p2}</p>
          <ol className={styles.steps}>
            {r.selbsttest.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <p>{r.selbsttest.p3}</p>

          <h2 id="wie-der-bereich" className={styles.h2}>
            {r.wieDerBereich.h2}
          </h2>
          <p>{r.wieDerBereich.p1}</p>
          <div className={styles.dataTable}>
            {r.wieDerBereich.table.map((row) => (
              <div key={row.k} className={styles.dataRow}>
                <span className={styles.dataKey}>{row.k}</span>
                <span className={styles.dataVal}>{row.v}</span>
              </div>
            ))}
          </div>
          <p>{r.wieDerBereich.p2}</p>

          <h2 id="innerhalb-entscheiden" className={styles.h2}>
            {r.innerhalb.h2}
          </h2>
          <p>{r.innerhalb.p}</p>
          <Banner tone="info" title="Wenn du nur eine kaufst">
            {r.innerhalb.callout}
          </Banner>

          <h2 id="fehler" className={styles.h2}>
            {r.fehler.h2}
          </h2>
          {r.fehler.items.map((item) => (
            <Fragment key={item.h3}>
              <h3 className={styles.h3}>{item.h3}</h3>
              <p>{item.p}</p>
            </Fragment>
          ))}

          <h2 id="zweites-gewicht" className={styles.h2}>
            {r.zweitesGewicht.h2}
          </h2>
          <p>{r.zweitesGewicht.p1}</p>
          <p>
            {r.zweitesGewicht.p2Prefix}
            <Link href="/kettlebell-kaufen">
              {r.zweitesGewicht.p2LinkLabel}
            </Link>
            {r.zweitesGewicht.p2Mid}
            <Link href="/kettlebell-startgewicht">
              {r.zweitesGewicht.p2Link2Label}
            </Link>
            {r.zweitesGewicht.p2Suffix}
          </p>

          <div className={styles.ctaCard}>
            <span className={styles.ctaEyebrow}>{r.ctaCard.eyebrow}</span>
            <p className={styles.ctaText}>{r.ctaCard.text}</p>
            <Link href="/kettlebell-startgewicht" className={styles.ctaButton}>
              {r.ctaCard.cta}
            </Link>
          </div>

          <div className={styles.nextRow}>
            {r.nextCards.map((c) => {
              const inner = (
                <>
                  <span className={styles.nextLabel}>
                    <span>{c.label}</span>
                    {c.ready ? (
                      <ArrowUpRight
                        size={17}
                        strokeWidth={2}
                        aria-hidden="true"
                        color="var(--color-coral)"
                      />
                    ) : (
                      <span className={styles.soon}>{r.soonTag}</span>
                    )}
                  </span>
                  <span className={styles.nextTitle}>{c.title}</span>
                </>
              );
              return c.ready ? (
                <Link key={c.href} href={c.href} className={styles.nextCard}>
                  {inner}
                </Link>
              ) : (
                <div key={c.href} className={styles.nextCard}>
                  {inner}
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </main>
  );
}
