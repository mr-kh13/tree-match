import type { ReactNode } from "react";
import styles from "./MessageBubble.module.scss";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  answer?: boolean;
}

export function MessageBubble({ children, answer }: Props) {
  return (
    <div
      className={clsx(styles.container, {
        [styles.answer]: answer,
      })}
    >
      {children}
    </div>
  );
}
