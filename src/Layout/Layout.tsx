import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Menu } from "../components/Menu/Menu";
import { Sidebar } from "../components/Sidebar/Sidebar";
import Slider from "../components/Slider/Slider";
import styles from "./Layout.module.css";

export function Layout() {
  const { pathname } = useLocation();

  return (
    <div className={styles.layout}>
      <Menu />
      <div className={styles.mainPage}>
        <Sidebar />
        <div className={styles.main}>
          <Header />
          <Outlet />
        </div>
        {pathname === "/" && <Slider />}
      </div>
    </div>
  );
}
