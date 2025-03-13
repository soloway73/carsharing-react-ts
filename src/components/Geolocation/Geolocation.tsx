import styles from "./Geolocation.module.css";
import GeoTag from "../../assets/GeoTag.svg?react";

export function Geolocation() {
  return (
    <>
      <a href="#" className={styles.geoTag}>
        <GeoTag />
        Ульяновск
      </a>
    </>
  );
}
