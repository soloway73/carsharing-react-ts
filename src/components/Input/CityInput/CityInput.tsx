import { useDispatch, useSelector } from "react-redux";
import { Input } from "../Input";
import { AppDispatch, RootState } from "../../../store/store";
import { totalActions } from "../../../store/total.slice";

export function CityInput() {
  const dispatch = useDispatch<AppDispatch>();
  const citiesSlice = useSelector((s: RootState) => s.cities);
  const totalSlice = useSelector((s: RootState) => s.total);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(totalActions.addCity(e.target.value));
  };
  const handleClear = () => {
    dispatch(totalActions.addCity(""));
    dispatch(totalActions.addLocation(""));
  };
  const handleItemClick = (e: React.MouseEvent) => {
    dispatch(totalActions.addCity(e.currentTarget.textContent as string));
  };

  return (
    <Input
      placeholder="Введите город"
      id="city"
      label="Город"
      value={totalSlice.city}
      dropdownValues={citiesSlice.cities.map((item) => item.name)}
      handleClear={handleClear}
      handleChange={handleChange}
      handleItemClick={handleItemClick}
    />
  );
}
