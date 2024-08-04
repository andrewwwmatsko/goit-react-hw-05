export const selectCurrentMovie = (state) => state.currentMovie.currentMovie;

export const selectSimilarMovies = (state) => state.currentMovie.similarMovies;

export const selectCast = (state) => state.currentMovie.cast;

export const selectMovieReviews = (state) => state.currentMovie.reviews;

export const selectIsLoading = (state) => state.currentMovie.isLoading;

export const selectError = (state) => state.currentMovie.error;
