import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CITIES_API_URL } from "../api/cityApi";
import axios from "axios";
import { CitiesResponse } from "../interfaces/location.interface";

export interface CitiesState {
  cities: CitiesResponse[] | undefined;
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

const initialState: CitiesResponse[] = [];

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCities.fulfilled, (state, action) => {
      action.payload.map((city) => state.push(city));
    });
  },
});

export default citiesSlice.reducer;
export const citiesActions = citiesSlice.actions;
