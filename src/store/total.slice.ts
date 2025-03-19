import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarsResponse } from "../interfaces/location.interface";

export interface ITotalState {
  city: string;
  location: string;
  locationId: number;
  coordinates: [number, number];
  model: string;
  carId: number;
  color: string;
  rentalDuration: number;
  tankful: boolean;
  babySeat: boolean;
  rightHandDrive: boolean;
  tariff: string;
  total: number;
  trim: "eco" | "premium" | "all";
}

const initialState: ITotalState = {
  city: "",
  location: "",
  locationId: 0,
  coordinates: [54.32097709395514, 48.389156047245756],
  model: "",
  carId: 0,
  color: "",
  rentalDuration: 0,
  tankful: false,
  babySeat: false,
  rightHandDrive: false,
  tariff: "",
  total: 0,
  trim: "all",
};

export const totalSlice = createSlice({
  name: "total",
  initialState,
  reducers: {
    clearAll: () => {
      return initialState;
    },

    addCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    addLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    addLocationId: (state, action: PayloadAction<number>) => {
      state.locationId = action.payload;
    },
    addCoordinates: (state, action: PayloadAction<[number, number]>) => {
      state.coordinates = action.payload;
    },
    addModel: (state, action: PayloadAction<CarsResponse>) => {
      state.model = action.payload.model;
      state.total = action.payload.pricePerDay;
      state.color = action.payload.color;
      state.carId = action.payload.id;
    },
    addColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    addRentalDuration: (state, action: PayloadAction<number>) => {
      state.rentalDuration = action.payload;
    },
    addTankful: (state) => {
      state.tankful = true;
    },
    removeTankful: (state) => {
      state.tankful = false;
    },
    addBabySeat: (state) => {
      state.babySeat = true;
    },
    removeBabySeat: (state) => {
      state.babySeat = false;
    },
    addRightHandDrive: (state) => {
      state.rightHandDrive = true;
    },
    removeRightHandDrive: (state) => {
      state.rightHandDrive = false;
    },
    addTariff: (state, action: PayloadAction<string>) => {
      state.tariff = action.payload;
    },
    changeTrim: (state, action: PayloadAction<"eco" | "premium" | "all">) => {
      state.trim = action.payload;
    },
  },
});

export default totalSlice.reducer;
export const totalActions = totalSlice.actions;
