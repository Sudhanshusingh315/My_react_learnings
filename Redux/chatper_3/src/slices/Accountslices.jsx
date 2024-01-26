import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  amount: 1,
};

export const getUserById = createAsyncThunk(
  "account/getByIdStatus",
  async (userId, thunkAPI) => {
    const response = await axios.get(
      `http://localhost:8080/accounts/${userId}`
    );
    return response.data.amount;
  }
);

export const accountSlice = createSlice({
  name: "account" /* this is the name of slice and this name of the slice will be used to create the action types and action creators associated with this slice. */,
  initialState,
  // these are all the reducers switch cases that was there in Redux
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.amount = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;
