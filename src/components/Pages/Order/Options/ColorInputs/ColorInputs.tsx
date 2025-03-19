import { useSelector } from "react-redux";
import { ColorInput } from "./ColorInput/ColorInput";
import styles from "./ColorInputs.module.css";
import { RootState } from "../../../../../store/store";
export function ColorInputs() {
  const { cars } = useSelector((s: RootState) => s.cities);
  const { carId } = useSelector((s: RootState) => s.total);
  const currentCar = cars.find((car) => car.id === carId);

  return (
    <div className={styles.colorInputsWrapper}>
      Цвет
      <div className={styles.colorInputs}>
        <ColorInput color={"Любой"} />
        {currentCar?.color.map((color, index) => {
          return (
            <div key={index}>
              <ColorInput color={color} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
