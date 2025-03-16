import styles from "./TotalLine.module.css";

export interface TotalLineProps {
  title: string;
  value: string;
}

export function TotalLine({ title, value }: TotalLineProps) {
  return (
    <div className={styles.totalLine}>
      <div className={styles.totalLineTitle}>{title}</div>
      <div className={styles.dashed}></div>
      <div className={styles.totalLineValue}>{value}</div>
    </div>
  );
}
