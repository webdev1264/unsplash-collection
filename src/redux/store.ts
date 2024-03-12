import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import themeReducer from "./theme/slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
    },
  });
};
export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;
