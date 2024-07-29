import { useEffect, useState } from "react";

import MovieList from "../../components/MovieList/MovieList";
import Error from "../Error/Error";

import { getSimilarMovies } from "../../moviesAPI/movies-api";

import css from "./SimilarMovies.module.css";

export default function SimilarMovies({ movieId }) {
  const [similarMovies, setSimilarMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleGetSimilarMovies = async () => {
      try {
        setError(false);
        const data = await getSimilarMovies(movieId);
        setSimilarMovies(data.results.slice(0, 4));
      } catch (error) {
        setError(true);
      }
    };

    handleGetSimilarMovies();
  }, [movieId]);

  return (
    <>
      {similarMovies.length > 0 && (
        <div className={css.similarMoviesList}>
          <h4 className={css.subtitle}>You may also like</h4>
          <MovieList movies={similarMovies} />
        </div>
      )}
      {error && <Error />}
    </>
  );
}
