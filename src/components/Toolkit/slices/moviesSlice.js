import { createSlice } from "@reduxjs/toolkit";
import { getMoviesData } from "../actions/action";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: {
    [getMoviesData.pending]: (state) => {
      state.isLoading = true;
    },

    [getMoviesData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },

    [getMoviesData.rejected]: (state, { payload }) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default moviesSlice.reducer;
