import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortValue: "asc",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortValue(state, action) {
      state.sortValue = action.payload;
    },
  },
});

export const { setSortValue } = sortSlice.actions;

export default sortSlice.reducer;
