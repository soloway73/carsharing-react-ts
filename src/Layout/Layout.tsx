import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { Heading } from "../components/Heading/Heading";
import { Menu } from "../components/Menu/Menu";
import { Sidebar } from "../components/Sidebar/Sidebar";
import Slider from "../components/Slider/Slider";
import { menuSlice } from "../store/menu.slice";
import { AppDispatch, RootState } from "../store/store";
import styles from "./MainPage.module.css";
import GeoTag from "/GeoTag.svg?react";

export function MainPage() {
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const menuState = useSelector((s: RootState) => s.menu.isActive);
  const toggleMenu = () => dispatch(menuSlice.actions.toggle());

  return (
    <div className={styles.layout}>
      <Menu />
      <Sidebar />
      <div className={styles.main}>
        <header className={styles.header}>
          <div className={styles.burgerButtonWrapper} onClick={toggleMenu}>
            <div
              className={cn(styles.burgerButton, {
                [styles.burgerButtonActive]: menuState,
              })}
            ></div>
          </div>
          <Heading />
          <a href="#" className={styles.geoTag}>
            <GeoTag />
            Ульяновск
          </a>
        </header>
        <div className={styles.content}>
          <h2>Каршеринг</h2>
          <Heading />
          <p className={styles.description}>
            Поминутная аренда авто твоего города
          </p>
          <Button>Забронировать</Button>
        </div>
        <footer className={styles.footer}>
          <a href="#" className={styles.phoneNumber}>
            8 (495) 234-22-44
          </a>
          <p className={styles.copyright}>© 2016-2019 «Need for drive»</p>
        </footer>
      </div>

      {pathname === "/" && <Slider />}
    </div>
  );
}
