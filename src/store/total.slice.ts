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
  startDate: string;
  endDate: string;
  rentalDuration: number;
  tankful: boolean;
  babySeat: boolean;
  rightHandDrive: boolean;
  tariff: "На сутки" | "Поминутно";
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
  color: "Любой",
  startDate: "",
  endDate: "",
  rentalDuration: 0,
  tankful: false,
  babySeat: false,
  rightHandDrive: false,
  tariff: "На сутки",
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
      state.carId = action.payload.id;
    },
    addColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    addRentalDuration: (state, action: PayloadAction<number>) => {
      state.rentalDuration = action.payload;
    },
    handleTankful: (state, action: PayloadAction<boolean>) => {
      state.tankful = action.payload;
    },

    handleBabySeat: (state, action: PayloadAction<boolean>) => {
      state.babySeat = action.payload;
    },
    handleRightHandDrive: (state, action: PayloadAction<boolean>) => {
      state.rightHandDrive = action.payload;
    },
    addTariff: (state, action: PayloadAction<"На сутки" | "Поминутно">) => {
      state.tariff = action.payload;
    },
    changeTrim: (state, action: PayloadAction<"eco" | "premium" | "all">) => {
      state.trim = action.payload;
    },
  },
});

export default totalSlice.reducer;
export const totalActions = totalSlice.actions;
