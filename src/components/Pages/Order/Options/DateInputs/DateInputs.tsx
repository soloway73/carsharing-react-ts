import styles from "./DateInputs.module.css";

export function DateInputs() {
  return (
    <div className={styles.dateInputs}>
      Дата аренды
      <div className={styles.dateInputsWrapper}>
        <label htmlFor="startDate" className={styles.dateLabel}>
          С
        </label>
        <input type="date" className={styles.dateInput} name="startDate" />
      </div>
      <div className={styles.dateInputsWrapper}>
        <label htmlFor="endDate" className={styles.dateLabel}>
          По
        </label>
        <input type="date" className={styles.dateInput} name="endDate" />
      </div>
    </div>
  );
}
