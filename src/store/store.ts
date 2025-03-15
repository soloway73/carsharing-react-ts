import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menu.slice";
import citiesSlice from "./cities.slice";
import totalSlice from "./total.slice";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    cities: citiesSlice,
    total: totalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
