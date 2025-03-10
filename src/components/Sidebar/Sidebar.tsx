import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.burgerButtonWrapper}>
        <div className={styles.burgerButton}></div>
      </div>
      <div className={styles.changeLanguageButton}>Eng</div>
    </div>
  );
}
