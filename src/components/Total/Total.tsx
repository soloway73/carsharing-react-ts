import { useSelector } from "react-redux";
import styles from "./Total.module.css";
import { TotalLine } from "./TotalLine/TotalLine";
import { RootState } from "../../store/store";
import { NextStepButton } from "../NextStepButton/NextStepButton";
import { useLocation } from "react-router-dom";

export function Total() {
  const totalSlice = useSelector((s: RootState) => s.total);
  const { pathname } = useLocation();

  return (
    <div className={styles.total}>
      <div className={styles.title}>Ваш заказ:</div>
      {totalSlice.city && totalSlice.location && (
        <TotalLine
          title={"Пункт выдачи"}
          value={totalSlice.city + ", " + totalSlice.location}
        />
      )}
      {totalSlice.model && (
        <TotalLine title={"Модель"} value={totalSlice.model} />
      )}
      {(pathname === "/order/options" || pathname === "/order/summary") && (
        <>
          <TotalLine title={"Цвет"} value={totalSlice.color} />
          <TotalLine title={"Тариф"} value={totalSlice.tariff} />
          {totalSlice.rentalDuration && (
            <TotalLine
              title={"Длительность аренды"}
              value={totalSlice.rentalDuration?.message}
            />
          )}
          {totalSlice.tankful && (
            <TotalLine title={"Полный бак"} value={"Да"} />
          )}
          {totalSlice.babySeat && (
            <TotalLine title={"Детское кресло"} value={"Да"} />
          )}
          {totalSlice.rightHandDrive && (
            <TotalLine title={"Правый руль"} value={"Да"} />
          )}
        </>
      )}
      {pathname === "/order/model" && totalSlice.total > 0 && (
        <div className={styles.totalPrice}>
          <span className={styles.bold}>Цена:</span> от {totalSlice.total} ₽
        </div>
      )}
      {(pathname === "/order/options" || pathname === "/order/summary") && (
        <div className={styles.totalPrice}>
          <span className={styles.bold}>Цена:</span> {totalSlice.total} ₽
        </div>
      )}
      <NextStepButton />
    </div>
  );
}
