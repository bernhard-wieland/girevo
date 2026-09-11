// Line-art illustrations in the KettlebellArt style — ink outline, coral inner
// handle / accent, two-colour, no fills except small coral markers. Decorative by
// default (aria-hidden); pass `title` to expose one as an image to assistive tech.

import type { ReactNode } from "react";

type IlloProps = { className?: string; title?: string };

// Shared kettlebell glyph, drawn around a bottom-centre origin (0,0).
const BODY =
  "M25 -68 A38 38 0 0 1 12 -4 L-12 -4 A38 38 0 0 1 -25 -68 L-25 -89 C-25 -107 25 -107 25 -89 L25 -68 Z";
const WINDOW =
  "M-13 -68 L-13 -84 C-13 -95 13 -95 13 -84 L13 -68 A38 38 0 0 0 -13 -68 Z";

function Bell({ transform }: { transform?: string }) {
  return (
    <g transform={transform}>
      <path d={BODY} stroke="var(--color-ink)" />
      <path d={WINDOW} stroke="var(--color-coral)" />
    </g>
  );
}

function Svg({
  viewBox,
  className,
  title,
  children,
}: {
  viewBox: string;
  className?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      strokeWidth={4.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...(title
        ? { role: "img", "aria-label": title }
        : { "aria-hidden": true })}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

/** A lighter and a heavier kettlebell on an axis, joined by a coral span —
 *  "your start weight is a range, not one number". */
export function RangeIllustration({ className, title }: IlloProps) {
  return (
    <Svg viewBox="0 0 330 134" className={className} title={title}>
      <Bell transform="translate(88 116) scale(0.66)" />
      <Bell transform="translate(244 116) scale(0.98)" />
      <path d="M36 120 H296" stroke="var(--color-ink)" />
      <path
        d="M88 120 H244"
        stroke="var(--color-coral)"
        strokeWidth={6}
      />
      <circle cx="88" cy="120" r="6.5" fill="var(--color-coral)" />
      <circle cx="244" cy="120" r="6.5" fill="var(--color-coral)" />
    </Svg>
  );
}

type BuyType = "klassiker" | "paar" | "verstellbar" | "wettkampf";

/** Silhouette for one buyer's-guide option. */
export function BuyTypeIllustration({
  type,
  className,
  title,
}: IlloProps & { type: BuyType }) {
  if (type === "paar") {
    return (
      <Svg viewBox="0 0 148 136" className={className} title={title}>
        <Bell transform="translate(40 118) scale(0.82)" />
        <Bell transform="translate(107 118)" />
      </Svg>
    );
  }

  return (
    <Svg viewBox="0 0 132 136" className={className} title={title}>
      <Bell transform="translate(66 118)" />
      {type === "verstellbar" && (
        <g transform="translate(66 118)">
          <path
            d="M-24 -30 H24 M-22 -54 H22"
            stroke="var(--color-ink)"
            strokeWidth={3.4}
          />
          <path
            d="M-25 -42 H25"
            stroke="var(--color-coral)"
            strokeWidth={3.4}
          />
        </g>
      )}
      {type === "wettkampf" && (
        <path
          transform="translate(66 118)"
          d="M-50 -82 V-96 H-36 M50 -82 V-96 H36 M-50 4 V16 H-36 M50 4 V16 H36"
          stroke="var(--color-coral)"
        />
      )}
    </Svg>
  );
}

/** Kettlebell with a coral loupe over the grip zone — check it before you buy. */
export function UsedCheckIllustration({ className, title }: IlloProps) {
  return (
    <Svg viewBox="0 0 160 132" className={className} title={title}>
      <Bell transform="translate(72 116)" />
      <g stroke="var(--color-coral)">
        <circle cx="104" cy="40" r="15" />
        <path d="M93 51 L82 62" />
        <path d="M98 40 h12 M104 34 v12" />
      </g>
    </Svg>
  );
}

type Movement = "hinge-swing" | "goblet-squat" | "overhead-press" | "carry";

const dot = (cx: number, cy: number, r = 5) => (
  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="var(--color-coral)" stroke="none" />
);

type ArrowDir = "up" | "down" | "right";

/** Filled triangle arrowhead — reads at small sizes where an open chevron
 *  stroke disappears. */
function Arrowhead({ x, y, dir, size = 11 }: { x: number; y: number; dir: ArrowDir; size?: number }) {
  const points =
    dir === "up"
      ? `${x},${y - size} ${x - size},${y + size * 0.7} ${x + size},${y + size * 0.7}`
      : dir === "down"
        ? `${x},${y + size} ${x - size},${y - size * 0.7} ${x + size},${y - size * 0.7}`
        : `${x + size},${y} ${x - size * 0.7},${y - size} ${x - size * 0.7},${y + size}`;
  return <polygon points={points} fill="var(--color-coral)" stroke="none" />;
}

/** One motion-accent illustration per movement — the kettlebell, always in
 *  its normal standing orientation, plus a coral path/arrow tracing where it
 *  travels. Echoes RangeIllustration's grammar (bell + coral accent + dots). */
export function MovementIllustration({
  movement,
  className,
  title,
}: IlloProps & { movement: Movement }) {
  if (movement === "goblet-squat") {
    return (
      <Svg viewBox="0 0 180 148" className={className} title={title}>
        <Bell transform="translate(52 128) scale(0.58)" />
        <path d="M104 30 V110" stroke="var(--color-coral)" strokeWidth={6} />
        <Arrowhead x={104} y={16} dir="up" />
        <Arrowhead x={104} y={132} dir="down" />
      </Svg>
    );
  }

  if (movement === "overhead-press") {
    return (
      <Svg viewBox="0 0 180 148" className={className} title={title}>
        <Bell transform="translate(58 128) scale(0.62)" />
        <path d="M58 66 V34" stroke="var(--color-coral)" strokeWidth={6} />
        <Arrowhead x={58} y={18} dir="up" />
      </Svg>
    );
  }

  if (movement === "carry") {
    return (
      <Svg viewBox="0 0 180 148" className={className} title={title}>
        <Bell transform="translate(44 128) scale(0.68)" />
        <path
          d="M80 112 H128"
          stroke="var(--color-coral)"
          strokeWidth={4.5}
          strokeDasharray="9 7"
        />
        <Arrowhead x={146} y={112} dir="right" />
      </Svg>
    );
  }

  // hinge-swing — the bell tilted mid-arc, a dashed path tracing the pendulum.
  return (
    <Svg viewBox="0 0 180 148" className={className} title={title}>
      <Bell transform="translate(48 128) scale(0.76) rotate(-10)" />
      <path
        d="M38 118 Q64 32 122 60"
        stroke="var(--color-coral)"
        strokeWidth={4.5}
        strokeDasharray="9 7"
      />
      {dot(38, 118)}
      {dot(128, 58, 6)}
    </Svg>
  );
}
