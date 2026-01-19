import { createSlice } from "@reduxjs/toolkit";
interface AsteroidState {
  id: string;
}
const initialState: AsteroidState = {
  id: "",
};
const asteroidSlice = createSlice({
  name: "asteroidSlice",
  initialState,
  reducers: {
    setAsteroidId: (state, action) => {
      state.id = action.payload;
    },
    removeAsteroidId: (state) => {
      state.id = "";
    },
  },
});

export const { setAsteroidId, removeAsteroidId } = asteroidSlice.actions;
export default asteroidSlice.reducer;
