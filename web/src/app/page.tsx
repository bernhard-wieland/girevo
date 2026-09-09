import type { Metadata } from "next";
import Link from "next/link";
import { home } from "@/content/de/home";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "girevo — Kettlebell-Einstieg: Startgewicht und die ersten Wochen",
  },
  description:
    "Kein Programm, kein Konto. Bestimme dein Kettlebell-Startgewicht per Selbsttest und finde die wenigen Übungen, die für den Anfang zählen.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const { hero, signposts, prose, summary } = home;

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.h1}>{hero.h1}</h1>
          <p className={styles.lead}>{hero.lead}</p>
          <div className={styles.chips}>
            {hero.chips.map((c) => (
              <span key={c} className={styles.chip}>
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.heroCard}>
          <span className={styles.eyebrow}>{hero.card.eyebrow}</span>
          <h2 className={styles.heroCardTitle}>{hero.card.title}</h2>
          <p className={styles.heroCardText}>{hero.card.text}</p>
          <Link href={hero.card.href} className={styles.cta}>
            {hero.card.cta}
          </Link>
          <span className={styles.reassurance}>{hero.card.reassurance}</span>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>{home.signpostTitle}</h2>
        <div className={styles.signposts}>
          {signposts.map((s) => {
            const inner = (
              <>
                <span className={styles.signpostHead}>
                  <span className={styles.signpostTitle}>{s.title}</span>
                  {s.ready ? (
                    <span className={styles.signpostArrow}>→</span>
                  ) : (
                    <span className={styles.soon}>{home.soonTag}</span>
                  )}
                </span>
                <span className={styles.signpostText}>{s.text}</span>
              </>
            );
            return s.ready ? (
              <Link key={s.href} href={s.href} className={styles.signpost}>
                {inner}
              </Link>
            ) : (
              <div key={s.href} className={styles.signpost}>
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.proseWrap}>
        <div className={styles.prose}>
          <h2 className={styles.proseH2}>{prose.h2}</h2>
          <p className={styles.proseP}>{prose.intro}</p>
          {prose.sections.map((sec) => (
            <div key={sec.h3} className={styles.section}>
              <h3 className={styles.proseH3}>{sec.h3}</h3>
              <p className={styles.proseP}>{sec.p}</p>
            </div>
          ))}
        </div>

        <aside className={styles.aside}>
          <span className={styles.eyebrow}>{summary.label}</span>
          <ul className={styles.asideList}>
            {summary.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}
