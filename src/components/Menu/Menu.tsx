import { ReactSVG } from "react-svg";
import styles from "./Menu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { menuSlice } from "../../store/menu.slice";

export function Menu() {
  const menuState = useSelector((s: RootState) => s.menu.isActive);
  const dispatch = useDispatch<AppDispatch>();
  const toggleMenu = () => dispatch(menuSlice.actions.toggle());

  return (
    <div className={cn(styles.menu, { [styles.menuActive]: menuState })}>
      <div className={styles.equalizer}></div>
      <div className={styles.menuContent}>
        <div className={styles.menuLinks}>
          <NavLink to={"/"} onClick={toggleMenu} className={styles.menuItem}>
            Парковка
          </NavLink>
          <NavLink to={"/"} onClick={toggleMenu} className={styles.menuItem}>
            Бензин
          </NavLink>
          <NavLink to={"/"} onClick={toggleMenu} className={styles.menuItem}>
            Страхование
          </NavLink>
          <NavLink to={"/"} onClick={toggleMenu} className={styles.menuItem}>
            Обслуживание
          </NavLink>
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
