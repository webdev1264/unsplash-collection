import { createSlice } from "@reduxjs/toolkit";
import { ThemeSliceState } from "./types";

const initialState: ThemeSliceState = { theme: "theme--light" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      if (state.theme === "theme--light") {
        state.theme = "theme--dark";
      } else {
        state.theme = "theme--light";
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
