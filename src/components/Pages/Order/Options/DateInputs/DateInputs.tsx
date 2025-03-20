import styles from "./DateInputs.module.css";
//import { DateInput } from "./DatePicker/DateInput";

export function DateInputs() {
  //const today = new Date();
  return (
    <div className={styles.dateInputs}>
      Дата аренды
      {/* <DateInput /> */}
      <div className={styles.dateInputsWrapper}>
        <label htmlFor="startDate" className={styles.dateLabel}>
          С
        </label>
        <input
          type="datetime-local"
          className={styles.dateInput}
          name="startDate"
          min="2024-10-20T14:30"
        />
      </div>
      <div className={styles.dateInputsWrapper}>
        <label htmlFor="endDate" className={styles.dateLabel}>
          По
        </label>
        <input
          type="datetime-local"
          className={styles.dateInput}
          name="endDate"
        />
      </div>
    </div>
  );
}
