import { NavLink, useLocation } from "react-router-dom";
import styles from "./OrderNavigate.module.css";
import Arrow from "../../assets/Arrow.svg?react";
import cn from "classnames";
export function OrderNavigate() {
  const { pathname } = useLocation();
  const isActiveLocation =
    pathname === "/order/location" ||
    pathname === "/order/model" ||
    pathname === "/order/options" ||
    pathname === "/order/summary";
  const isActiveModel =
    pathname === "/order/model" ||
    pathname === "/order/options" ||
    pathname === "/order/summary";
  const isActiveOptions =
    pathname === "/order/options" || pathname === "/order/summary";
  const isActiveSummary = pathname === "/order/summary";

  return (
    <div className={styles.orderNavigate}>
      <NavLink
        to="/order/location"
        className={cn(styles.orderNavigateItem, {
          [styles.orderNavigateItemActive]: isActiveLocation,
        })}
      >
        Местоположение
      </NavLink>
      <Arrow
        className={cn({ [styles.orderNavigateArrowActive]: isActiveModel })}
      />
      <NavLink
        to="/order/model"
        className={cn(styles.orderNavigateItem, {
          [styles.orderNavigateItemActive]: isActiveModel,
        })}
      >
        Модель
      </NavLink>
      <Arrow
        className={cn({ [styles.orderNavigateArrowActive]: isActiveOptions })}
      />
      <NavLink
        to="/order/options"
        className={cn(styles.orderNavigateItem, {
          [styles.orderNavigateItemActive]: isActiveOptions,
        })}
      >
        Дополнительно
      </NavLink>
      <Arrow
        className={cn({ [styles.orderNavigateArrowActive]: isActiveSummary })}
      />
      <NavLink
        to="/order/summary"
        className={cn(styles.orderNavigateItem, {
          [styles.orderNavigateItemActive]: isActiveSummary,
        })}
      >
        Итого
      </NavLink>
    </div>
  );
}
