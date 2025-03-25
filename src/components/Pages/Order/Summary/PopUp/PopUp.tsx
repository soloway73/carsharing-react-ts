import { useNavigate } from "react-router-dom";
import { Button } from "../../../../Button/Button";
import styles from "./PopUp.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../store/store";
import { totalActions } from "../../../../../store/total.slice";
import cn from "classnames";

export function PopUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const confirmButtonHandler = () => {
    navigate("/order/summary/success");
    dispatch(totalActions.setPopUpActive(false));
  };

  const backButtonHandler = () => {
    dispatch(totalActions.setPopUpActive(false));
  };

  return (
    <div className={styles.popUp}>
      <div className={styles.popupContent}>
        <div className={styles.popupTitle}>Подтвердить заказ</div>
        <div className={styles.popupButtons}>
          <Button
            className={cn(styles.popUpBtn, styles.confirmBtn)}
            onClick={confirmButtonHandler}
          >
            Подтвердить
          </Button>
          <Button
            className={cn(styles.popUpBtn, styles.backBtn)}
            onClick={backButtonHandler}
          >
            Вернуться
          </Button>
        </div>
      </div>
    </div>
  );
}
