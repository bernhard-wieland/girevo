import Link from "next/link";
import { footerNav, legalNav } from "@/lib/nav";
import styles from "./SiteChrome.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span>girevo.de — Werkzeug, kein Trainingsprogramm.</span>
        <span className={styles.footerLinks}>
          <Link href="/">Startseite</Link>
          {footerNav().map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </span>
        <span className={styles.footerLegal}>
          {legalNav().map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </span>
      </div>
    </footer>
  );
}
