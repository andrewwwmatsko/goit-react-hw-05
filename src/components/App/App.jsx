import { Route, Routes } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import NotFound from "../../pages/NotFoundPage/NotFoundPage";
import HomePage from "../../pages/HomePage/HomePage";
import Footer from "../Footer/Footer";

export default function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" />
        <Route path="/movies/:movieId" />
        <Route path="/movies/:movieId/cast" />
        <Route path="/movies/:movieId/reviews" />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
