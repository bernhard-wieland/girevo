import type { Metadata } from "next";
import { datenschutz as d, formatLegalUpdated } from "@/content/de/legal";
import styles from "@/components/legal.module.css";

export const metadata: Metadata = {
  title: { absolute: `${d.meta.title} — girevo` },
  description: d.meta.description,
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <main className={styles.wrap}>
      <header className={styles.head}>
        <h1 className={styles.h1}>{d.h1}</h1>
        <p className={styles.intro}>{d.intro}</p>
      </header>

      {d.sections.map((s) => (
        <section key={s.h2} className={styles.section}>
          <h2 className={styles.h2}>{s.h2}</h2>
          <p className={styles.body}>{s.body}</p>
        </section>
      ))}

      <p className={styles.updated}>Stand: {formatLegalUpdated()}</p>
    </main>
  );
}
