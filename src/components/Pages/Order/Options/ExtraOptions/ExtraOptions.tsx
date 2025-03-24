import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import styles from "./ExtraOptions.module.css";
import { OptionsCheckbox } from "./OptionsCheckbox/OptionsCheckbox";

export function ExtraOptions() {
  const totalSlice = useSelector((s: RootState) => s.total);

  return (
    <div className={styles.extraOptions}>
      Доп услуги
      {totalSlice.options.map((option) => (
        <OptionsCheckbox option={option} key={option.id} />
      ))}
    </div>
  );
}
