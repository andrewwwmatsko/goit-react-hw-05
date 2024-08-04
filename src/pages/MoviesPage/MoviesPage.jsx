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
  selectFoundMovies,
  selectIsLoading,
  selectPage,
  selectTotalPages,
} from "../../redux/movies/selectors";
import {
  handlePage,
  resetFoundMovies,
  resetPage,
  resetTotalPages,
} from "../../redux/movies/slice";
import { fetchMovieByName } from "../../redux/movies/ops";

import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const moviesList = useSelector(selectFoundMovies);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const movieName = searchParams.get("query") ?? "";

  const handleSearchMovie = (searchMovie) => {
    dispatch(resetPage());
    dispatch(resetFoundMovies());

    searchParams.set("query", searchMovie);
    setSearchParams(searchParams);
  };

  const handleLoadMore = () => {
    dispatch(handlePage());
  };

  useEffect(() => {
    if (!movieName) return;

    dispatch(fetchMovieByName({ query: movieName, page }));
  }, [movieName, page, dispatch]);

  useEffect(() => {
    dispatch(resetFoundMovies());
    dispatch(resetTotalPages());
  }, [dispatch]);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <SearchForm onSubmit={handleSearchMovie} searchValue={movieName} />

        {moviesList.length > 0 && (
          <div className={css.wrapper}>
            <MovieList movies={moviesList} />
          </div>
        )}
        {error && (
          <div className={css.wrapper}>
            <Error />
          </div>
        )}
        {page < totalPages && !loading && (
          <LoadMoreBtn onLoadMore={handleLoadMore} />
        )}
        {loading && <Loader />}
      </div>
    </section>
  );
}
