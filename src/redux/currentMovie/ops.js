import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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

export const fetchMovieReviews = createAsyncThunk(
  "movies/movieReviews",
  async (movieId, thunkAPI) => {
    const url = `/movie/${movieId}/reviews`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
