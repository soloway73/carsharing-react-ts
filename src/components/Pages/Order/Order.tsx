import { Outlet } from "react-router-dom";
import { OrderNavigate } from "../../OrderNavigate/OrderNavigate";
import { Total } from "../../Total/Total";
import styles from "./Order.module.css";
import { TotalModal } from "./TotalModal/TotalModal";

export function Order() {
  return (
    <div className={styles.order}>
      <OrderNavigate />
      <div className={styles.orderContent}>
        <Outlet />
        <Total />
      </div>
      <TotalModal />
    </div>
  );
}
