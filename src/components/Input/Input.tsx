import { useDispatch, useSelector } from "react-redux";
import styles from "./Input.module.css";
import { AppDispatch, RootState } from "../../store/store";
import { totalActions } from "../../store/total.slice";

export interface InputProps {
  label: string;
  placeholder: string;
  id: string;
  dropdownValues?: string[];
  appearance?: "city" | "location";
}

export function Input({
  placeholder,
  id,
  label,
  dropdownValues = [],
  appearance,
}: InputProps) {
  const totalSlice = useSelector((s: RootState) => s.total);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (appearance === "city") {
      dispatch(totalActions.addCity(e.target.value));
    }
    if (appearance === "location") {
      dispatch(totalActions.addLocation(e.target.value));
    }
  };

  const value = appearance === "city" ? totalSlice.city : totalSlice.location;
  const handleItemClick = (item: string) => {
    if (appearance === "city") {
      dispatch(totalActions.addCity(item)); // Обновляем город
    }
    if (appearance === "location") {
      dispatch(totalActions.addLocation(item)); // Обновляем локацию
    }
  };
  const filteredValues = dropdownValues
    .filter((item) => item.includes(value))
    .map((item, index) => (
      <div
        className={styles.menuItem}
        key={index}
        onClick={() => handleItemClick(item)}
      >
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
    </div>
  );
}
