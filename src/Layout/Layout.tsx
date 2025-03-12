import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import GeoTag from "../assets/GeoTag.svg?react";
import { Heading } from "../components/Heading/Heading";
import { Menu } from "../components/Menu/Menu";
import { Sidebar } from "../components/Sidebar/Sidebar";
import Slider from "../components/Slider/Slider";
import { menuSlice } from "../store/menu.slice";
import { AppDispatch, RootState } from "../store/store";
import styles from "./Layout.module.css";

export function Layout() {
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const menuState = useSelector((s: RootState) => s.menu.isActive);
  const toggleMenu = () => dispatch(menuSlice.actions.toggle());

  return (
    <div className={styles.layout}>
      <Menu />
      <div className={styles.mainPage}>
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
          <Outlet />
        </div>
        {pathname === "/" && <Slider />}
      </div>
    </div>
  );
}
