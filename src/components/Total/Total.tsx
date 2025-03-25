import { useSelector } from "react-redux";
import styles from "./Total.module.css";
import { TotalLine } from "./TotalLine/TotalLine";
import { RootState } from "../../store/store";
import { NextStepButton } from "../NextStepButton/NextStepButton";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { formatTimeDifference } from "../../store/dateFunctions";

const PRICE = {
  day: 1999,
  minute: 7,
};

export function Total() {
  const totalSlice = useSelector((s: RootState) => s.total);
  const { pathname } = useLocation();

  const totalScore = useMemo(() => {
    let score = 0;
    if (totalSlice.total) {
      score += totalSlice.total;
    }
    if (totalSlice.startDate && totalSlice.endDate) {
      if (totalSlice.tariff === "На сутки")
        score +=
          formatTimeDifference(totalSlice.startDate, totalSlice.endDate).days *
          PRICE.day;
      if (totalSlice.tariff === "Поминутно")
        score +=
          formatTimeDifference(totalSlice.startDate, totalSlice.endDate)
            .minutes * PRICE.minute;
    }
    totalSlice.options.forEach((option) => {
      if (option.isChecked) score += option.price;
    });
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
      {(pathname === "/order/options" ||
        pathname === "/order/summary" ||
        pathname === "/order/summary/success") && (
        <>
          <TotalLine title={"Цвет"} value={totalSlice.color} />
          <TotalLine title={"Тариф"} value={totalSlice.tariff} />
          {totalSlice.startDate && totalSlice.endDate && (
            <TotalLine
              title={"Длительность аренды"}
              value={rentalDurationMessage}
            />
          )}
          {totalSlice.options.map((option) => {
            if (option.isChecked && option.name)
              return (
                <TotalLine title={option.name} value={"Да"} key={option.id} />
              );
          })}
        </>
      )}
      {pathname === "/order/model" && totalSlice.total > 0 && (
        <div className={styles.totalPrice}>
          <span className={styles.bold}>Цена:</span> от {totalSlice.total} ₽
        </div>
      )}
      {(pathname === "/order/options" ||
        pathname === "/order/summary" ||
        pathname === "/order/summary/success") && (
        <div className={styles.totalPrice}>
          <span className={styles.bold}>Цена:</span> {totalScore} ₽
        </div>
      )}
      <NextStepButton />
    </div>
  );
}
