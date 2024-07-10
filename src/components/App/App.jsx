import { Route, Routes } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import NotFound from "../../pages/NotFoundPage/NotFoundPage";
import HomePage from "../../pages/HomePage/HomePage";
import Footer from "../Footer/Footer";

import css from "./App.module.css";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import SimilarMoviesPage from "../../pages/SimilarMoviesPage/SimilarMoviesPage";

export default function App() {
  return (
    <div className={css.main}>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" />
          <Route path="reviews" />
          <Route path="similar-movies" element={<SimilarMoviesPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
