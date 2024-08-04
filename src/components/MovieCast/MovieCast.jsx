import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { createActorUrl } from "../../helpers/createImageUrl.js";

import Error from "../Error/Error.jsx";
import Loader from "../Loader/Loader.jsx";

import { useDispatch, useSelector } from "react-redux";
import { fetchCastInfo } from "../../redux/currentMovie/ops.js";
import {
  selectCast,
  selectError,
  selectIsLoading,
} from "../../redux/currentMovie/selectors.js";

import css from "./MovieCast.module.css";

export default function MovieCast() {
  const cast = useSelector(selectCast);
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);

  const { movieId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    dispatch(fetchCastInfo(movieId));
  }, [movieId, dispatch]);

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
