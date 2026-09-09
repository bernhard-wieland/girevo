// Line-art kettlebell — the one illustration the site leans on. Ink outline,
// coral inner handle, on a soft coral-tint disc. Two-colour, no fills.

export function KettlebellArt({
  className,
  title = "Kettlebell",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      fill="none"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="120" cy="120" r="120" fill="var(--color-coral-tint)" />

      {/* bell */}
      <path
        d="M120 84c34 0 58 26 58 62 0 34-26 54-58 54s-58-20-58-54c0-36 24-62 58-62Z"
        stroke="var(--color-ink)"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      {/* collar */}
      <path
        d="M96 92c6 8 15 12 24 12s18-4 24-12"
        stroke="var(--color-ink)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* handle — outer */}
      <path
        d="M92 96c-8-34 4-58 28-58s36 24 28 58"
        stroke="var(--color-ink)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* handle — inner, coral */}
      <path
        d="M104 94c-5-22 3-40 16-40s21 18 16 40"
        stroke="var(--color-coral)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* shine */}
      <path
        d="M96 138c4-14 16-24 30-25"
        stroke="var(--color-ink)"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
