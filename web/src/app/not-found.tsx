import Link from "next/link";
import { readyNav } from "@/lib/nav";

export default function NotFound() {
  return (
    <main
      style={{
        maxWidth: "40rem",
        margin: "0 auto",
        padding: "64px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <span
        style={{
          fontSize: 12,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--color-stone)",
          fontWeight: 600,
        }}
      >
        Seite nicht gefunden
      </span>
      <h1
        style={{
          margin: 0,
          fontSize: 30,
          lineHeight: 1.15,
          letterSpacing: "-0.6px",
          fontWeight: 700,
        }}
      >
        Diese Seite gibt es nicht (mehr).
      </h1>
      <p style={{ margin: 0, fontSize: 17, lineHeight: "28px", color: "var(--color-graphite)" }}>
        Vielleicht hilft eine davon:
      </p>
      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <li>
          <Link href="/">Startseite</Link>
        </li>
        {readyNav().map((n) => (
          <li key={n.href}>
            <Link href={n.href}>{n.label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
