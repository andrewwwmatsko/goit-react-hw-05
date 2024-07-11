import { Link, useLocation } from "react-router-dom";

import css from "./MovieList.module.css";

import { createImageUrl } from "../../helpers/createImageUrl";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(
        ({
          id,
          original_title,
          backdrop_path,
          title,
          release_date,
          poster_path,
        }) => {
          const checkerUrl = () => {
            if (backdrop_path === null) {
              return createImageUrl(poster_path, 300);
            } else {
              return createImageUrl(backdrop_path, 300);
            }
          };
          checkerUrl();

          return (
            <li key={id}>
              <Link
                to={`/movies/${id}`}
                state={location}
                className={css.movieLink}
              >
                <div>
                  <img
                    src={checkerUrl()}
                    alt={`Poster of ${title}`}
                    className={css.poster}
                    width={300}
                    height={169}
                  />
                  <p className={css.title}>{original_title}</p>
                  <p className={css.date}>
                    Released: {release_date ? release_date : "Unknown"}
                  </p>
                </div>
              </Link>
            </li>
          );
        }
      )}
    </ul>
  );
}
