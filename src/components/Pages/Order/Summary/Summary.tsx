import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../../../store/store";
import carList from "../Model/ModelCard/imageLinks";
import { PopUp } from "./PopUp/PopUp";
import styles from "./Summary.module.css";

export function Summary() {
  const {
    location,
    carId,
    model,
    startDate,
    imageURL,
    options,
    isPopUpActive,
  } = useSelector((s: RootState) => s.total);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const availabilityDate = () => {
    if (startDate) {
      return new Date(startDate).toLocaleString("ru", {
        day: "numeric",
        month: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
    } else {
      return "Ошибка даты. Обратитесь к администратору.";
    }
  };

  useEffect(() => {
    if (!location || !carId) {
      navigate("/order/location");
    }
  }, [carId, location, navigate]);

  return (
    <div className={styles.summary}>
      <div className={styles.orderDetails}>
        <div className={styles.carModel}>{model}</div>
        <div className={styles.carPlate}>K 761 HA 73</div>
        {options.map((option) => {
          if (option.isChecked) {
            return (
              <div className={styles.fuelLevel} key={option.id}>
                {option.name} <span>{option.message}</span>
              </div>
            );
          }
        })}
        <div className={styles.availability}>
          Доступна с <span>{availabilityDate()}</span>
        </div>
      </div>
      <div className={styles.carImage}>
        <img src={carList[imageURL]} alt="автомобиль" />
      </div>
      {isPopUpActive && pathname === "/order/summary" && <PopUp />}
    </div>
  );
}
