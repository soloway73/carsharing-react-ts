import { useDispatch } from "react-redux";
import styles from "./Controls.module.css";
import { AppDispatch } from "../../../../../store/store";
import { totalActions } from "../../../../../store/total.slice";

export function Controls() {
  const dispatch = useDispatch<AppDispatch>();

  const allModelsCheckHandler = () => {
    dispatch(totalActions.changeTrim("all"));
  };
  const ecoCheckHandler = () => {
    dispatch(totalActions.changeTrim("eco"));
  };
  const premiumCheckHandler = () => {
    dispatch(totalActions.changeTrim("premium"));
  };
  return (
    <div className={styles.controls}>
      <div className={styles.input}>
        <input
          type="radio"
          name="carBudget"
          id="allModels"
          onChange={allModelsCheckHandler}
        />
        <label htmlFor="allModels">Все модели</label>
      </div>
      <div className={styles.input}>
        <input
          type="radio"
          name="carBudget"
          id="eco"
          onChange={ecoCheckHandler}
        />
        <label htmlFor="eco">Эконом</label>
      </div>
      <div className={styles.input}>
        <input
          type="radio"
          name="carBudget"
          id="premium"
          onChange={premiumCheckHandler}
        />
        <label htmlFor="premium">Премиум</label>
      </div>
    </div>
  );
}
