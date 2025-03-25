import { useDispatch } from "react-redux";
import { IOption, totalActions } from "../../../../../../store/total.slice";
import { AppDispatch } from "../../../../../../store/store";

export function OptionsCheckbox({ option }: { option: IOption }) {
  const dispatch = useDispatch<AppDispatch>();
  const onChangeHandler = () => {
    dispatch(totalActions.toggleOption(option.id));
  };
  return (
    <label>
      <input
        type="checkbox"
        checked={option.isChecked}
        onChange={onChangeHandler}
      />
      {option.name}, {option.price}р
    </label>
  );
}
