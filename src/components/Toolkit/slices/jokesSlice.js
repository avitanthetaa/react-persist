import { createSlice } from "@reduxjs/toolkit";
import { getJokesData } from "../actions/action";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  extraReducers: {
    [getJokesData.pending]: (state) => {
      state.isLoading = true;
    },

    [getJokesData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },

    [getJokesData.rejected]: (state, { payload }) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default jokesSlice.reducer;
