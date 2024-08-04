export const selectMovies = (state) => state.movies.items;
export const selectCurrentMovie = (state) => state.movies.currentMovie;

export const selectPage = (state) => state.movies.page;
export const selectTotalPages = (state) => state.movies.totalPages;

export const selectIsLoading = (state) => state.movies.isLoading;

export const selectError = (state) => state.movies.error;
