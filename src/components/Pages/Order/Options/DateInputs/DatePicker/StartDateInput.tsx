import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../store/store";
import { totalActions } from "../../../../../../store/total.slice";
import styles from "./DateInput.module.css";
import "react-datepicker/dist/react-datepicker.css";

export function StartDateInput() {
  const totalSlice = useSelector((s: RootState) => s.total);
  const dispatch = useDispatch<AppDispatch>();

  const onChangeDateFrom = (date: Date | null) => {
    if (!date) return;
    dispatch(totalActions.addStartDate(date));
  };

  return (
    <DatePicker
      selected={totalSlice.startDate}
      onChange={(date) => onChangeDateFrom(date)}
      showTimeSelect
      //filterTime={handleFilterStartPassedTime}
      timeFormat="HH:mm"
      timeIntervals={1}
      dateFormat="dd.MM.yyyy HH:mm"
      timeCaption="time"
      minDate={new Date()}
      isClearable
      placeholderText="Ведите дату и время"
      className={styles.datePicker}
    />
  );
}
