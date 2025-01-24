import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Tree Match</h1>
    </header>
  );
}
