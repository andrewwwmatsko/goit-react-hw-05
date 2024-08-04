import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCastInfo,
  fetchMovieById,
  fetchMovies,
  fetchSimilarMovies,
} from "./ops";

export const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    items: [],
    page: 1,
    totalPages: 0,
    currentMovie: null,
    cast: [],
    similarMovies: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    handlePage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...payload.results];
        state.totalPages = payload.total_pages;
      })
      .addCase(fetchMovies.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchMovieById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovieById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.currentMovie = payload;
      })
      .addCase(fetchMovieById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchSimilarMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSimilarMovies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.similarMovies = payload.results.slice(0, 4);
      })
      .addCase(fetchSimilarMovies.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchCastInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCastInfo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.cast = payload.cast.slice(0, 5);
      })
      .addCase(fetchCastInfo.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export default MoviesSlice.reducer;

export const { handlePage } = MoviesSlice.actions;
