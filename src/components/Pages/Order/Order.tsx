import { Outlet } from "react-router-dom";
import { OrderNavigate } from "../../OrderNavigate/OrderNavigate";
import styles from "./Order.module.css";

export function Order() {
  return (
    <div className={styles.order}>
      <OrderNavigate />
      <div className={styles.orderContent}>
        <Outlet />
      </div>
    </div>
  );
}
