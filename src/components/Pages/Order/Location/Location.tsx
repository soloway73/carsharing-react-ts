import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCities } from "../../../../store/cities.slice";
import { AppDispatch, RootState } from "../../../../store/store";
import { Input } from "../../../Input/Input";
import { Map } from "../../../Map/Map";
import styles from "./Location.module.css";

export function Location() {
  const dispatch = useDispatch<AppDispatch>();
  const citiesSlice = useSelector((s: RootState) => s.cities);
  const totalSlice = useSelector((s: RootState) => s.total);

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  return (
    <div className={styles.location}>
      <div className={styles.inputs}>
        <Input
          placeholder="Введите город"
          id="city"
          label="Город"
          dropdownValues={citiesSlice.cities.map((item) => item.name)}
          appearance="city"
        />
        <Input
          placeholder="Введите адрес"
          id="location"
          label="Пункт выдачи"
          appearance="location"
          dropdownValues={citiesSlice.cities
            .find((item) => item.name === totalSlice.city)
            ?.locations.map((item) => item.name)}
        />
      </div>
      <Map />
    </div>
  );
}
