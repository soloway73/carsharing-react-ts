import styles from "./Input.module.css";

export interface InputProps {
  label: string;
  placeholder: string;
  id: string;
  dropdownValues?: string[];
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleItemClick?: (e: React.MouseEvent) => void;
  handleClear?: () => void;
}

export function Input({
  placeholder,
  id,
  label,
  dropdownValues = [],
  value = "",
  handleChange,
  handleItemClick,
  handleClear,
}: InputProps) {
  const filteredValues = dropdownValues
    .filter((item) =>
      item.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    )
    .map((item, index) => (
      <div className={styles.menuItem} key={index} onClick={handleItemClick}>
        {item}
      </div>
    ));

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
        onChange={handleChange}
        value={value}
      />
      <div className={styles.dropdownMenu}>
        {dropdownValues.length > 0 && filteredValues}
      </div>
      {value && (
        <span className={styles.clearButton} onClick={handleClear}>
          &#x2715;
        </span>
      )}
    </div>
  );
}
