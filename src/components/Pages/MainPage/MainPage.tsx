import { useNavigate } from "react-router-dom";
import { Button } from "../../Button/Button";
import { Heading } from "../../Heading/Heading";
import styles from "./MainPage.module.css";

export function MainPage() {
  const navigate = useNavigate();
  const toOrder = () => navigate("/order");
  return (
    <>
      <div className={styles.content}>
        <h2>Каршеринг</h2>
        <Heading />
        <p className={styles.description}>
          Поминутная аренда авто твоего города
        </p>
        <Button onClick={toOrder}>Забронировать</Button>
      </div>
      <footer className={styles.footer}>
        <a href="#" className={styles.phoneNumber}>
          8 (495) 234-22-44
        </a>
        <p className={styles.copyright}>© 2016-2019 «Need for drive»</p>
      </footer>
    </>
  );
}
