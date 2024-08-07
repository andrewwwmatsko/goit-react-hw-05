import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common.Authorization =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDhjMTE1ZGViMjAyYTEyY2VjMjQ5ZmE0ZTk1YzE3ZiIsIm5iZiI6MTcyMDUzNTkyMC4xOTcxOTYsInN1YiI6IjY2OGNmYWVhMmMzMThlZjg0NjBkMTllOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PmorOWOwlMenzAHGXYgJcbKOkhG6kU5IiB3EKibdYUk";

export const fetchMovies = createAsyncThunk(
  "movies/getAll",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get("/trending/movie/day", {
        params: { page },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMovieByName = createAsyncThunk(
  "movies/getMovieByName",
  async ({ query, page }, thunkAPI) => {
    const url = `/search/movie`;

    try {
      const response = await axios.get(url, {
        params: {
          query,
          page,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
