import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchItems,
  addItems,
  updateItems,
  deleteItems,
} from "../cart/CartsApi";

const initialState = {
  items: [],
  status: "idle",
};

// Async Thunk
export const fetchAsync = createAsyncThunk("carts/fetchItems", async () => {
  const response = await fetchItems();
  console.log(response);
  console.log(response.data);

  return response.data;
});

export const addAsync = createAsyncThunk("carts/addItems", async (item) => {
  const { id, title, thumbnail, brand, price } = item;
  const response = await addItems({
    id,
    title,
    thumbnail,
    brand,
    price,
    quantity: 1,
  });
  return response.data;
});

export const deleteAsync = createAsyncThunk("carts/delteItems", async (id) => {
  await deleteItems(id);
  return id;
  // Do something here
});

export const updateAsync = createAsyncThunk(
  "carts/updateItems",
  async (idwithchange) => {
    const response = await updateItems(idwithchange.id, idwithchange.change);
    console.log(response);
    console.log(response.data);
    return response.data;
  }
);

//  Slice
export const cartSlice = createSlice({
  name: "cart",
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
        state.items = action.payload;
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const itemIndex = state.items.findIndex(
          (item) => item.id === action.payload
        );
        state.items.splice(itemIndex, 1);
      })
      .addCase(updateAsync.fulfilled, (state, actions) => {
        state.status = "idle";
        const itemIndex = state.items.findIndex(
          (item) => item.id === actions.payload.id
        );
        state.items.splice(itemIndex, 1, actions.payload);
      });
  },
});
export default cartSlice.reducer;
