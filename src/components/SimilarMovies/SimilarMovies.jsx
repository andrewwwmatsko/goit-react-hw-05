import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MovieList from "../../components/MovieList/MovieList";
import Error from "../Error/Error";

import { fetchSimilarMovies } from "../../redux/currentMovie/ops";
import {
  selectError,
  selectSimilarMovies,
} from "../../redux/currentMovie/selectors";

import css from "./SimilarMovies.module.css";

export default function SimilarMovies({ movieId }) {
  const similarMovies = useSelector(selectSimilarMovies);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSimilarMovies(movieId));
  }, [movieId, dispatch]);

  return (
    <>
      {similarMovies.length > 0 && (
        <div className={css.similarMoviesList}>
          <h4 className={css.subtitle}>You may also like</h4>
          <div>
            <MovieList movies={similarMovies} />
          </div>
        </div>
      )}
      {error && <Error />}
    </>
  );
}
