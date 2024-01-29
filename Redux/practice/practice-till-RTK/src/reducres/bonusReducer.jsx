import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 0,
};

export const bonusSlice = createSlice({
  name: "bouns",
  initialState,
  reducers: {
    increment: (state) => {
      state.points = 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = bonusSlice.actions;

export default bonusSlice.reducer;
