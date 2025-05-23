import cn from "classnames";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { totalActions } from "../../store/total.slice";
import { Button } from "../Button/Button";
import styles from "./NextStepButton.module.css";

interface IButtonState {
  text: string;
  handler: () => void;
  isActive: boolean;
}

export function NextStepButton() {
  const { pathname } = useLocation();
  const { city, location, model, startDate, endDate } = useSelector(
    (s: RootState) => s.total
  );
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

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
      case "/order/options": {
        buttonState = {
          text: "Итого",
          isActive: startDate && endDate ? true : false,
          handler: () => navigate("/order/summary"),
        };
        break;
      }
      case "/order/summary": {
        buttonState = {
          text: "Заказать",
          isActive: true,
          handler: () => dispatch(totalActions.setPopUpActive(true)),
        };
        break;
      }
      case "/order/summary/success": {
        buttonState = {
          text: "Отменить",
          isActive: true,
          handler: () => navigate("/order/summary"),
        };
        break;
      }
      default:
        break;
    }

    return (
      <Button
        className={cn(styles.nextStepButton, {
          [styles.disabled]: !buttonState.isActive,
          [styles.redBtn]: pathname === "/order/summary/success",
        })}
        onClick={() => buttonState.handler()}
        disabled={!buttonState.isActive}
      >
        {buttonState.text}
      </Button>
    );
  }, [pathname, city, location, navigate, model, startDate, endDate, dispatch]);

  return buttonStateReducer;
}
