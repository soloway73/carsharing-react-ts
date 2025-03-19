import { useDispatch, useSelector } from "react-redux";
import styles from "./Tariff.module.css";
import { AppDispatch, RootState } from "../../../../../store/store";
import { totalActions } from "../../../../../store/total.slice";

export function Tariff() {
  const dispatch = useDispatch<AppDispatch>();
  const totalSlice = useSelector((s: RootState) => s.total);

  const perMinuteTariffHandler = () => {
    dispatch(totalActions.addTariff("Поминутно"));
  };
  const perDayTariffHandler = () => {
    dispatch(totalActions.addTariff("На сутки"));
  };

  const checkedHandler = () => {
    return totalSlice.tariff === "Поминутно" ? true : false;
  };

  return (
    <div className={styles.tariff}>
      Тариф
      <label>
        <input
          type="radio"
          name="tariff"
          onChange={perMinuteTariffHandler}
          checked={checkedHandler()}
        />
        Поминутно, 7₽/мин
      </label>
      <label>
        <input
          type="radio"
          name="tariff"
          onChange={perDayTariffHandler}
          checked={!checkedHandler()}
        />
        На сутки, 1999 ₽/сутки
      </label>
    </div>
  );
}
