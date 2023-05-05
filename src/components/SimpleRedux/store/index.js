import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/CounterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
