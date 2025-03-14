import { Input } from "../../../Input/Input";
import { Map } from "../../../Map/Map";
import styles from "./Location.module.css";

export function Location() {
  return (
    <div className={styles.location}>
      <div className={styles.inputs}>
        <Input placeholder="Введите город" id="location" label="Город" />
        <Input placeholder="Введите адрес" id="address" label="Пункт выдачи" />
      </div>
      <Map />
    </div>
  );
}
