import { ReactSVG } from "react-svg";
import styles from "./Menu.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import cn from "classnames";

export function Menu() {
  const menuState = useSelector((s: RootState) => s.menu.isActive);

  return (
    <div className={cn(styles.menu, { [styles.menuActive]: menuState })}>
      <div className={styles.equalizer}></div>
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
          <a href="#" className={styles.socialLink}>
            <ReactSVG src="/Telegram_white.svg" />
          </a>
          <a href="#" className={styles.socialLink}>
            <ReactSVG src="/Facebook_white.svg" />
          </a>
          <a href="#" className={styles.socialLink}>
            <ReactSVG src="/Instagram_white.svg" />
          </a>
        </div>
        <div className={styles.changeLanguageButton}>Eng</div>
      </div>
      <div className={styles.opacityBox}></div>
    </div>
  );
}
