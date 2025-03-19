import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import config from "../../config/config.json";
//import { Location } from "../../interfaces/location.interface";
import { AppDispatch, RootState } from "../../store/store";
import { totalActions } from "../../store/total.slice";
import styles from "./MapArea.module.css";
import сircleSVG from "../../assets/сircle.svg";

export function MapArea() {
  const { cities } = useSelector((s: RootState) => s.cities);
  const mapRef = useRef<ymaps.Map | null>(null);
  const { cars } = useSelector((s: RootState) => s.cities);
  const dispatch = useDispatch<AppDispatch>();

  const locationCoordinates = useSelector(
    (s: RootState) => s.total
  ).coordinates;

  const handleBalloonClick = useCallback(
    (coords: number[], address: string, city: string) => {
      if (mapRef.current) {
        mapRef.current.panTo(coords, { duration: 1000 });
        dispatch(totalActions.addCity(city));
        dispatch(totalActions.addLocation(address));
      }
    },
    [dispatch]
  );

  const changeCoordinates = useCallback((coords: number[]) => {
    if (mapRef.current) {
      mapRef.current.panTo(coords, { duration: 1000 });
    }
  }, []);

  const placemarks = useMemo(
    () =>
      cities.map((city) =>
        city.locations.map((item) => {
          const availableCars = cars
            .filter(
              (car) => car.locationId === item.id && car.available === true
            )
            .map((car) => car.model);
          return (
            <Placemark
              key={item.id}
              geometry={[item.coordinates.lat, item.coordinates.lng]}
              options={{
                iconLayout: "default#image",
                iconImageHref: сircleSVG,
                iconImageSize: [30, 30],
                iconImageOffset: [-15, -30],
                balloonPane: "outerBalloon",
              }}
              modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
              onClick={() =>
                handleBalloonClick(
                  [item.coordinates.lat, item.coordinates.lng],
                  item.address,
                  city.name
                )
              }
              properties={{
                balloonContent: `<div class=${styles.balloonContent}>
                    <div class=${styles.title}>
                      ${item.name}
                      <div class=${styles.address}>${item.address}</div>
                    </div>
                    <div class=${
                      styles.availableCars
                    }>Доступные автомобили: ${availableCars.join(", ")}</div>
                  </div>`,
              }}
            />
          );
        })
      ),
    [cars, cities, handleBalloonClick]
  );

  useEffect(() => {
    changeCoordinates(locationCoordinates);
  }, [changeCoordinates, locationCoordinates]);

  return (
    <YMaps query={{ apikey: config.YANDEX_API_KEY }}>
      <div className={styles.mapWrapper} id="map">
        Выбрать на карте:
        <Map
          defaultState={{ center: [55.751244, 37.618423], zoom: 15 }}
          className={styles.map}
          instanceRef={(ref) => (mapRef.current = ref)}
          defaultOptions={{
            suppressMapOpenBlock: true,
            yandexMapDisablePoiInteractivity: true,
          }}
        >
          {placemarks}
        </Map>
      </div>
    </YMaps>
  );
}
