import axios from "axios";

export async function getAllMovies() {
  const url = "https://api.themoviedb.org/3/trending/movie/day";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDhjMTE1ZGViMjAyYTEyY2VjMjQ5ZmE0ZTk1YzE3ZiIsIm5iZiI6MTcyMDUzNTkyMC4xOTcxOTYsInN1YiI6IjY2OGNmYWVhMmMzMThlZjg0NjBkMTllOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PmorOWOwlMenzAHGXYgJcbKOkhG6kU5IiB3EKibdYUk",
    },
    // params: { page: 1 },
  };

  const response = await axios.get(url, options);
  return response.data;
}

export async function getMovieById(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDhjMTE1ZGViMjAyYTEyY2VjMjQ5ZmE0ZTk1YzE3ZiIsIm5iZiI6MTcyMDUzNTkyMC4xOTcxOTYsInN1YiI6IjY2OGNmYWVhMmMzMThlZjg0NjBkMTllOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PmorOWOwlMenzAHGXYgJcbKOkhG6kU5IiB3EKibdYUk",
    },
  };

  const response = await axios.get(url, options);
  return response.data;
}

export async function getSimilarMovies(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDhjMTE1ZGViMjAyYTEyY2VjMjQ5ZmE0ZTk1YzE3ZiIsIm5iZiI6MTcyMDUzNTkyMC4xOTcxOTYsInN1YiI6IjY2OGNmYWVhMmMzMThlZjg0NjBkMTllOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PmorOWOwlMenzAHGXYgJcbKOkhG6kU5IiB3EKibdYUk",
    },
  };

  const response = await axios.get(url, options);
  return response.data;
}

export async function getCastInfo(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDhjMTE1ZGViMjAyYTEyY2VjMjQ5ZmE0ZTk1YzE3ZiIsIm5iZiI6MTcyMDUzNTkyMC4xOTcxOTYsInN1YiI6IjY2OGNmYWVhMmMzMThlZjg0NjBkMTllOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PmorOWOwlMenzAHGXYgJcbKOkhG6kU5IiB3EKibdYUk",
    },
  };

  const response = await axios.get(url, options);

  return response.data;
}

export async function getReviews(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDhjMTE1ZGViMjAyYTEyY2VjMjQ5ZmE0ZTk1YzE3ZiIsIm5iZiI6MTcyMDUzNTkyMC4xOTcxOTYsInN1YiI6IjY2OGNmYWVhMmMzMThlZjg0NjBkMTllOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PmorOWOwlMenzAHGXYgJcbKOkhG6kU5IiB3EKibdYUk",
    },
  };

  const response = await axios.get(url, options);

  return response.data;
}
