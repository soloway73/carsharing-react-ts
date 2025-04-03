import { useNavigate } from "react-router-dom";
import { Button } from "../../Button/Button";
import { Heading } from "../../Heading/Heading";
import styles from "./MainPage.module.css";
import { Footer } from "../../Footer/Footer";
import { useEffect } from "react";
import { totalActions } from "../../../store/total.slice";
import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

export function MainPage() {
  const navigate = useNavigate();
  const toOrder = () => navigate("/order");
  const { t } = useTranslation();

  useEffect(() => {
    totalActions.clearAll();
  }, []);

  return (
    <>
      <div className={styles.content}>
        <h2>{t("mainPage.title")}</h2>
        <Heading />
        <p className={styles.description}>{t("mainPage.description")}</p>
        <Button onClick={toOrder} className={styles.button}>
          {t("mainPage.button")}
        </Button>
      </div>
      <Footer />
    </>
  );
}
