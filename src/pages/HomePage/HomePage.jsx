import { useEffect, useState } from "react";
import { getAllMovies } from "../../moviesAPI/movies-api";

import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

import css from "./HomePage.module.css";
import LoadMoreBtn from "../../components/LoadMoreBtnMoreBtn/LoadMoreBtn";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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
          {movies.length > 0 && <MovieList movies={movies} />}
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
