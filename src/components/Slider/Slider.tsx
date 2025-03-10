import { Button } from "../Button/Button";
import styles from "./Slider.module.css";
import cn from "classnames";

const Slider: React.FC = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slideButtonLeft}>
        <img src="/vector-left.svg" alt="стрелка влево" />
      </div>
      <div className={styles.slideButtonRight}>
        <img src="/vector-right.svg" alt="стрелка вправо" />
      </div>
      <div className={styles.slides}>
        <div className={cn(styles.slide1, styles.slide)}>
          <div className={styles.slideContent}>
            <h2 className={styles.heading}>Бесплатная парковка</h2>
            <p className={styles.description}>
              Оставляйте машину на платных городских парковках и разрешенных
              местах, не нарушая ПДД, а также в аэропортах.
            </p>
            <Button>Подробнее</Button>
          </div>
        </div>
      </div>
      <div className={styles.dots}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};

export default Slider;
