import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
  sortKey: "default",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    sortSelected: (state, action) => {
      state.sortKey = action.payload;
    },
  },
});


export const { sortSelected } = sortSlice.actions;

export default sortSlice.reducer;
