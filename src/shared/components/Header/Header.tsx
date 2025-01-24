import { Container } from "../Container";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <h1 className={styles.title}>Tree Match</h1>
      </Container>
    </header>
  );
}
