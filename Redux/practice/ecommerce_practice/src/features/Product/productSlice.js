import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchItems } from "./productAPI";

const initialState = {
  product: [],
  status: "idle",
};

// Async action creator
export const fetchAsync = createAsyncThunk("product/fetchAsync", async () => {
  const response = await fetchItems();
  return response.data;
});

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
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

export default productSlice.reducer;
