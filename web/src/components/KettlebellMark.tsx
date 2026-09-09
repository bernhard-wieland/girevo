// The girevo line-art kettlebell mark (Style Tile: 1.75–1.9px stroke, round caps,
// no fills). Stroke follows --color-ink.

export function KettlebellMark({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ stroke: "var(--color-ink)", flex: "0 0 auto" }}
    >
      <path d="M17 19c-1-3-1-6 1-8.2C19.6 9 21.7 8.3 24 8.3s4.4.7 6 2.5c2 2.2 2 5.2 1 8.2" />
      <path d="M21 19.5c-.6-2-.7-4 .4-5.3.7-.8 1.6-1.2 2.6-1.2s1.9.4 2.6 1.2c1.1 1.3 1 3.3.4 5.3" />
      <path d="M15.5 24C12 26.4 10 30.3 10 34.6c0 2.4 1.5 4.1 3.6 4.1h20.8c2.1 0 3.6-1.7 3.6-4.1 0-4.3-2-8.2-5.5-10.6" />
      <path d="M15.5 24h17" />
    </svg>
  );
}
