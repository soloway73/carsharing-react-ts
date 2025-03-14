import styles from "./TotalLine.module.css";

export function TotalLine() {
  return (
    <div className={styles.totalLine}>
      <div className={styles.totalLineTitle}>Пункт выдачи</div>
      <div className={styles.dashed}></div>
      <div className={styles.totalLineValue}>Ульяновск, Нариманова 42</div>
    </div>
  );
}
