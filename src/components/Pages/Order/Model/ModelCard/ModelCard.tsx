import { useDispatch, useSelector } from "react-redux";
import { CarsResponse } from "../../../../../interfaces/location.interface";
import { AppDispatch, RootState } from "../../../../../store/store";
import { totalActions } from "../../../../../store/total.slice";
import styles from "./ModelCard.module.css";
import cn from "classnames";
import carList from "./imageLinks";

interface ModelCardProps {
  car: CarsResponse;
}

export function ModelCard({ car }: ModelCardProps) {
  const { model, pricePerDay, imageURL } = car;
  const dispatch = useDispatch<AppDispatch>();
  const totalSlice = useSelector((s: RootState) => s.total);

  const isCurrentCar = totalSlice.carId === car.id;

  const handleClick = () => {
    dispatch(totalActions.addModel(car));
  };
  return (
    <div
      className={cn(styles.modelCard, {
        [styles.modelCardActive]: isCurrentCar,
      })}
      onClick={handleClick}
    >
      <div className={styles.title}>{model}</div>
      <div className={styles.price}>{pricePerDay} ₽</div>
      <img className={styles.image} src={carList[imageURL]} alt="car" />
    </div>
  );
}
