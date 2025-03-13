import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.phoneNumber}>
        8 (495) 234-22-44
      </a>
      <p className={styles.copyright}>© 2016-2019 «Need for drive»</p>
    </footer>
  );
}
