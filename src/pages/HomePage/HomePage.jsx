import { useEffect, useState } from "react";
import { getAllMovies } from "../../moviesAPI/movies-api";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const handleFetchMovies = async () => {
      const data = await getAllMovies();
      setMovies(data.results);
    };
    handleFetchMovies();
  }, []);

  return <div>{movies && <MovieList movies={movies} />}</div>;
}
