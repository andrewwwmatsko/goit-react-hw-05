import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieById } from "../../moviesAPI/movies-api";
import { createImageUrl } from "../../helpers/createImageUrl";

import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const handleFetch = async () => {
      const movie = await getMovieById(movieId);
      setMovie(movie);
    };
    handleFetch();
  }, [movieId]);
  return (
    <main>
      {movie && (
        <section className={css.section}>
          <div className={css.container}>
            <img
              src={createImageUrl(movie.poster_path, 500)}
              alt={movie.title}
            />
            <div className={css.movieInfo}>
              <h2 className={css.title}>{movie.title}</h2>
              <a
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className={css.homepageLink}
              >
                Watch here
              </a>
              <p className={css.date}>Release date: {movie.release_date}</p>

              <div className={css.genresDetails}>
                <h3 className={css.subtitle}>Genres:</h3>
                <ul className={css.genresList}>
                  {movie.genres.map((genre) => {
                    return (
                      <li key={genre.id} className={css.genreItem}>
                        <span className={css.itemText}>{genre.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={css.countryDetails}>
                <h3 className={css.subtitle}>
                  {movie.origin_country.length > 1 ? "Countries:" : "Country:"}
                </h3>
                <ul className={css.countryList}>
                  {movie.origin_country.map((country) => {
                    return (
                      <li key={country} className={css.countryItem}>
                        <span className={css.itemText}>{country}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={css.descriptionWrapper}>
                <h3 className={css.movieSubtitle}>Description</h3>
                <p className={css.description}>{movie.overview}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
