"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNav } from "@/lib/nav";
import styles from "./SiteChrome.module.css";

export default function SiteHeader() {
  const pathname = usePathname();
  const onFinder = pathname === "/kettlebell-startgewicht";

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandName}>girevo</span>
          <span className={styles.brandDot}>.</span>
        </Link>
        <nav className={styles.nav} aria-label="Hauptnavigation">
          {headerNav().map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={active ? styles.navLinkActive : styles.navLink}
                aria-current={active ? "page" : undefined}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        {!onFinder && (
          <Link href="/kettlebell-startgewicht" className={styles.headerCta}>
            Startgewicht ermitteln
          </Link>
        )}
      </div>
    </header>
  );
}
