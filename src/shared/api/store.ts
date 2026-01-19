import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import asteroidReducer from "../../feauters/AsteroidPage/AsteroidSlice/asteroidSlice";

const store = configureStore({
  reducer: {
    asteroidSlice: asteroidReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;

export default store;
