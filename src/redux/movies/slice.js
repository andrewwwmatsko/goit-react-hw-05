import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieByName, fetchMovies } from "./ops";

export const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    items: [],
    foundMovies: [],
    page: 1,
    totalPages: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    handlePage(state) {
      state.page = state.page + 1;
    },
    resetMoviesPage(state) {
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

      .addCase(fetchMovieByName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovieByName.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.foundMovies = [...state.foundMovies, ...payload.results];
        state.totalPages = payload.total_pages;
      })
      .addCase(fetchMovieByName.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export default MoviesSlice.reducer;

export const {
  handlePage,
  resetMoviesPage,
  resetMovies,
  resetTotalPages,
  resetFoundMovies,
} = MoviesSlice.actions;
