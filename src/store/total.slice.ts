import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarsResponse } from "../interfaces/location.interface";
import { formatTimeDifference, IRentalDuration } from "./dateFunctions";

export interface IOption {
  id: number;
  name: string;
  price: number;
  isChecked: boolean;
  message: string;
}

type Options = IOption[];
export interface ITotalState {
  city: string;
  location: string;
  locationId: number;
  coordinates: [number, number];
  model: string;
  carId: number;
  color: string;
  imageURL: string;
  startDate: string | null;
  endDate: string | null;
  rentalDuration: IRentalDuration | undefined;
  options: Options;
  tariff: "На сутки" | "Поминутно";
  total: number;
  trim: "eco" | "premium" | "all";
  isPopUpActive: boolean;
}

const MOCK_USLUG: Options = [
  { id: 1, name: "Полный бак", price: 500, isChecked: false, message: "100%" },
  {
    id: 2,
    name: "Детское кресло",
    price: 200,
    isChecked: false,
    message: "Да",
  },
  { id: 3, name: "Правый руль", price: 1600, isChecked: false, message: "Да" },
];

const initialState: ITotalState = {
  city: "",
  location: "",
  locationId: 0,
  coordinates: [54.32097709395514, 48.389156047245756],
  model: "",
  carId: 0,
  color: "Любой",
  imageURL: "",
  startDate: null,
  endDate: null,
  rentalDuration: undefined,
  options: MOCK_USLUG,
  tariff: "На сутки",
  total: 0,
  trim: "all",
  isPopUpActive: false,
};

export const totalSlice = createSlice({
  name: "total",
  initialState,
  reducers: {
    clearAll: () => {
      return initialState;
    },
    setPopUpActive: (state, action: PayloadAction<boolean>) => {
      state.isPopUpActive = action.payload;
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
      state.imageURL = action.payload.imageURL;
    },
    addColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    addStartDate: (state, action: PayloadAction<string | null>) => {
      state.startDate = action.payload;
    },
    addEndDate: (state, action: PayloadAction<string | null>) => {
      state.endDate = action.payload;
    },
    addRentalDuration: (state) => {
      if (!state.startDate || !state.endDate) {
        state.rentalDuration = undefined;
      }
      if (state.startDate && state.endDate) {
        state.rentalDuration = formatTimeDifference(
          state.startDate,
          state.endDate
        );
      }
    },
    addTariff: (state, action: PayloadAction<"На сутки" | "Поминутно">) => {
      state.tariff = action.payload;
    },
    changeTrim: (state, action: PayloadAction<"eco" | "premium" | "all">) => {
      state.trim = action.payload;
    },
    increaseTotal: (state, action: PayloadAction<number>) => {
      state.total = state.total + action.payload;
    },
    resetTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    toggleOption: (state, action: PayloadAction<number>) => {
      state.options.map((option) => {
        if (option.id === action.payload) option.isChecked = !option.isChecked;
      });
    },
    resetOptions: (state) => {
      state.tariff = "На сутки";
      state.options.map((option) => (option.isChecked = false));
      state.startDate = null;
      state.endDate = null;
      state.rentalDuration = undefined;
      state.color = "Любой";
    },
  },
});

export default totalSlice.reducer;
export const totalActions = totalSlice.actions;
