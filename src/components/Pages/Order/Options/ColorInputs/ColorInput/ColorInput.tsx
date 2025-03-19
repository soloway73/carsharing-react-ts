import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../store/store";
import { totalActions } from "../../../../../../store/total.slice";
import styles from "./ColorInput.module.css";

interface ColorInputProps {
  color: string;
}
export function ColorInput({ color }: ColorInputProps) {
  const dispatch = useDispatch<AppDispatch>();
  const totalSlice = useSelector((s: RootState) => s.total);

  const colorCheckHandler = () => {
    dispatch(totalActions.addColor(color));
  };

  const checkedHandler = () => {
    return color === totalSlice.color ? true : false;
  };

  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type="radio"
        name="carColor"
        onChange={colorCheckHandler}
        checked={checkedHandler()}
      />
      {color}
    </label>
  );
}
