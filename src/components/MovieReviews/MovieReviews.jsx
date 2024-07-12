import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getReviews } from "../../moviesAPI/movies-api";

import Error from "../Error/Error";
import LoadMoreBtn from "../LoadMoreBtnMoreBtn/LoadMoreBtn";

import css from "./MoviesReviews.module.css";
import Loader from "../Loader/Loader";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const handleCastFetch = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await getReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    handleCastFetch();
  }, [movieId]);

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
