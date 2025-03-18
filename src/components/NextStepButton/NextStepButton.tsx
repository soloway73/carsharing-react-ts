import styles from "./NextStepButton.module.css";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { useMemo } from "react";
import { Button } from "../Button/Button";
import cn from "classnames";

interface IButtonState {
  text: string;
  handler: () => void;
  isActive: boolean;
}

export function NextStepButton() {
  const { pathname } = useLocation();
  const { city, location, model } = useSelector((s: RootState) => s.total);
  const navigate = useNavigate();

  const buttonStateReducer = useMemo(() => {
    let buttonState: IButtonState = {
      text: "Выбрать модель",
      handler: () => {},
      isActive: false,
    };
    switch (pathname) {
      case "/order/location": {
        buttonState = {
          text: "Выбрать модель",
          isActive: city && location ? true : false,
          handler: () => navigate("/order/model"),
        };
        break;
      }
      case "/order/model": {
        buttonState = {
          text: "Выбрать опции",
          isActive: model ? true : false,
          handler: () => navigate("/order/options"),
        };
        break;
      }
      default:
        break;
    }

    return (
      <Button
        className={cn({ [styles.disabled]: !buttonState.isActive })}
        onClick={() => buttonState.handler()}
        disabled={!buttonState.isActive}
      >
        {buttonState.text}
      </Button>
    );
  }, [pathname, city, location, navigate, model]);

  return buttonStateReducer;
}
