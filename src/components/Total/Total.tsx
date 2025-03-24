import { useSelector } from "react-redux";
import styles from "./Total.module.css";
import { TotalLine } from "./TotalLine/TotalLine";
import { RootState } from "../../store/store";
import { NextStepButton } from "../NextStepButton/NextStepButton";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { formatTimeDifference } from "../../store/dateFunctions";

export function Total() {
  const totalSlice = useSelector((s: RootState) => s.total);
  const { pathname } = useLocation();

  const totalScore = useMemo(() => {
    let score = 0;
    if (totalSlice.total) score += totalSlice.total;
    if (totalSlice.rentalDuration) {
      if (totalSlice.tariff === "На сутки")
        score += totalSlice.rentalDuration.days * 1999;
      if (totalSlice.tariff === "Поминутно")
        score += totalSlice.rentalDuration.minutes * 7;
    }
    if (totalSlice.tankful) score += 500;
    if (totalSlice.babySeat) score += 200;
    if (totalSlice.rightHandDrive) score += 1600;
    return score;
  }, [totalSlice]);

  const rentalDurationMessage = useMemo(() => {
    if (totalSlice.startDate && totalSlice.endDate) {
      const { message } = formatTimeDifference(
        totalSlice.startDate,
        totalSlice.endDate
      );
      return message;
    } else {
      return "";
    }
  }, [totalSlice]);

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
          {totalSlice.startDate && totalSlice.endDate && (
            <TotalLine
              title={"Длительность аренды"}
              value={rentalDurationMessage}
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
          <span className={styles.bold}>Цена:</span> {totalScore} ₽
        </div>
      )}
      <NextStepButton />
    </div>
  );
}
