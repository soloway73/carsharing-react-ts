import styles from "./Menu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import cn from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import { menuSlice } from "../../store/menu.slice";
import TelegramIcon from "../../assets/TelegramIcon.svg?react";
import InstagramIcon from "../../assets/InstagramIcon.svg?react";
import FacebookIcon from "../../assets/FacebookIcon.svg?react";

export function Menu() {
  const menuState = useSelector((s: RootState) => s.menu.isActive);
  const dispatch = useDispatch<AppDispatch>();
  const toggleMenu = () => dispatch(menuSlice.actions.toggle());
  const { pathname } = useLocation();

  return (
    <div className={cn(styles.menu, { [styles.menuActive]: menuState })}>
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
            <TelegramIcon />
          </a>
          <a href="#" className={styles.socialLink}>
            <FacebookIcon />
          </a>
          <a href="#" className={styles.socialLink}>
            <InstagramIcon />
          </a>
        </div>
        <div className={styles.changeLanguageButton}>Eng</div>
      </div>
      {pathname === "/" && <div className={styles.opacityBox}></div>}
    </div>
  );
}
