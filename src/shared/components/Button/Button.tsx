import { clsx } from "clsx";
import { ButtonProps } from "./types";
import styles from "./Button.module.scss";

export function Button({
  children,
  className,
  color,
  size = "md",
  fullWidth,
  type = "button",
  variant = "default",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(className, styles.button, {
        // Color
        [styles.secondary]: color === "secondary",
        [styles.primary]: color === "primary",
        // Size
        [styles.md]: size === "md",
        [styles.lg]: size === "lg",
        // Variant
        [styles.default]: variant === "default",
        // Others
        [styles.fullWidth]: fullWidth,
      })}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
