import { Button } from "../Button/Button";
import styles from "./Total.module.css";
import { TotalLine } from "./TotalLine/TotalLine";

export function Total() {
  return (
    <div className={styles.total}>
      <div className={styles.title}>Ваш заказ:</div>
      <TotalLine />
      <div className={styles.totalPrice}>
        <span className={styles.bold}>Цена:</span> от 8 000 до 12 000 ₽
      </div>
      <Button>Выбрать модель</Button>
    </div>
  );
}
