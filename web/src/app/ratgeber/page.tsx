import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import {
  formatUpdated,
  ratgeber as r,
  RATGEBER_UPDATED,
} from "@/content/de/ratgeber";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: `${r.meta.title} — girevo Ratgeber` },
  description: r.meta.description,
  alternates: { canonical: "/ratgeber" },
};

export default function RatgeberPage() {
  return (
    <div className={styles.wrap}>
      <header className={styles.head}>
        <div className={styles.metaLine}>
          <span>{r.kicker}</span>
          <span>·</span>
          <span>{formatUpdated(RATGEBER_UPDATED)}</span>
          <span>·</span>
          <span>{r.readingTime}</span>
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

          <div className={styles.ctaCard}>
            <span className={styles.ctaEyebrow}>{r.ctaCard.eyebrow}</span>
            <p className={styles.ctaText}>{r.ctaCard.text}</p>
            <Link href="/kettlebell-startgewicht" className={styles.ctaButton}>
              {r.ctaCard.cta}
            </Link>
          </div>

          <h2 id="warum-bereich" className={styles.h2}>
            {r.warumBereich.h2}
          </h2>
          {r.warumBereich.p.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <h3 id="was-der-bereich-nicht-ist" className={styles.h3}>
            {r.wasNicht.h3}
          </h3>
          <p>{r.wasNicht.p}</p>

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
          <p className={styles.smallNote}>{r.wieDerBereich.note}</p>

          <h2 id="innerhalb-entscheiden" className={styles.h2}>
            {r.innerhalb.h2}
          </h2>
          <p>{r.innerhalb.p}</p>
          <div className={styles.callout}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8h.01" />
              <path d="M11 12h1v4h1" />
            </svg>
            <span>{r.innerhalb.callout}</span>
          </div>

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

          <div className={styles.nextRow}>
            {r.nextCards.map((c) => {
              const inner = (
                <>
                  <span className={styles.nextLabel}>
                    {c.label}
                    {!c.ready && (
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
    </div>
  );
}
