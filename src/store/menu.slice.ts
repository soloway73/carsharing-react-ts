import { createSlice } from "@reduxjs/toolkit";

export interface IMenuState {
  isActive: boolean;
}
const initialState: IMenuState = {
  isActive: false,
};
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export default menuSlice.reducer;
export const menuActions = menuSlice.actions;
