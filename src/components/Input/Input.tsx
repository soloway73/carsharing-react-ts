import styles from "./Input.module.css";
export interface InputProps {
  label: string;
  placeholder: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function Input({ placeholder, id, label, onChange }: InputProps) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        id={id}
        name={id}
        onChange={onChange}
      />
    </div>
  );
}
