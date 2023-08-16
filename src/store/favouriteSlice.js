import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "Favourites",
  initialState: [],
  reducers: {
    addToFavSlice(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addToFavSlice } = favouriteSlice.actions;
export default favouriteSlice.reducer;
