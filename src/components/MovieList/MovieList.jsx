import { Link, useLocation } from "react-router-dom";

import css from "./MovieList.module.css";

import { createImageUrl } from "../../helpers/createImageUrl";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <main>
      <section className={css.section}>
        <div className={css.container}>
          <ul className={css.list}>
            {movies.map(
              ({ id, original_title, backdrop_path, title, release_date }) => {
                return (
                  <li key={id}>
                    <Link
                      to={`/movies/${id}`}
                      state={location}
                      className={css.movieLink}
                    >
                      <div>
                        <img
                          src={createImageUrl(backdrop_path, 300)}
                          alt={`Poster of ${title}`}
                          className={css.poster}
                          width={300}
                        />
                        <p className={css.title}>{original_title}</p>
                        <p className={css.date}>Released: {release_date}</p>
                      </div>
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </section>
    </main>
  );
}
