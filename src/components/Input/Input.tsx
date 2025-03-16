import { InputHTMLAttributes, useMemo } from "react";
import styles from "./Input.module.css";

export interface InputProps {
  label: string;
  filteredValues?: string[];
  onItemClick?: (e: React.MouseEvent) => void;
  onClear?: () => void;
}

export function Input({
  placeholder,
  id,
  label,
  name,
  filteredValues = [],
  value = "",
  onChange,
  onItemClick,
  onClear,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & InputProps) {
  const items = useMemo(
    () =>
      filteredValues.map((item, index) => (
        <div className={styles.menuItem} key={index} onClick={onItemClick}>
          {item}
        </div>
      )),
    [filteredValues, onItemClick]
  );

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
        name={name}
        onChange={onChange}
        value={value}
        {...props}
      />
      <div className={styles.dropdownMenu}>{items.length > 0 && items}</div>
      {value && (
        <span className={styles.clearButton} onClick={onClear}>
          &#x2715;
        </span>
      )}
    </div>
  );
}
