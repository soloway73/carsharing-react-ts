import { NavLink, useLocation } from "react-router-dom";
import styles from "./OrderNavigate.module.css";
import Arrow from "../../assets/Arrow.svg?react";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { totalActions } from "../../store/total.slice";
import { useEffect, useRef } from "react";
export function OrderNavigate() {
  const navRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const isActiveModel =
    pathname === "/order/model" ||
    pathname === "/order/options" ||
    pathname === "/order/summary";
  const isActiveOptions =
    pathname === "/order/options" || pathname === "/order/summary";
  const isActiveSummary = pathname === "/order/summary";

  useEffect(() => {
    if (navRef.current) {
      const activeElement = navRef.current.querySelector(
        `[data-page="${pathname}"]`
      );
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [pathname]);

  const onModelClick = () => {
    dispatch(totalActions.resetOptions());
  };

  return (
    <div className={styles.orderNavigate} ref={navRef}>
      {pathname !== "/order/summary/success" && (
        <>
          <NavLink
            data-page="/order/location"
            to="/order/location"
            className={cn(
              styles.orderNavigateItem,
              styles.orderNavigateItemActive,
              {
                [styles.currentPageLink]: pathname === "/order/location",
              }
            )}
          >
            Местоположение
          </NavLink>
          <Arrow
            className={cn({
              [styles.orderNavigateArrowActive]: isActiveModel,
            })}
          />
          <NavLink
            data-page="/order/model"
            onClick={onModelClick}
            to="/order/model"
            className={cn(styles.orderNavigateItem, {
              [styles.orderNavigateItemActive]: isActiveModel,
              [styles.currentPageLink]: pathname === "/order/model",
            })}
          >
            Модель
          </NavLink>
          <Arrow
            className={cn({
              [styles.orderNavigateArrowActive]: isActiveOptions,
            })}
          />
          <NavLink
            data-page="/order/options"
            to="/order/options"
            className={cn(styles.orderNavigateItem, {
              [styles.orderNavigateItemActive]: isActiveOptions,
              [styles.currentPageLink]: pathname === "/order/options",
            })}
          >
            Дополнительно
          </NavLink>
          <Arrow
            className={cn({
              [styles.orderNavigateArrowActive]: isActiveSummary,
            })}
          />
          <NavLink
            data-page="/order/summary"
            to="/order/summary"
            className={cn(styles.orderNavigateItem, {
              [styles.orderNavigateItemActive]: isActiveSummary,
              [styles.currentPageLink]: pathname === "/order/summary",
            })}
          >
            Итого
          </NavLink>
        </>
      )}
      {pathname === "/order/summary/success" && (
        <div className={styles.orderNum}>Заказ номер RU58491823</div>
      )}
    </div>
  );
}
