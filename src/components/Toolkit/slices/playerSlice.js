import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../actions/action";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const playerSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getData.pending]: (state) => {
      state.isLoading = true;
    },

    [getData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },

    [getData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default playerSlice.reducer;
