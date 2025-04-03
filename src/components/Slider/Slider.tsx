import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./Slider.module.css";
import cn from "classnames";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { ITranslationSlide } from "../../i18n/translations/TranslationTypes";

const Slider: React.FC = () => {
  const [sliderState, setSliderState] = useState(1);
  const { t } = useTranslation();

  const sliderValues: ITranslationSlide[] = t("mainPage.slider", {
    returnObjects: true,
  });

  const handleSlideButtonRightClick = () => {
    if (sliderState === sliderValues.length) {
      setSliderState(1);
    } else {
      setSliderState(sliderState + 1);
    }
  };

  const handleSlideButtonLeftClick = () => {
    if (sliderState === 1) {
      setSliderState(sliderValues.length);
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
        <div className={cn(styles[`slide${sliderState}`], styles.slide)}>
          <div className={styles.slideContent}>
            <h2 className={styles.heading}>
              {sliderValues[sliderState - 1].title}
            </h2>
            <div className={styles.description}>
              {sliderValues[sliderState - 1].description}
            </div>
            <Button>{sliderValues[sliderState - 1].button}</Button>
          </div>
        </div>
      </div>
      <div className={styles.dots}>
        {sliderValues.map((_, index) => (
          <div
            key={index}
            onClick={() => setSliderState(index + 1)}
            className={cn(styles.dot, {
              [styles.activeDot]: sliderState === index + 1,
            })}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
