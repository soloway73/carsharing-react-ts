import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars, getCities } from "../../../../store/cities.slice";
import { AppDispatch, RootState } from "../../../../store/store";
import { totalActions } from "../../../../store/total.slice";
import { CityInput } from "../../../Input/CityInput/CityInput";
import { LocationInput } from "../../../Input/LocationInput/LocationInput";
import { MapArea } from "../../../MapArea/MapArea";
import styles from "./Location.module.css";

export function Location() {
  const dispatch = useDispatch<AppDispatch>();
  const citiesSlice = useSelector((s: RootState) => s.cities);
  const totalSlice = useSelector((s: RootState) => s.total);

  useEffect(() => {
    dispatch(totalActions.clearAll());
    dispatch(getCities());
    dispatch(getCars());
  }, [dispatch]);

  useEffect(() => {
    const getCoordinates = () => {
      const city = citiesSlice.cities.find(
        (item) => item.name === totalSlice.city
      );
      const location = city?.locations.find(
        (item) => item.address === totalSlice.location
      );
      if (!location) return city?.locations[0]?.coordinates;
      return location?.coordinates;
    };
    const coordinates = getCoordinates();
    if (coordinates) {
      dispatch(totalActions.addCoordinates([coordinates.lat, coordinates.lng]));
    }
  }, [totalSlice.city, totalSlice.location, dispatch, citiesSlice.cities]);

  return (
    <div className={styles.location}>
      <div className={styles.inputs}>
        <CityInput />
        <LocationInput />
      </div>
      <MapArea />
    </div>
  );
}
