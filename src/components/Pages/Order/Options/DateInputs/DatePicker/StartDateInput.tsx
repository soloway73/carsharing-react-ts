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
    if (totalSlice.endDate === null) return time > currentDate;
    return time < new Date(totalSlice.endDate) && time > currentDate;
  };

  const onChangeDateFrom = (date: Date | null) => {
    if (date === null) {
      dispatch(totalActions.addStartDate(null));
      return;
    }
    dispatch(totalActions.addStartDate(date.toISOString()));
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
        timeCaption="Время"
        minDate={new Date()}
        maxDate={totalSlice.endDate ? new Date(totalSlice.endDate) : undefined}
        isClearable
        placeholderText="Ведите дату и время"
        className={styles.datePicker}
        clearButtonClassName={styles.clearButton}
      />
    </div>
  );
}
