import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "tertiary";
type Size = "large" | "small";

type Common = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  leadingIcon?: ReactNode;
  children: ReactNode;
};

const cls = (v: Variant, s: Size, full?: boolean) =>
  [styles.btn, styles[v], styles[s], full && styles.full].filter(Boolean).join(" ");

export function Button({
  variant = "primary",
  size = "large",
  fullWidth,
  leadingIcon,
  children,
  ...rest
}: Common & Omit<ComponentProps<"button">, "children">) {
  return (
    <button type="button" className={cls(variant, size, fullWidth)} {...rest}>
      {leadingIcon}
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "large",
  fullWidth,
  leadingIcon,
  children,
  ...rest
}: Common & Omit<ComponentProps<typeof Link>, "children">) {
  return (
    <Link className={cls(variant, size, fullWidth)} {...rest}>
      {leadingIcon}
      {children}
    </Link>
  );
}
