import { useEffect, useState } from "react";
import { getSimilarMovies } from "../../moviesAPI/movies-api";
import { useParams } from "react-router-dom";

export default function SimilarMoviesPage() {
  const [similarMovies, setSimilarMovies] = useState([]);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    try {
      setError(false);
      const handleFetchMovies = async () => {
        const data = await getSimilarMovies(movieId);
        setSimilarMovies(data.results);
      };
      handleFetchMovies();
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }, [movieId, error]);

  console.log(similarMovies);
}
