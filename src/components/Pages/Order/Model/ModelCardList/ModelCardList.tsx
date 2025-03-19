import { RootState } from "../../../../../store/store";
import { ModelCard } from "../ModelCard/ModelCard";
import styles from "./ModelCardList.module.css";
import { useSelector } from "react-redux";

export function ModelCardList() {
  const cities = useSelector((s: RootState) => s.cities);
  const totalSlice = useSelector((s: RootState) => s.total);
  const { cars } = cities;

  const filteredCars = cars.filter(
    (car) =>
      car.locationId === totalSlice.locationId &&
      (car.trim === totalSlice.trim || totalSlice.trim === "all")
  );

  return (
    <div className={styles.list}>
      {filteredCars.map((car) => (
        <ModelCard car={car} key={car.id} />
      ))}
    </div>
  );
}
