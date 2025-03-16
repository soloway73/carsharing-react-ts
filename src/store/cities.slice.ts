import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CARS_API_URL, CITIES_API_URL } from "../api/cityApi";
import axios from "axios";
import { CarsResponse, CitiesResponse } from "../interfaces/location.interface";

export interface CitiesState {
  cities: CitiesResponse[] | [];
  cars: CarsResponse[] | [];
  isLoading: boolean;
}

export const getCities = createAsyncThunk<
  CitiesResponse[],
  undefined,
  { rejectValue: string }
>("order/location", async () => {
  try {
    const response = await axios.get<CitiesResponse[]>(CITIES_API_URL);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    throw error;
  }
});

export const getCars = createAsyncThunk<
  CarsResponse[],
  undefined,
  { rejectValue: string }
>("order/cars", async () => {
  try {
    const response = await axios.get<CarsResponse[]>(CARS_API_URL);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    throw error;
  }
});

const initialState: CitiesState = {
  cities: [],
  cars: [],
  isLoading: false,
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCities.fulfilled, (state, action) => {
      state.cities = action.payload;
    });
    builder.addCase(getCars.fulfilled, (state, action) => {
      state.cars = action.payload;
    });
  },
});

export default citiesSlice.reducer;
export const citiesActions = citiesSlice.actions;
