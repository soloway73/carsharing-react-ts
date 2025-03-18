import { useDispatch, useSelector } from "react-redux";
import { Input } from "../Input";
import { AppDispatch, RootState } from "../../../store/store";
import { totalActions } from "../../../store/total.slice";
import { useState } from "react";

export function CityInput() {
  const dispatch = useDispatch<AppDispatch>();
  const citiesSlice = useSelector((s: RootState) => s.cities);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    dispatch(totalActions.addCity(""));
    dispatch(totalActions.addLocation(""));
  };
  const handleClear = () => {
    setInputValue("");
    dispatch(totalActions.addCity(""));
    dispatch(totalActions.addLocation(""));
  };
  const handleItemClick = (item: string) => {
    // setInputValue(e.currentTarget.textContent as string);
    // dispatch(totalActions.addCity(e.currentTarget.textContent as string));
    setInputValue(item);
    dispatch(totalActions.addCity(item));
  };
  const filteredCities = citiesSlice.cities
    .map((item) => item.name)
    .filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()));
  return (
    <Input
      placeholder="Введите город"
      id="city"
      name="city"
      label="Город"
      value={inputValue}
      filteredValues={filteredCities}
      onClear={handleClear}
      onInput={handleChange}
      // onChange={handleChange}
      onItemClick={handleItemClick}
    />
  );
}
