import styles from "./Map.module.css";
import MapPlaceholder from "../../assets/MapPlaceholder.svg?react";

export function Map() {
  return (
    <div className={styles.map} id="map">
      Выбрать на карте:
      <MapPlaceholder />
    </div>
  );
}
