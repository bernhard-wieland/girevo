import type { Metadata } from "next";
import WeightFinderWizard from "@/components/WeightFinderWizard";
import { bandRows, copy } from "@/content/de/weightFinder";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Kettlebell-Startgewicht per Selbsttest bestimmen",
  description:
    "Welche Kettlebell zum Anfangen? Ein Selbsttest ohne Gewicht nennt dir einen Gewichtsbereich statt einer festen Zahl — abgestimmt auf deine Grundbewegungen und deinen Schwerpunkt.",
  alternates: { canonical: "/kettlebell-startgewicht" },
};

export default function KettlebellStartgewichtPage() {
  return (
    <main className={styles.wrap}>
      <div className={styles.intro}>
        <span className={styles.eyebrow}>{copy.intro.eyebrow}</span>
        <h1 className={styles.h1}>{copy.page.aboveTitle}: welches passt zu dir?</h1>
        <p className={styles.introLead}>{copy.intro.lead}</p>
      </div>

      <WeightFinderWizard />

      <div className={styles.evergreen}>
        <section className={styles.section}>
          <h2 className={styles.h2}>{copy.page.whyRangeTitle}</h2>
          <p className={styles.body}>{copy.page.whyRangeBody}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{copy.page.bandsTitle}</h2>
          <p className={styles.body}>{copy.page.bandsIntro}</p>
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
          <p className={styles.note}>{copy.page.bandsDraftNote}</p>
        </section>
      </div>
    </main>
  );
}
