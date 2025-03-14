export interface Location {
  id: number;
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface City {
  id: number;
  name: string;
  locations: Location[];
}
