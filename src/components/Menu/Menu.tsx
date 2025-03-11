import styles from "./Menu.module.css";

export function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.menuContent}>
        <div className={styles.menuLinks}>
          <a href="#" className={styles.menuItem}>
            Парковка
          </a>
          <a href="#" className={styles.menuItem}>
            Бензин
          </a>
          <a href="#" className={styles.menuItem}>
            Страхование
          </a>
          <a href="#" className={styles.menuItem}>
            Обслуживание
          </a>
        </div>
        <div className={styles.socialLinks}>
          <a href="#">
            <img src="/Telegram_white.svg" alt="телеграм" />
          </a>
          <a href="#">
            <img src="/Facebook_white.svg" alt="вконтакте" />
          </a>
          <a href="#">
            <img src="/Instagram_white.svg" alt="инстаграм" />
          </a>
        </div>
        <div className={styles.changeLanguageButton}>Eng</div>
      </div>
      <div className={styles.opacityBox}></div>
    </div>
  );
}
