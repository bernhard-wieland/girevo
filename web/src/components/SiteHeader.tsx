"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { headerNav } from "@/lib/nav";
import styles from "./SiteChrome.module.css";

export default function SiteHeader() {
  const pathname = usePathname();
  const onFinder = pathname === "/kettlebell-startgewicht";
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
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
      {open && (
        <nav id="mobile-nav" className={styles.mobileNav} aria-label="Mobile Navigation">
          {headerNav().map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={active ? styles.mobileNavLinkActive : styles.mobileNavLink}
                aria-current={active ? "page" : undefined}
                onClick={close}
              >
                {n.label}
              </Link>
            );
          })}
          {!onFinder && (
            <Link href="/kettlebell-startgewicht" className={styles.mobileCta} onClick={close}>
              Startgewicht ermitteln
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}
