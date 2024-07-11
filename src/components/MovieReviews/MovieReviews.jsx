import { useEffect, useState } from "react";
import { getReviews } from "../../moviesAPI/movies-api";
import { useParams } from "react-router-dom";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const handleCastFetch = async () => {
      const data = await getReviews(movieId);
      setReviews(data.results);
    };
    handleCastFetch();
  }, [movieId]);
}
