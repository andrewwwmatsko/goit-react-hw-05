import { useEffect, useState } from "react";
import { getMovieByName } from "../../moviesAPI/movies-api";

import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import LoadMoreBtn from "../../components/LoadMoreBtnMoreBtn/LoadMoreBtn";

export default function MoviesPage() {
  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("query") ?? "";

  const handleSearchMovie = (searchMovie) => {
    setPage(1);
    setMoviesList([]);

    searchParams.set("query", searchMovie);
    setSearchParams(searchParams);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (!movieName) return;

    const handleSearchFetch = async () => {
      try {
        setError(false);
        setLoading(true);

        const movies = await getMovieByName(movieName, page);
        setMoviesList((prevMovies) => {
          return [...prevMovies, ...movies.results];
        });
        setTotalPages(movies.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    handleSearchFetch();
  }, [movieName, page]);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <SearchForm onSubmit={handleSearchMovie} searchValue={movieName} />

        {moviesList.length > 0 && <MovieList movies={moviesList} />}
        {loading && <Loader />}
        {error && <Error />}
        {page < totalPages && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      </div>
    </section>
  );
}
