import { useDispatch, useSelector } from "react-redux";
import styles from "./ExtraOptions.module.css";
import { AppDispatch, RootState } from "../../../../../store/store";
import { totalActions } from "../../../../../store/total.slice";

export function ExtraOptions() {
  const dispatch = useDispatch<AppDispatch>();
  const totalSlice = useSelector((s: RootState) => s.total);

  const tankfulHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(totalActions.handleTankful(true));
    } else {
      dispatch(totalActions.handleTankful(false));
    }
  };

  const checkedTankfulHandler = () => {
    return totalSlice.tankful ? true : false;
  };

  const babySeatHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(totalActions.handleBabySeat(true));
    } else {
      dispatch(totalActions.handleBabySeat(false));
    }
  };

  const checkedBabySeatHandler = () => {
    return totalSlice.babySeat ? true : false;
  };

  const rightHandDriveHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(totalActions.handleRightHandDrive(true));
    } else {
      dispatch(totalActions.handleRightHandDrive(false));
    }
  };

  const checkedRightHandDriveHandler = () => {
    return totalSlice.rightHandDrive ? true : false;
  };

  return (
    <div className={styles.extraOptions}>
      Доп услуги
      <label>
        <input
          type="checkbox"
          checked={checkedTankfulHandler()}
          onChange={tankfulHandler}
        />
        Полный бак, 500р
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkedBabySeatHandler()}
          onChange={babySeatHandler}
        />
        Детское кресло, 200р
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkedRightHandDriveHandler()}
          onChange={rightHandDriveHandler}
        />
        Правый руль, 1600р
      </label>
    </div>
  );
}
