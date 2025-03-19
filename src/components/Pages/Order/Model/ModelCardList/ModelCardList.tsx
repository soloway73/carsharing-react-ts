import { RootState } from "../../../../../store/store";
import { ModelCard } from "../ModelCard/ModelCard";
import styles from "./ModelCardList.module.css";
import { useSelector } from "react-redux";

export function ModelCardList() {
  const cities = useSelector((s: RootState) => s.cities);
  const totalSlice = useSelector((s: RootState) => s.total);
  const { cars } = cities;

  const filteredCars = cars.filter(
    (car) => car.locationId === totalSlice.locationId
  );

  return (
    <div className={styles.list}>
      {filteredCars.map((car) => (
        <ModelCard
          key={car.id}
          title={car.model}
          price={car.pricePerDay}
          image={car.imageURL}
        />
      ))}
    </div>
  );
}
