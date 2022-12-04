import { configureStore } from "@reduxjs/toolkit";
import playReducer from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    player: playReducer,
  },
});
