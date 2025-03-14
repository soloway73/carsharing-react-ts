import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { OrderNavigate } from "../../OrderNavigate/OrderNavigate";
import { Total } from "../../Total/Total";
import styles from "./Order.module.css";
import { useEffect } from "react";

export function Order() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/order") {
      navigate("/order/location");
    }
  }, [navigate, pathname]);

  return (
    <div className={styles.order}>
      <OrderNavigate />
      <div className={styles.orderContent}>
        <Outlet />
        <Total />
      </div>
    </div>
  );
}
