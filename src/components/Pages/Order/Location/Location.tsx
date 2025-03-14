import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCities } from "../../../../store/Location.slice";
import { AppDispatch, RootState } from "../../../../store/store";
import { Input } from "../../../Input/Input";
import { Map } from "../../../Map/Map";
import styles from "./Location.module.css";

export function Location() {
  const dispatch = useDispatch<AppDispatch>();
  const citiesSlice = useSelector((s: RootState) => s.cities);

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  console.log(citiesSlice);

  return (
    <div className={styles.location}>
      <div className={styles.inputs}>
        <Input
          placeholder="Введите город"
          id="location"
          label="Город"
          dropdownValues={citiesSlice.cities.map((item) => item.name)}
        />
        <Input placeholder="Введите адрес" id="address" label="Пункт выдачи" />
      </div>
      <Map />
    </div>
  );
}
