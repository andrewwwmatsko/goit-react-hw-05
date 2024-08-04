import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCastInfo,
  fetchMovieById,
  fetchMovieByName,
  fetchMovieReviews,
  fetchMovies,
  fetchSimilarMovies,
} from "./ops";

export const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    items: [],
    foundMovies: [],
    page: 1,
    totalPages: 0,
    currentMovie: null,
    cast: [],
    reviews: [],
    similarMovies: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    handlePage(state) {
      state.page += 1;
    },
    resetPage(state) {
      state.page = 1;
    },
    resetTotalPages(state) {
      state.totalPages = 0;
    },
    resetMovies(state) {
      state.items = [];
    },
    resetFoundMovies(state) {
      state.foundMovies = [];
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
      })

      .addCase(fetchMovieReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovieReviews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = payload.results;
      })
      .addCase(fetchMovieReviews.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(fetchMovieByName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovieByName.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.totalPages = payload.total_pages;
        state.foundMovies = [...state.foundMovies, ...payload.results];
      })
      .addCase(fetchMovieByName.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export default MoviesSlice.reducer;

export const {
  handlePage,
  resetPage,
  resetMovies,
  resetTotalPages,
  resetFoundMovies,
} = MoviesSlice.actions;
