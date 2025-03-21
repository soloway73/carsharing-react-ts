import { ru } from "date-fns/locale/ru";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../store/store";
import { totalActions } from "../../../../../../store/total.slice";
import styles from "./DateInput.module.css";

registerLocale("ru", ru);
export function StartDateInput() {
  const totalSlice = useSelector((s: RootState) => s.total);
  const dispatch = useDispatch<AppDispatch>();

  const handleFilterStartPassedTime = (time: Date) => {
    const currentDate = new Date();
    // if (totalSlice.startDate === null) return true;
    return time > currentDate;
  };

  const onChangeDateFrom = (date: Date | null) => {
    if (date === null) {
      dispatch(totalActions.addStartDate(null));
      dispatch(totalActions.addEndDate(null));
      return;
    }
    dispatch(totalActions.addStartDate(date.toISOString()));
    const probablyEndDate = new Date(date.getTime() + 15 * 60 * 1000);
    dispatch(totalActions.addEndDate(probablyEndDate.toISOString()));
    dispatch(totalActions.addRentalDuration());
    if (totalSlice.rentalDuration) {
      if (totalSlice.tariff === "Поминутно") {
        dispatch(
          totalActions.increaseTotal(totalSlice.rentalDuration.minutes * 7)
        );
      }
      if (totalSlice.tariff === "На сутки") {
        dispatch(
          totalActions.increaseTotal(totalSlice.rentalDuration.days * 1999)
        );
      }
    }
  };

  return (
    <div className={styles.startDateInput}>
      C
      <DatePicker
        locale="ru"
        selected={totalSlice.startDate ? new Date(totalSlice.startDate) : null}
        onChange={(date) => onChangeDateFrom(date)}
        showTimeSelect
        filterTime={handleFilterStartPassedTime}
        timeFormat="HH:mm"
        timeIntervals={1}
        dateFormat="dd.MM.yyyy HH:mm"
        timeCaption="time"
        minDate={new Date()}
        isClearable
        placeholderText="Ведите дату и время"
        className={styles.datePicker}
        clearButtonClassName={styles.clearButton}
      />
    </div>
  );
}
