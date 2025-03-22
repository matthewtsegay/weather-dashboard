import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice"; // Ensure the file exists at this path

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
