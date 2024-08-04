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

export const fetchMovieById = createAsyncThunk(
  "movies/getMovie",
  async (movieId, thunkAPI) => {
    const url = `/movie/${movieId}?language=en-US`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSimilarMovies = createAsyncThunk(
  "movies/getSimilarMovies",
  async (movieId, thunkAPI) => {
    const url = `/movie/${movieId}/similar`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCastInfo = createAsyncThunk(
  "movies/getCast",
  async (movieId, thunkAPI) => {
    const url = `/movie/${movieId}/credits`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
