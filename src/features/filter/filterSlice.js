import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
  filterKey: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterSelected: (state, action) => {
      state.filterKey = action.payload;
    },
  },
});


export const { filterSelected } = filterSlice.actions;

export default filterSlice.reducer;
