export interface Location {
  id: number;
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface CitiesResponse {
  id: number;
  name: string;
  locations: Location[];
}

export interface CarsResponse {
  id: number;
  model: string;
  year: number;
  color: string[];
  pricePerDay: number;
  available: boolean;
  cityId: number;
  locationId: number;
  imageURL: string;
  trim: "eco" | "premium";
}
