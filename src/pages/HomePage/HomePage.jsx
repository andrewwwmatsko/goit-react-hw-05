import { useEffect } from "react";

import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

import LoadMoreBtn from "../../components/LoadMoreBtnMoreBtn/LoadMoreBtn";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/movies/ops";

import {
  selectError,
  selectIsLoading,
  selectMovies,
  selectPage,
  selectTotalPages,
} from "../../redux/movies/selectors";

import { handlePage, resetPage } from "../../redux/movies/slice";

import css from "./HomePage.module.css";

export default function HomePage() {
  const movies = useSelector(selectMovies);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(handlePage());
  };

  useEffect(() => {
    dispatch(fetchMovies(page));
    dispatch(resetPage());
  }, [page, dispatch]);

  return (
    <main>
      <section className={css.section}>
        <div className={css.container}>
          {movies.length > 0 && (
            <div className={css.listWrapper}>
              <MovieList movies={movies} />
            </div>
          )}
          {error && <Error />}
          {loading && <Loader />}
          {page < totalPages && !loading && (
            <LoadMoreBtn onLoadMore={handleLoadMore} />
          )}
        </div>
      </section>
    </main>
  );
}
