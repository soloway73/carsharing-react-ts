import styles from "./Geolocation.module.css";
import GeoTag from "../../assets/GeoTag.svg?react";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

export function Geolocation() {
  const { t } = useTranslation();

  return (
    <>
      <a href="#" className={styles.geoTag}>
        <GeoTag />
        {t("mainPage.city")}
      </a>
    </>
  );
}
