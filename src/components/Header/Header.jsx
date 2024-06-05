import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1>Color Picker</h1>
      </nav>
    </header>
  );
};

export default Header;