import { useSelector } from "react-redux";
import { Button } from "../Button/Button";
import styles from "./Total.module.css";
import { TotalLine } from "./TotalLine/TotalLine";
import { RootState } from "../../store/store";

export function Total() {
  const totalSlice = useSelector((s: RootState) => s.total);

  return (
    <div className={styles.total}>
      <div className={styles.title}>Ваш заказ:</div>
      {totalSlice.city && totalSlice.location && (
        <TotalLine
          title={"Пункт выдачи"}
          value={totalSlice.city + ", " + totalSlice.location}
        />
      )}
      <div className={styles.totalPrice}>
        <span className={styles.bold}>Цена:</span> от 8 000 до 12 000 ₽
      </div>
      <Button>Выбрать модель</Button>
    </div>
  );
}
