import { useEffect, useState } from "react";
import { getMovieByName } from "../../moviesAPI/movies-api";

import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

// import css from "./MoviesPage.module.css";

import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [moviesList, setMoviesList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("query") ?? "";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearchMovie = (searchMovie) => {
    searchParams.set("query", searchMovie);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!movieName) return;

    const handleSearchFetch = async () => {
      try {
        setError(false);
        setLoading(true);

        const movies = await getMovieByName(movieName);
        setMoviesList(movies.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    handleSearchFetch();
  }, [movieName]);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <SearchForm onSubmit={handleSearchMovie} searchValue={movieName} />

        {moviesList.length > 0 && <MovieList movies={moviesList} />}
        {loading && <Loader />}
        {error && <Error />}
      </div>
    </section>
  );
}
