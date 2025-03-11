import { Button } from "../../Button/Button";
import { Heading } from "../../Heading/Heading";
import { Menu } from "../../Menu/Menu";
import { Sidebar } from "../../Sidebar/Sidebar";
import Slider from "../../Slider/Slider";
import styles from "./MainPage.module.css";

export function MainPage() {
  return (
    <div className={styles.mainPage}>
      <Menu />
      <Sidebar />
      <div className={styles.main}>
        <header className={styles.header}>
          <div className={styles.burgerButtonWrapper}>
            <div className={styles.burgerButton}></div>
          </div>
          <Heading />
          <a href="#" className={styles.geoTag}>
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0802 8.36364C16.0802 14.0909 8.54011 19 8.54011 19C8.54011 19 1 14.0909 1 8.36364C1 6.41068 1.7944 4.53771 3.20845 3.15676C4.62249 1.77581 6.54035 1 8.54011 1C10.5399 1 12.4577 1.77581 13.8718 3.15676C15.2858 4.53771 16.0802 6.41068 16.0802 8.36364Z"
                stroke="#999999"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5401 10.8182C9.9282 10.8182 11.0535 9.71925 11.0535 8.36364C11.0535 7.00803 9.9282 5.90909 8.5401 5.90909C7.15201 5.90909 6.02673 7.00803 6.02673 8.36364C6.02673 9.71925 7.15201 10.8182 8.5401 10.8182Z"
                stroke="#999999"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
      <Slider />
    </div>
  );
}
