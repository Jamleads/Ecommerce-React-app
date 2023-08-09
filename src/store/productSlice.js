import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "Producs",
  initialState,
  reducers: {
    // fetchProduct(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { fetchProduct } = productSlice.actions;
export default productSlice.reducer;

// Fetching the data with redux async
export const getProducts = createAsyncThunk("product/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
});

// export function getProducts() {
//   return async function getProductThunk(dispatch, getState) {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const result = await data.json();
//     dispatch(fetchProduct(result));
//   };
// }
