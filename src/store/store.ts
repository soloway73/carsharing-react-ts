import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menu.slice";
import citiesSlice from "./Location.slice";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    cities: citiesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
