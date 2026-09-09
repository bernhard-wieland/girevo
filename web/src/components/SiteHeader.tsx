"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNav } from "@/lib/nav";
import { KettlebellMark } from "./KettlebellMark";
import styles from "./SiteChrome.module.css";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.brand}>
          <KettlebellMark />
          <span className={styles.brandName}>girevo</span>
        </Link>
        <nav className={styles.nav}>
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
      </div>
    </header>
  );
}
