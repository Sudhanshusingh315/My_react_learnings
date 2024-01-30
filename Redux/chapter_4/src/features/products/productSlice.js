import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchproducts } from "./productAPI";

const initialState = {
  product: [],
  status: "idle",
};

// Async Thunk
export const fetchAsync = createAsyncThunk(
  "products/fetchproducts",
  async (amount) => {
    const response = await fetchproducts();
    return response.data;
  }
);

//  Slice
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  // for Async calls
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.product = action.payload;
      });
  },
});

// export const {} = productsSlice.actions;

export default productsSlice.reducer;
