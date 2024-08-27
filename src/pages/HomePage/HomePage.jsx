import { useEffect, useState } from "react";

import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

import LoadMoreBtn from "../../components/LoadMoreBtnMoreBtn/LoadMoreBtn";

import { getAllMovies } from "../../moviesAPI/movies-api.js";

import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const handleFetchMovies = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await getAllMovies(page);
        setMovies((prevMovies) => {
          return [...prevMovies, ...data.results];
        });
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    handleFetchMovies();
  }, [page]);

  return (
    <main>
      <section className={css.section}>
        <div className={css.container}>
          {movies.length > 0 && (
            <div className={css.listWrapper}>
              <MovieList movies={movies} />
            </div>
          )}
          {error && <Error />}
          {loading && <Loader />}
          {page < totalPages && !loading && (
            <LoadMoreBtn onLoadMore={handleLoadMore} />
          )}
        </div>
      </section>
    </main>
  );
}
