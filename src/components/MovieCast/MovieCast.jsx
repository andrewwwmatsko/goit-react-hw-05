import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCastInfo } from "../../moviesAPI/movies-api";
import { createActorUrl } from "../../helpers/createImageUrl.js";

import css from "./MovieCast.module.css";
import Error from "../Error/Error.jsx";
import Loader from "../Loader/Loader.jsx";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const handleCastFetch = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await getCastInfo(movieId);
        setCast(data.cast.slice(0, 5));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
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
                <img
                  src={createActorUrl(actor.profile_path, 200)}
                  alt={`${actor.name} photo`}
                  className={css.actorPhoto}
                />
                <p>{actor.name}</p>
              </li>
            );
          })}
        </ul>
      )}
      {cast.length < 1 && !loading && <p>No data</p>}
      {error && <Error />}
      {loading && <Loader />}
    </div>
  );
}
