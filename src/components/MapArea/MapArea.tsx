import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { useSelector } from "react-redux";
import config from "../../config/config.json";
import { RootState } from "../../store/store";
import styles from "./MapArea.module.css";

export function MapArea() {
  const cities = useSelector((s: RootState) => s.cities).cities;
  const allCoordinatesArray = cities.map((city) =>
    city.locations.map((item, index) => [
      item.coordinates.lat,
      item.coordinates.lng,
      index,
    ])
  );
  const locationCoordinates = useSelector(
    (s: RootState) => s.total
  ).coordinates;

  return (
    <YMaps query={{ apikey: config.YANDEX_API_KEY }}>
      <div className={styles.mapWrapper} id="map">
        Выбрать на карте:
        <Map
          className={styles.map}
          state={{
            center: locationCoordinates,
            zoom: 15,
          }}
        >
          {allCoordinatesArray.map((coordinatesArray) => {
            return coordinatesArray.map(([lat, lng, index]) => (
              <Placemark key={index} geometry={[lat, lng]} />
            ));
          })}
        </Map>
      </div>
    </YMaps>
  );
}
