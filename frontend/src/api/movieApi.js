import API from "./api";

export const getMovies = (page = 1, limit = 8) =>
  API.get(`/movies?page=${page}&limit=${limit}`);

export const getMovieById = (id) =>
  API.get(`/movies/${id}`);

export const createMovie = (formData) =>
  API.post("/movies", formData);

export const updateMovie = (id, formData) =>
  API.put(`/movies/${id}`, formData);
