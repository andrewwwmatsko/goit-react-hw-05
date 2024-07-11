import { useEffect, useState } from "react";
import { getAllMovies } from "../../moviesAPI/movies-api";

import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleFetchMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await getAllMovies();
        setMovies(data.results);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    handleFetchMovies();
  }, []);

  return (
    <main>
      <section className={css.section}>
        <div className={css.container}>
          {movies.length > 0 && <MovieList movies={movies} />}
          {error && <Error />}
          {loading && <Loader />}
        </div>
      </section>
    </main>
  );
}
