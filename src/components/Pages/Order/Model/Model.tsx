import { ModelCard } from "./ModelCard/ModelCard";
import styles from "./Model.module.css";

export function Model() {
  return (
    <div className={styles.model}>
      test
      <ModelCard title="Toyota Camry" price={10000} image="car1.png" />
      <img src={"../../../../../assets/car1.png"} alt="213" />
    </div>
  );
}
