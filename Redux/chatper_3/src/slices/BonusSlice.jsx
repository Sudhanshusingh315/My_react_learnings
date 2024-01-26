import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 1,
};

const incrementByAmount = createAction("account/incrementByAmount");

export const BonusSlice = createSlice({
  name: "Bonus" /* this is the name of slice and this name of the slice will be used to create the action types and action creators associated with this slice. */,
  initialState,
  // these are all the reducers switch cases that was there in Redux
  reducers: {
    increment: (state) => {
      state.points += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, action) => {
      if (action.payload >= 100) {
        state.points++;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = BonusSlice.actions;

export default BonusSlice.reducer;
