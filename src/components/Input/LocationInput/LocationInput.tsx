import { useDispatch, useSelector } from "react-redux";
import { Input } from "../Input";
import { AppDispatch, RootState } from "../../../store/store";
import { totalActions } from "../../../store/total.slice";

export function LocationInput() {
  const dispatch = useDispatch<AppDispatch>();
  const citiesSlice = useSelector((s: RootState) => s.cities);
  const totalSlice = useSelector((s: RootState) => s.total);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(totalActions.addLocation(e.target.value));
  };
  const handleClear = () => {
    dispatch(totalActions.addLocation(""));
  };
  const handleItemClick = (e: React.MouseEvent) => {
    dispatch(totalActions.addLocation(e.currentTarget.textContent as string));
  };

  const filteredLocations = citiesSlice.cities
    .find((item) => item.name === totalSlice.city)
    ?.locations.map((item) => item.address)
    .filter((item) =>
      item.toLowerCase().includes(totalSlice.location.toLowerCase())
    );

  return (
    <Input
      placeholder="Введите адрес"
      id="location"
      name="location"
      label="Пункт выдачи"
      value={totalSlice.location}
      filteredValues={filteredLocations}
      onClear={handleClear}
      onChange={handleChange}
      onInput={(e) => console.log(" :>> ", e)}
      onItemClick={handleItemClick}
    />
  );
}
