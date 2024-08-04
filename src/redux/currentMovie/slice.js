import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCastInfo,
  fetchMovieById,
  fetchMovieReviews,
  fetchSimilarMovies,
} from "../currentMovie/ops";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    currentMovie: null,
    cast: [],
    reviews: [],
    similarMovies: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieById.pending, (state) => {
        state.isLoading = true;
        state.currentMovie = null;
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
        state.cast = [];
      })
      .addCase(fetchCastInfo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.cast = payload.cast.slice(0, 5);
      })
      .addCase(fetchCastInfo.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(fetchMovieReviews.pending, (state) => {
        state.isLoading = true;
        state.reviews = [];
      })
      .addCase(fetchMovieReviews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = payload.results;
      })
      .addCase(fetchMovieReviews.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default movieSlice.reducer;
