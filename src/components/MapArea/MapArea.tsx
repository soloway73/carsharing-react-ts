import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import config from "../../config/config.json";
//import { Location } from "../../interfaces/location.interface";
import { AppDispatch, RootState } from "../../store/store";
import styles from "./MapArea.module.css";
import { totalActions } from "../../store/total.slice";

export function MapArea() {
  // const cars = useSelector((s: RootState) => s.cities).cars;
  const cities = useSelector((s: RootState) => s.cities).cities;
  const mapRef = useRef<ymaps.Map | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const locationCoordinates = useSelector(
    (s: RootState) => s.total
  ).coordinates;
  const locationAddress = useSelector((s: RootState) => s.total).location;

  const handleBalloonClick = useCallback(
    (coords: number[], address: string) => {
      if (mapRef.current) {
        mapRef.current.panTo(coords, { duration: 1000 });
        dispatch(totalActions.addLocation(address));
      }
    },
    []
  );
  // const availableCars = (item: Location) =>
  //   cars
  //     .filter((car) => car.locationId === item.id)
  //     .map((car) => <div>{car.model}</div>);

  // const balloonLayout = (item: Location) => {
  //   return (
  // <>
  //   <div className={styles.balloonContent}>
  //     <div className={styles.title}>
  //       {item.name}
  //       <div className={styles.address}>{item.address}</div>
  //     </div>
  //     <div className={styles.availableCars}>{availableCars}</div>
  //   </div>
  // </>
  //   );
  // };

  const placemarks = useMemo(
    () =>
      cities.map((city) =>
        city.locations.map((item) => (
          <Placemark
            key={item.id}
            geometry={[item.coordinates.lat, item.coordinates.lng]}
            options={{
              iconLayout: "default#image",
              iconImageHref: "/src/assets/Circle.svg",
              iconImageSize: [30, 30],
              iconImageOffset: [-15, -30],
              balloonPane: "outerBalloon",
            }}
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            onClick={() =>
              handleBalloonClick(
                [item.coordinates.lat, item.coordinates.lng],
                item.address
              )
            }
            properties={{
              balloonContent: `<div class=${styles.balloonContent}>
                    <div class=${styles.title}>
                      ${item.name}
                      <div class=${styles.address}>${item.address}</div>
                    </div>
                  </div>`,
            }}
          />
        ))
      ),
    [cities, handleBalloonClick]
  );

  useEffect(() => {
    handleBalloonClick(locationCoordinates, locationAddress);
  }, [handleBalloonClick, locationAddress, locationCoordinates]);

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
