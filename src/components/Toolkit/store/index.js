import { combineReducers, configureStore } from "@reduxjs/toolkit";
import playerSlice from "../slices/playerSlice";
import dogsSlice from "../slices/dogsSlice";
import moviesSlice from "../slices/moviesSlice";
import jokesSlice from "../slices/jokesSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storage,
  // blacklist: ["apiProductSlice"],
};

export const rootReducers = combineReducers({
  playerSlice,
  // dogsSlice,
  // moviesSlice,
  jokesSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
