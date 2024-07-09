import { lazy, Suspense, useEffect, useState } from "react";
import { getAllMovies } from "../../moviesAPI/movies-api";

import Loader from "../../components/Loader/Loader";

const MovieListLazy = lazy(() =>
  import("../../components/MovieList/MovieList")
);

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleFetchMovies = async () => {
      try {
        setError(false);
        const data = await getAllMovies();
        setMovies(data.results);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    handleFetchMovies();
  }, []);

  return (
    <div>
      {movies.length > 0 && (
        <Suspense fallback={<Loader />}>
          <MovieListLazy movies={movies} />
        </Suspense>
      )}
    </div>
  );
}
