import { ru } from "date-fns/locale/ru";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../store/store";
import { totalActions } from "../../../../../../store/total.slice";
import styles from "./DateInput.module.css";
registerLocale("ru", ru);

export function EndDateInput() {
  const totalSlice = useSelector((s: RootState) => s.total);
  const dispatch = useDispatch<AppDispatch>();

  const onChangeDateTo = (date: Date | null) => {
    if (!date) {
      dispatch(totalActions.addEndDate(null));
      return;
    }
    if (totalSlice.startDate === null) return;
    if (date < new Date(totalSlice.startDate)) {
      dispatch(totalActions.addEndDate(totalSlice.startDate));
      return;
    }
    dispatch(totalActions.addEndDate(date.toISOString()));
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

  const handleFilterStartPassedTime = (time: Date) => {
    const currentDate = new Date();
    if (totalSlice.startDate === null) return true;
    return time > new Date(totalSlice.startDate) && time > currentDate;
  };

  return (
    <div className={styles.endDateInput}>
      По
      <DatePicker
        locale="ru"
        selected={totalSlice.endDate ? new Date(totalSlice.endDate) : null}
        onChange={(date) => onChangeDateTo(date)}
        showTimeSelect
        filterTime={handleFilterStartPassedTime}
        timeFormat="HH:mm"
        timeIntervals={1}
        dateFormat="dd.MM.yyyy HH:mm"
        timeCaption="Время"
        minDate={
          totalSlice.startDate ? new Date(totalSlice.startDate) : undefined
        }
        isClearable
        placeholderText="Ведите дату и время"
        className={styles.datePicker}
        clearButtonClassName={styles.clearButton}
      />
    </div>
  );
}
