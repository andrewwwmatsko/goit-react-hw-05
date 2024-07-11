import { useEffect, useState } from "react";
import { getReviews } from "../../moviesAPI/movies-api";
import { useParams } from "react-router-dom";

import Error from "../Error/Error";

import css from "./MoviesReviews.module.css";
import Loader from "../Loader/Loader";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    try {
      setLoading(true);
      setError(false);

      const handleCastFetch = async () => {
        const data = await getReviews(movieId);
        setReviews(data.results);
      };
      handleCastFetch();
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
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
