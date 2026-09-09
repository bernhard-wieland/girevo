import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  Check,
  Dumbbell,
  House,
  ShoppingBag,
  Timer,
  type LucideIcon,
} from "lucide-react";
import HeroFinderCard from "@/components/HeroFinderCard";
import { KettlebellArt } from "@/components/KettlebellArt";
import { home } from "@/content/de/home";
import { og } from "@/lib/meta";
import styles from "./page.module.css";

const title = "girevo — Kettlebell-Einstieg: Startgewicht und die ersten Wochen";
const description =
  "Kein Programm, kein Konto. Bestimme dein Kettlebell-Startgewicht per Selbsttest und finde die wenigen Übungen, die für den Anfang zählen.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: og({ title, description, url: "/" }),
};

const ICONS: Record<string, LucideIcon> = {
  Timer,
  House,
  Dumbbell,
  ShoppingBag,
  Activity,
  BookOpen,
};

const SIGNPOST_TONE = ["coral", "teal", "coral"] as const;

export default function Home() {
  const { hero, signposts, prose, summary } = home;

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>{hero.eyebrow}</span>
          <h1 className={styles.h1}>{hero.h1}</h1>
          <p className={styles.lead}>{hero.lead}</p>
          <div className={styles.facts}>
            {hero.facts.map((f) => {
              const Icon = ICONS[f.icon];
              return (
                <div key={f.text} className={styles.fact}>
                  <span className={styles.factIcon}>
                    <Icon size={17} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span>{f.text}</span>
                </div>
              );
            })}
          </div>
          <KettlebellArt className={styles.heroArt} />
        </div>

        <HeroFinderCard />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>
          <span className={styles.h2Mark} aria-hidden="true" />
          {home.signpostTitle}
        </h2>
        <div className={styles.signposts}>
          {signposts.map((s, i) => {
            const Icon = ICONS[s.icon];
            const tone = SIGNPOST_TONE[i] ?? "coral";
            const inner = (
              <>
                <span className={`${styles.signpostIcon} ${styles[tone]}`}>
                  <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span className={styles.signpostHead}>
                  <span className={styles.signpostTitle}>{s.title}</span>
                  {s.ready ? (
                    <ArrowUpRight
                      size={18}
                      strokeWidth={2}
                      aria-hidden="true"
                      color="var(--color-coral)"
                    />
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

      <section className={styles.essentials}>
        <div className={styles.prose}>
          <h2 className={styles.h2}>
            <span className={styles.h2Mark} aria-hidden="true" />
            {prose.h2}
          </h2>
          <p className={styles.proseIntro}>{prose.intro}</p>
          {prose.sections.map((sec, i) => (
            <div key={sec.h3} className={styles.essential}>
              <span className={styles.essentialNum}>{`0${i + 1}`}</span>
              <div>
                <h3 className={styles.h3}>{sec.h3}</h3>
                <p className={styles.essentialText}>{sec.p}</p>
              </div>
            </div>
          ))}
        </div>

        <aside className={styles.aside}>
          <span className={styles.asideEyebrow}>{summary.label}</span>
          {summary.points.map((p) => (
            <div key={p} className={styles.summaryRow}>
              <span className={styles.summaryCheck}>
                <Check size={14} strokeWidth={2.5} aria-hidden="true" />
              </span>
              <span>{p}</span>
            </div>
          ))}
        </aside>
      </section>
    </main>
  );
}
