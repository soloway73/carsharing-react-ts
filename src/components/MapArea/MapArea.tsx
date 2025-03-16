import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { useSelector } from "react-redux";
import config from "../../config/config.json";
import { RootState } from "../../store/store";
import styles from "./MapArea.module.css";

export function MapArea() {
  const cities = useSelector((s: RootState) => s.cities).cities;
  const cars = useSelector((s: RootState) => s.cities).cars;
  const totalSlice = useSelector((s: RootState) => s.total);
  const allCoordinatesArray = cities.map((city) =>
    city.locations.map((item) => [
      item.coordinates.lat,
      item.coordinates.lng,
      item.id,
    ])
  );
  const locationCoordinates = useSelector(
    (s: RootState) => s.total
  ).coordinates;

  const getFilteredCars = (id: number) => {
    const filteredCars = cars.filter(
      (car) => car.available === true && car.locationId === id
    );
    return filteredCars;
  };

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
          defaultOptions={{
            suppressMapOpenBlock: true,
            yandexMapDisablePoiInteractivity: true,
          }}
        >
          {allCoordinatesArray.map((coordinatesArray) => {
            return coordinatesArray.map(([lat, lng, index]) => (
              <Placemark
                key={index}
                geometry={[lat, lng]}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: "/src/assets/Circle.svg",
                  iconImageSize: [30, 30],
                  iconImageOffset: [-15, -30],
                }}
                properties={{
                  balloonContentBody: `<div class="${
                    styles.balloonContent
                  }"><div class="${styles.title}">${
                    totalSlice.name
                  }</div>${getFilteredCars(index)
                    .map(
                      (car) =>
                        `<div class="${styles.car}"><span>${car.model}</span></div>`
                    )
                    .join("")}</div>`,
                }}
                modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
              />
            ));
          })}
        </Map>
      </div>
    </YMaps>
  );
}
