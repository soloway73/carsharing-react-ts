import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../store/store";
import { totalActions } from "../../../../../../store/total.slice";
import styles from "./DateInput.module.css";
import "react-datepicker/dist/react-datepicker.css";

export function EndDateInput() {
  const totalSlice = useSelector((s: RootState) => s.total);
  const dispatch = useDispatch<AppDispatch>();

  const onChangeDateTo = (date: Date | null) => {
    if (!date) return;
    dispatch(totalActions.addEndDate(date));
  };

  const handleFilterStartPassedTime = (time: Date) => {
    const currentDate = new Date();
    if (totalSlice.startDate === null) return true;
    return time > totalSlice.startDate && time > currentDate;
  };

  return (
    <DatePicker
      selected={totalSlice.endDate}
      onChange={(date) => onChangeDateTo(date)}
      showTimeSelect
      filterTime={handleFilterStartPassedTime}
      timeFormat="HH:mm"
      timeIntervals={1}
      dateFormat="dd.MM.yyyy HH:mm"
      timeCaption="Время"
      minDate={totalSlice.startDate ? totalSlice.startDate : new Date()}
      isClearable
      placeholderText="Ведите дату и время"
      className={styles.datePicker}
    />
  );
}
