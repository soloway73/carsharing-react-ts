import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./Slider.module.css";
import cn from "classnames";

const Slider: React.FC = () => {
  const [sliderState, setSliderState] = useState(1);

  const handleSlideButtonRightClick = () => {
    if (sliderState === 4) {
      setSliderState(1);
    } else {
      setSliderState(sliderState + 1);
    }
  };

  const handleSlideButtonLeftClick = () => {
    if (sliderState === 1) {
      setSliderState(4);
    } else {
      setSliderState(sliderState - 1);
    }
  };

  return (
    <div className={styles.slider}>
      <button
        className={styles.slideButtonLeft}
        onClick={handleSlideButtonLeftClick}
      >
        <img src="/vector-left.svg" alt="стрелка влево" />
      </button>
      <button
        className={styles.slideButtonRight}
        onClick={handleSlideButtonRightClick}
      >
        <img src="/vector-right.svg" alt="стрелка вправо" />
      </button>
      <div className={styles.slides}>
        <div
          className={cn(styles.slide1, styles.slide, {
            [styles.active]: sliderState === 1,
          })}
        >
          <div className={styles.slideContent}>
            <h2 className={styles.heading}>Бесплатная парковка</h2>
            <p className={styles.description}>
              Оставляйте машину на платных городских парковках и разрешенных
              местах, не нарушая ПДД, а также в аэропортах.
            </p>
            <Button>Подробнее</Button>
          </div>
        </div>
        <div
          className={cn(styles.slide2, styles.slide, {
            [styles.active]: sliderState === 2,
          })}
        >
          <div className={styles.slideContent}>
            <h2 className={styles.heading}>Бесплатная парковка</h2>
            <p className={styles.description}>
              Оставляйте машину на платных городских парковках и разрешенных
              местах, не нарушая ПДД, а также в аэропортах.
            </p>
            <Button>Подробнее</Button>
          </div>
        </div>
        <div
          className={cn(styles.slide3, styles.slide, {
            [styles.active]: sliderState === 3,
          })}
        >
          <div className={styles.slideContent}>
            <h2 className={styles.heading}>Бесплатная парковка</h2>
            <p className={styles.description}>
              Оставляйте машину на платных городских парковках и разрешенных
              местах, не нарушая ПДД, а также в аэропортах.
            </p>
            <Button>Подробнее</Button>
          </div>
        </div>
        <div
          className={cn(styles.slide4, styles.slide, {
            [styles.active]: sliderState === 4,
          })}
        >
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
        <div
          onClick={() => setSliderState(1)}
          className={cn(styles.dot, { [styles.activeDot]: sliderState === 1 })}
        ></div>
        <div
          onClick={() => setSliderState(2)}
          className={cn(styles.dot, { [styles.activeDot]: sliderState === 2 })}
        ></div>
        <div
          onClick={() => setSliderState(3)}
          className={cn(styles.dot, { [styles.activeDot]: sliderState === 3 })}
        ></div>
        <div
          onClick={() => setSliderState(4)}
          className={cn(styles.dot, { [styles.activeDot]: sliderState === 4 })}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
