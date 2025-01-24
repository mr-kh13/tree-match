import type { ReactNode } from "react";
import styles from "./MessageBubble.module.scss";

interface Props {
  children: ReactNode;
}

export function MessageBubble({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
