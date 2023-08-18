import { createSlice } from "@reduxjs/toolkit";

const magnifySlice = createSlice({
  name: "magnify",
  initialState: [],
  reducers: {
    clearMag(state, action) {
      return [];
    },
    addMag(state, action) {
      state.push(action.payload);
    },
  },
});

export const { clearMag, addMag } = magnifySlice.actions;
export default magnifySlice.reducer;
