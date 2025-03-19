import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../../store/store";
import { totalActions } from "../../../../../../store/total.slice";
import styles from "./ColorInput.module.css";

interface ColorInputProps {
  color: string;
  key?: number;
}
export function ColorInput({ color, key }: ColorInputProps) {
  const dispatch = useDispatch<AppDispatch>();

  const colorCheckHandler = () => {
    dispatch(totalActions.addColor(color));
  };

  return (
    <div className={styles.colorInput} key={key}>
      <label>
        <input
          type="radio"
          name="carColor"
          id="white"
          onChange={colorCheckHandler}
        />
        {color}
      </label>
    </div>
  );
}
