import { Button } from "../../Button/Button";
import { Heading } from "../../Heading/Heading";
import { Sidebar } from "../../Sidebar/Sidebar";
import styles from "./MainPage.module.css";

export function MainPage() {
  return (
    <div className={styles.mainPage}>
      <Sidebar />
      <div className={styles.main}>
        <header className={styles.header}>
          <div className={styles.burgerButtonWrapper}>
            <div className={styles.burgerButton}></div>
          </div>
          <Heading />
          <a href="#" className={styles.geoTag}>
            <img src="/geo-tag.svg" alt="иконка геопозиции" />
            Ульяновск
          </a>
        </header>
        <div className={styles.content}>
          <h2>Каршеринг</h2>
          <Heading />
          <p className={styles.description}>
            Поминутная аренда авто твоего города
          </p>
          <Button>Забронировать</Button>
        </div>
        <footer className={styles.footer}>
          <a href="#" className={styles.phoneNumber}>
            8 (495) 234-22-44
          </a>
          <p className={styles.copyright}>© 2016-2019 «Need for drive»</p>
        </footer>
      </div>
    </div>
  );
}
