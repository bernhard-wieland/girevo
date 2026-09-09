import Link from "next/link";
import { footerNav, legalNav } from "@/lib/nav";
import styles from "./SiteChrome.module.css";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <span>
            <span className={styles.footerBrand}>girevo.de</span> — Werkzeug, kein
            Trainingsprogramm.
          </span>
          <nav className={styles.footerLinks} aria-label="Fußzeile">
            <Link href="/">Startseite</Link>
            {footerNav().map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.footerBottom}>
          <span>© {year} girevo</span>
          <nav className={styles.footerLegal} aria-label="Rechtliches">
            {legalNav().map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
