import { useDispatch, useSelector } from "react-redux";
import { Input } from "../Input";
import { AppDispatch, RootState } from "../../../store/store";
import { totalActions } from "../../../store/total.slice";
import { useEffect, useState } from "react";

export function LocationInput() {
  const dispatch = useDispatch<AppDispatch>();
  const citiesSlice = useSelector((s: RootState) => s.cities);
  const totalSlice = useSelector((s: RootState) => s.total);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    dispatch(totalActions.addLocation(""));
  };
  const handleClear = () => {
    setInputValue("");
    dispatch(totalActions.addLocation(""));
  };
  const handleItemClick = (item: string) => {
    // setInputValue(e.currentTarget.textContent as string);
    // dispatch(totalActions.addLocation(e.currentTarget.textContent as string));
    setInputValue(item);
    dispatch(totalActions.addLocation(item));
  };

  const filteredLocations = citiesSlice.cities
    .find((item) => item.name === totalSlice.city)
    ?.locations.map((item) => item.address)
    .filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()));

  useEffect(() => {
    if (totalSlice.city === "") {
      setInputValue("");
    }
  }, [totalSlice.city]);

  return (
    <Input
      placeholder="Введите адрес"
      id="location"
      name="location"
      label="Пункт выдачи"
      value={inputValue}
      filteredValues={filteredLocations}
      onClear={handleClear}
      // onChange={handleChange}
      onInput={handleChange}
      onItemClick={handleItemClick}
    />
  );
}
