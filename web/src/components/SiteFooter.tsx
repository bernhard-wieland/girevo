import Link from "next/link";
import { readyNav } from "@/lib/nav";
import styles from "./SiteChrome.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span>girevo.de — Werkzeug, kein Trainingsprogramm.</span>
        <span className={styles.footerLinks}>
          <Link href="/">Startseite</Link>
          {readyNav().map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </span>
      </div>
    </footer>
  );
}
