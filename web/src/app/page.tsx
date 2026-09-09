import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "40rem",
        margin: "0 auto",
        padding: "64px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        flex: 1,
        justifyContent: "center",
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
        girevo
      </span>
      <h1
        style={{
          margin: 0,
          fontSize: 34,
          lineHeight: "39px",
          letterSpacing: "-0.6px",
          fontWeight: 700,
        }}
      >
        Der erste Monat mit der Kettlebell
      </h1>
      <p
        style={{
          margin: 0,
          fontSize: 17,
          lineHeight: "28px",
          color: "var(--color-graphite)",
        }}
      >
        Ein ruhiger Weg durch die ersten Wochen — ohne Körpermaße, ohne App-Zwang,
        mit klaren Texten statt Videos.
      </p>
      <Link
        href="/kettlebell-startgewicht"
        style={{
          alignSelf: "flex-start",
          fontSize: 16,
          fontWeight: 600,
          minHeight: 48,
          display: "inline-flex",
          alignItems: "center",
          padding: "0 22px",
          borderRadius: 8,
          background: "var(--color-accent)",
          color: "var(--color-on-accent)",
          textDecoration: "none",
        }}
      >
        Startgewicht per Selbsttest bestimmen
      </Link>
    </main>
  );
}
