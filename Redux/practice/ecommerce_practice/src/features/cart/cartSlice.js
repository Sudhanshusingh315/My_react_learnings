import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchItems, addItems, deleteItems, updateItems } from "./cartAPI";
const initialState = {
  item: [],
  status: "idle",
};

// Async action creator
export const fetchAsync = createAsyncThunk("cart/fetchAsync", async () => {
  const response = await fetchItems();
  return response.data;
});

export const addAsync = createAsyncThunk("cart/addAsync", async (item) => {
  const { id, title, thumbnail, price, brand } = item;
  const response = await addItems({ id, title, thumbnail, price, brand });
  return response.data;
});

export const deleteAsync = createAsyncThunk("cart/deleteItems", async (id) => {
  await deleteItems(id);
  return id; // this id will pass onto the action.payload
});

export const updateAsync = createAsyncThunk(
  "cart/updateItems",
  async (idwithitem) => {
    const response = await updateItems(idwithitem.id, idwithitem.item);
    return response;
  }
);
export const itemSlice = createSlice({
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
        state.item = action.payload;
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.item.push(action.payload);
      })
      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const indexItem = state.item.findIndex((i) => i.id === action.payload);
        state.item.splice(indexItem, 1);
      })
      .addCase(updateAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const indexItem = state.item.findIndex(
          (i) => i.id === action.payload.id
        );
        state.item.splice(indexItem, 1, action.payload);
      });
  },
});

export default itemSlice.reducer;
