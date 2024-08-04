import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./ops";

export const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    items: [],
    page: 1,
    totalPages: 0,
    currentMovie: null,
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
      }),
});

export default MoviesSlice.reducer;

export const { handlePage } = MoviesSlice.actions;
