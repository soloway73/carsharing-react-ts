import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITotalState {
  city: string;
  location: string;
  coordinates: [number, number];
  model: string;
  color: string;
  rentalDuration: number;
  tankful: boolean;
  babySeat: boolean;
  rightHandDrive: boolean;
  tariff: string;
  total: number;
}

const initialState: ITotalState = {
  city: "",
  location: "",
  coordinates: [54.32097709395514, 48.389156047245756],
  model: "",
  color: "",
  rentalDuration: 0,
  tankful: false,
  babySeat: false,
  rightHandDrive: false,
  tariff: "",
  total: 0,
};

export const totalSlice = createSlice({
  name: "total",
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    addLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    addCoordinates: (state, action: PayloadAction<[number, number]>) => {
      state.coordinates = action.payload;
    },
    addModel: (state, action: PayloadAction<string>) => {
      state.model = action.payload;
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
  },
});

export default totalSlice.reducer;
export const totalActions = totalSlice.actions;
