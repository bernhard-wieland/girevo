import type { ReactNode } from "react";
import { Info } from "lucide-react";
import styles from "./Banner.module.css";

type Tone = "info" | "success" | "warning";

// Jetzo Banner — tinted callout with a leading icon, title and body.
export function Banner({
  tone = "info",
  title,
  children,
}: {
  tone?: Tone;
  title?: string;
  children?: ReactNode;
}) {
  return (
    <div role="status" className={`${styles.banner} ${styles[tone]}`}>
      <Info size={18} strokeWidth={2} aria-hidden="true" className={styles.icon} />
      <div>
        {title && <div className={styles.title}>{title}</div>}
        {children && <div className={styles.body}>{children}</div>}
      </div>
    </div>
  );
}
