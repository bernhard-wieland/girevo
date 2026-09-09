import type { ComponentProps, ReactNode } from "react";
import styles from "./Chip.module.css";

// Chip — selectable pill. Not selected: cloud bg / ink text.
// Selected: ink bg / paper text.
export function Chip({
  selected = false,
  children,
  className,
  ...rest
}: { selected?: boolean; children: ReactNode } & Omit<
  ComponentProps<"button">,
  "children"
>) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={[styles.chip, selected && styles.selected, className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}
