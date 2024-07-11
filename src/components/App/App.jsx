import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const SimilarMoviesPage = lazy(() =>
  import("../../pages/SimilarMoviesPage/SimilarMoviesPage")
);
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));

import css from "./App.module.css";
import MovieReviews from "../MovieReviews/MovieReviews";

export default function App() {
  return (
    <div className={css.main}>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
            <Route path="similar-movies" element={<SimilarMoviesPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}
