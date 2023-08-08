import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "Favourites",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
  },
});

export const { add } = favouriteSlice.actions;
export default favouriteSlice.reducer;
