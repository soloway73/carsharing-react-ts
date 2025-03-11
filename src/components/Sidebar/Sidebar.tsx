import { useDispatch, useSelector } from "react-redux";
import styles from "./Sidebar.module.css";
import { AppDispatch, RootState } from "../../store/store";
import { menuSlice } from "../../store/menu.slice";
import cn from "classnames";

export function Sidebar() {
  const dispatch = useDispatch<AppDispatch>();
  const menuState = useSelector((s: RootState) => s.menu.isActive);
  const toggleMenu = () => dispatch(menuSlice.actions.toggle());

  return (
    <div className={styles.sidebar}>
      <div className={styles.burgerButtonWrapper} onClick={toggleMenu}>
        <div
          className={cn(styles.burgerButton, {
            [styles.burgerButtonActive]: menuState,
          })}
        ></div>
      </div>
      <button className={styles.changeLanguageButton}>Eng</button>
    </div>
  );
}
