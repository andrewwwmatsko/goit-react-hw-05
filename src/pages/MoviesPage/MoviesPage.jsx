import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import LoadMoreBtn from "../../components/LoadMoreBtnMoreBtn/LoadMoreBtn";

import {
  selectError,
  selectIsLoading,
  selectMovies,
  selectPage,
  selectTotalPages,
} from "../../redux/movies/selectors";
import {
  handlePage,
  resetMovies,
  resetPage,
  resetTotalPages,
} from "../../redux/movies/slice";
import { fetchMovieByName } from "../../redux/movies/ops";

import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const moviesList = useSelector(selectMovies);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const movieName = searchParams.get("query") ?? "";

  const handleSearchMovie = (searchMovie) => {
    dispatch(resetPage());

    searchParams.set("query", searchMovie);
    setSearchParams(searchParams);
  };

  const handleLoadMore = () => {
    dispatch(handlePage);
  };

  useEffect(() => {
    if (!movieName) return;

    dispatch(resetMovies());
    dispatch(resetTotalPages());

    dispatch(fetchMovieByName({ query: movieName, page }));
  }, [movieName, page, dispatch]);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <SearchForm onSubmit={handleSearchMovie} searchValue={movieName} />

        {moviesList.length > 0 && (
          <div className={css.moviesWrapper}>
            <MovieList movies={moviesList} />
          </div>
        )}
        {loading && <Loader />}
        {error && <Error />}
        {page < totalPages && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      </div>
    </section>
  );
}
