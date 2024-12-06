import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import gamesReducer from "../features/Games/gamesSlice";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
