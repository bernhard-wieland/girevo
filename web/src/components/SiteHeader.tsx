import Link from "next/link";
import { readyNav } from "@/lib/nav";
import { KettlebellMark } from "./KettlebellMark";
import styles from "./SiteChrome.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.brand}>
          <KettlebellMark />
          <span className={styles.brandName}>girevo</span>
        </Link>
        <nav className={styles.nav}>
          {readyNav().map((n) => (
            <Link key={n.href} href={n.href} className={styles.navLink}>
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
