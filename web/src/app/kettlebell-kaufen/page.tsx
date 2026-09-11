import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Droplets,
  Grip,
  Layers,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";
import { Banner } from "@/components/Banner";
import {
  BuyTypeIllustration,
  UsedCheckIllustration,
} from "@/components/illustrations";
import { kaufberatung as k } from "@/content/de/kaufberatung";
import { AFFILIATE_READY } from "@/lib/affiliate";
import { og } from "@/lib/meta";
import { breadcrumbLd, faqLd, jsonLd } from "@/lib/structuredData";
import styles from "./page.module.css";

const NEXT_CARDS = [
  {
    href: "/kettlebell-startgewicht",
    label: "Gewichtsfinder",
    title: "Welcher Bereich zu dir passt",
  },
  {
    href: "/uebungen",
    label: "Übungen",
    title: "Die vier Bewegungen für die ersten Wochen",
  },
  {
    href: "/kettlebell-zuhause-training",
    label: "Zu Hause trainieren",
    title: "Platz, Boden und Lautstärke",
  },
  {
    href: "/kettlebell-training",
    label: "Einstieg",
    title: "Was ist Kettlebell-Training?",
  },
  {
    href: "/kettlebell-technik-ohne-kettlebell",
    label: "Vorbereitung",
    title: "Technik schon vor dem Kauf üben",
  },
];

export const metadata: Metadata = {
  title: { absolute: `${k.meta.title} — girevo` },
  description: k.meta.description,
  alternates: { canonical: "/kettlebell-kaufen" },
  openGraph: og({
    title: k.meta.title,
    description: k.meta.description,
    url: "/kettlebell-kaufen",
  }),
};

const CRITERIA_ICONS: Record<string, LucideIcon> = {
  Layers,
  Grip,
  Droplets,
  SlidersHorizontal,
};

export default function KaufberatungPage() {
  return (
    <main className={styles.main}>
      <script
        {...jsonLd([
          breadcrumbLd([
            { name: "Start", path: "/" },
            { name: "Kaufberatung", path: "/kettlebell-kaufen" },
          ]),
          faqLd(k.faq.items),
        ])}
      />

      {AFFILIATE_READY && (
        <Banner tone="info" title="Werbung · Affiliate-Links">
          {k.disclosure}
        </Banner>
      )}

      <section className={styles.intro}>
        <span className={styles.eyebrow}>Kaufberatung</span>
        <h1 className={styles.h1}>{k.h1}</h1>
        <p className={styles.lead}>
          {k.intro}{" "}
          <Link href="/kettlebell-startgewicht">{k.introFinderLink}</Link>
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>{k.criteriaTitle}</h2>
        <div className={styles.grid}>
          {k.criteria.map((c) => {
            const Icon = CRITERIA_ICONS[c.icon] ?? Layers;
            return (
              <div key={c.title} className={styles.card}>
                <span className={styles.cardIcon}>
                  <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span className={styles.kicker}>{c.kicker}</span>
                <span className={styles.cardTitle}>{c.title}</span>
                <span className={styles.cardText}>{c.text}</span>
                <span className={styles.advice}>
                  <Check size={17} strokeWidth={2} aria-hidden="true" />
                  <span>{c.advice}</span>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>{k.compareTitle}</h2>
          <p>{k.compareIntro}</p>
        </div>
        <div className={styles.productGrid}>
          {k.products.map((p) => (
            <div key={p.title} className={styles.productCard}>
              <BuyTypeIllustration
                type={p.illo as "klassiker" | "paar" | "verstellbar" | "wettkampf"}
                className={styles.productIllo}
              />
              <div className={styles.productHead}>
                <span className={styles.productKind}>{p.kind}</span>
                <span className={styles.productTitle}>{p.title}</span>
                <span className={styles.productFit}>Passt, wenn {p.fit}</span>
              </div>
              <div className={styles.specs}>
                {p.specs.map((row) => (
                  <div key={row.k} className={styles.specRow}>
                    <span className={styles.specKey}>{row.k}</span>
                    <span className={styles.specVal}>{row.v}</span>
                  </div>
                ))}
              </div>
              <div className={styles.productFoot}>
                <span className={styles.productNote}>{p.note}</span>
                {AFFILIATE_READY ? (
                  <a href="#" rel="sponsored nofollow" className={styles.productLink}>
                    Händler ansehen
                    <ArrowUpRight size={17} strokeWidth={1.75} aria-hidden="true" />
                  </a>
                ) : (
                  <span className={styles.linkPending}>{k.linkPending}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>{k.avoid.h2}</h2>
        <div className={styles.prose}>
          <p className={styles.proseP}>{k.avoid.p}</p>
          <div className={styles.subBlock}>
            <UsedCheckIllustration className={styles.usedIllo} />
            <h3 className={styles.h3}>{k.avoid.h3}</h3>
            <p className={styles.proseP}>{k.avoid.p2}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>{k.faq.title}</h2>
        <div className={styles.faqList}>
          {k.faq.items.map((item) => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQ}>{item.q}</summary>
              <p className={styles.faqA}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className={styles.nextRow}>
        {NEXT_CARDS.map((c) => (
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
            <span className={styles.nextCardTitle}>{c.title}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
