import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCastInfo } from "../../moviesAPI/movies-api";

import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  // const [producer, setProducer] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const handleCastFetch = async () => {
      const data = await getCastInfo(movieId);
      setCast(data.cast.slice(0, 4));
    };
    handleCastFetch();
  }, [movieId]);

  return (
    <div className={css.castSection}>
      {cast.length > 0 && (
        <ul className={css.castList}>
          {cast.map((actor) => {
            return (
              <li key={actor.id} className={css.actorItem}>
                <p className={css.actorName}>{actor.name}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
