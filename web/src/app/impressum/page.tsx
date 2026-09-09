import type { Metadata } from "next";
import { impressum as i } from "@/content/de/legal";
import styles from "@/components/legal.module.css";

export const metadata: Metadata = {
  title: { absolute: `${i.meta.title} — girevo` },
  description: i.meta.description,
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <main className={styles.wrap}>
      <header className={styles.head}>
        <h1 className={styles.h1}>{i.h1}</h1>
        <p className={styles.intro}>{i.intro}</p>
      </header>

      {i.sections.map((s) => (
        <section key={s.h2} className={styles.section}>
          <h2 className={styles.h2}>{s.h2}</h2>
          {"lines" in s && s.lines ? (
            <p className={styles.lines}>
              {s.lines.map((line, idx) => (
                <span key={line}>
                  {line}
                  {idx < s.lines.length - 1 && <br />}
                </span>
              ))}
            </p>
          ) : (
            <p className={styles.body}>{s.body}</p>
          )}
        </section>
      ))}
    </main>
  );
}
