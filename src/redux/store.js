import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./movies/slice";
import movieReducer from "./currentMovie/slice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    currentMovie: movieReducer,
  },
});
