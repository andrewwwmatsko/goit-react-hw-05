import { Suspense, useEffect, useRef } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import { createPosterUrl } from "../../helpers/createImageUrl";

import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import BackToButton from "../../components/BackToButton/BackToButton";

import SimilarMovies from "../../components/SimilarMovies/SimilarMovies";
import { selectCurrentMovie, selectError } from "../../redux/movies/selectors";
import css from "./MovieDetailsPage.module.css";
import { fetchMovieById } from "../../redux/movies/ops";

const createNalLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.activeNavLink);
};

const timeFormat = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
};

export default function MovieDetailsPage() {
  const movie = useSelector(selectCurrentMovie);
  const error = useSelector(selectError);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  const { movieId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieById(movieId));
  }, [movieId, dispatch]);

  return (
    <main>
      {movie && (
        <section className={css.section}>
          <div className={css.container}>
            <BackToButton to={backLinkRef.current}>Back</BackToButton>

            <div className={css.mainPage}>
              <img
                src={createPosterUrl(
                  movie.poster_path,
                  movie.backdrop_path,
                  400
                )}
                alt={movie.title}
                width={400}
                height={600}
                className={css.image}
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
                <h3 className={css.subtitle}>{movie.release_date}</h3>

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
                  <h3 className={css.subtitle}>Country</h3>
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

                {movie.spoken_languages.length > 0 && (
                  <div className={css.language}>
                    <h3 className={css.subtitle}>Language:</h3>
                    <p className={css.langOutput}>
                      {movie.spoken_languages[0].english_name}
                    </p>
                  </div>
                )}

                <div className={css.duration}>
                  <h3 className={css.subtitle}>Duration:</h3>
                  <p> {timeFormat(movie.runtime)}</p>
                </div>

                <div className={css.vote}>
                  <h3 className={css.subtitle}>Rate:</h3>
                  <p className={css.duration}>{movie.vote_average}</p>
                </div>

                <div className={css.descriptionWrapper}>
                  <h3 className={css.movieSubtitle}>Description:</h3>
                  <p className={css.description}>{movie.overview}</p>
                </div>
              </div>
            </div>

            <div className={css.additionalInfo}>
              <NavLink to="cast" className={createNalLinkClass}>
                Cast
              </NavLink>

              <NavLink to="reviews" className={createNalLinkClass}>
                Reviews
              </NavLink>
            </div>

            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>

            <SimilarMovies movieId={movieId} />
          </div>
        </section>
      )}
      {error && <Error />}
    </main>
  );
}
