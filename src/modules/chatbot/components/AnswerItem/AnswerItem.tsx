import type { ReactNode } from "react";
import styles from "./AnswerItem.module.scss";
import { Button, ButtonProps } from "@/shared/components/Button";

interface Props extends Pick<ButtonProps, "onClick"> {
  children: ReactNode;
}

export function AnswerItem({ children, onClick }: Props) {
  return (
    <Button className={styles.answerItem} color="primary" onClick={onClick}>
      {children}
    </Button>
  );
}
