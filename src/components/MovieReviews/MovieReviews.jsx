import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Error from "../Error/Error";
import Loader from "../Loader/Loader";

import { fetchMovieReviews } from "../../redux/currentMovie/ops";
import {
  selectError,
  selectIsLoading,
} from "../../redux/currentMovie/selectors";

import { selectMovieReviews } from "../../redux/currentMovie/selectors";

import css from "./MoviesReviews.module.css";

export default function MovieReviews() {
  const reviews = useSelector(selectMovieReviews);
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);

  const { movieId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    dispatch(fetchMovieReviews(movieId));
  }, [movieId, dispatch]);

  return (
    <div className={css.container}>
      {reviews.length > 0 && (
        <ul className={css.list}>
          {reviews.map((review) => {
            return (
              <li key={review.id} className={css.reviewItem}>
                <h4 className={css.name}>{review.author}</h4>
                <p className={css.review}>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}

      {reviews.length < 1 && !loading && (
        <p className={css.noComments}>There are no reviews yet.</p>
      )}

      {error && <Error />}
      {loading && <Loader />}
    </div>
  );
}
