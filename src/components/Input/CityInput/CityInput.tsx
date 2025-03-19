import { useDispatch, useSelector } from "react-redux";
import { Input } from "../Input";
import { AppDispatch, RootState } from "../../../store/store";
import { totalActions } from "../../../store/total.slice";
import { useEffect, useState } from "react";

export function CityInput() {
  const dispatch = useDispatch<AppDispatch>();
  const citiesSlice = useSelector((s: RootState) => s.cities);
  const totalSlice = useSelector((s: RootState) => s.total);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    dispatch(totalActions.addCity(""));
    dispatch(totalActions.addLocation(""));
    dispatch(totalActions.addLocationId(0));
  };
  const handleClear = () => {
    setInputValue("");
    dispatch(totalActions.addCity(""));
    dispatch(totalActions.addLocation(""));
    dispatch(totalActions.addLocationId(0));
  };
  const handleItemClick = (item: string) => {
    setInputValue(item);
    dispatch(totalActions.addCity(item));
  };

  useEffect(() => {
    setInputValue(totalSlice.city);
  }, [totalSlice.city]);

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
      onItemClick={handleItemClick}
    />
  );
}
