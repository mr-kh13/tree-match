import { Container } from "../Container";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <h1 className={styles.title}>Find Your Tree Match Today</h1>
      </Container>
    </header>
  );
}
