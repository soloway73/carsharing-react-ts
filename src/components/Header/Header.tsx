import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { menuSlice } from "../../store/menu.slice";
import { AppDispatch, RootState } from "../../store/store";
import { Geolocation } from "../Geolocation/Geolocation";
import { Heading } from "../Heading/Heading";
import styles from "./Header.module.css";

export function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const menuState = useSelector((s: RootState) => s.menu.isActive);
  const toggleMenu = () => dispatch(menuSlice.actions.toggle());
  const navigate = useNavigate();
  const toMain = () => navigate("/");
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.burgerButtonWrapper} onClick={toggleMenu}>
        <div
          className={cn(styles.burgerButton, {
            [styles.burgerButtonActive]: menuState,
          })}
        ></div>
      </div>
      <Heading onClick={toMain} />
      {pathname === "/" && <Geolocation />}
    </header>
  );
}
