import type { ReactNode, ButtonHTMLAttributes } from "react";

type HTMLType = ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends Omit<HTMLType, "size"> {
  children?: ReactNode;
  size?: "md";
  color?: "secondary";
  variant?: "default";
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
}
