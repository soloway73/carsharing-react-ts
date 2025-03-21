import styles from "./DateInputs.module.css";
import { EndDateInput } from "./DatePicker/EndDateInput";
import { StartDateInput } from "./DatePicker/StartDateInput";

export function DateInputs() {
  return (
    <div className={styles.dateInputs}>
      Дата аренды
      <StartDateInput />
      <EndDateInput />
    </div>
  );
}
