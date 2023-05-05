import { createSlice } from "@reduxjs/toolkit";
import { getDogsData } from "../actions/action";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const dogsSlice = createSlice({
  name: "dogs",
  initialState,
  extraReducers: {
    [getDogsData.pending]: (state) => {
      state.isLoading = true;
    },
    [getDogsData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [getDogsData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default dogsSlice.reducer;
