import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { menuSlice } from "../../../store/menu.slice";
import { AppDispatch, RootState } from "../../../store/store";
import { Button } from "../../Button/Button";
import { Heading } from "../../Heading/Heading";
import { Menu } from "../../Menu/Menu";
import { Sidebar } from "../../Sidebar/Sidebar";
import Slider from "../../Slider/Slider";
import styles from "./MainPage.module.css";
import GeoTag from "../../../assets/GeoTag.svg?react";

export function MainPage() {
  const dispatch = useDispatch<AppDispatch>();
  const menuState = useSelector((s: RootState) => s.menu.isActive);
  const toggleMenu = () => dispatch(menuSlice.actions.toggle());

  return (
    <div className={styles.mainPage}>
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
      <Slider />
    </div>
  );
}
