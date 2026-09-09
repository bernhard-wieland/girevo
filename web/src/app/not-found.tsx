import Link from "next/link";
import { footerNav } from "@/lib/nav";

const wrap: React.CSSProperties = {
  maxWidth: "40rem",
  margin: "0 auto",
  padding: "clamp(48px, 8vw, 96px) clamp(20px, 4vw, 40px)",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

export default function NotFound() {
  return (
    <main style={wrap}>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 12,
          letterSpacing: "1.6px",
          textTransform: "uppercase",
          color: "var(--color-coral)",
          fontWeight: 700,
        }}
      >
        Seite nicht gefunden
      </span>
      <h1
        style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: 34,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}
      >
        Diese Seite gibt es nicht (mehr).
      </h1>
      <p style={{ margin: 0, fontSize: 17, lineHeight: "29px", color: "var(--color-stone)" }}>
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
          fontSize: 16,
        }}
      >
        <li>
          <Link href="/">Startseite</Link>
        </li>
        {footerNav().map((n) => (
          <li key={n.href}>
            <Link href={n.href}>{n.label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
