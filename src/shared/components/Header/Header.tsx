import { Button } from "@/shared/components/Button";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Tree Match</h1>
      <Button color="secondary" size="md">
        Start Over
      </Button>
    </header>
  );
}
