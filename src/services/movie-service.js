import axios from "axios";
const SEARCH_URL = "https://api.themoviedb.org/4";
const SEARCH_URL_V3 = "https://api.themoviedb.org/3";
const KEY = process.env.REACT_APP_MKEY;
const config = {
  headers: { Authorization: `Bearer ${KEY}` }
};

/**
 * Fetches the recent popular movies from the movie database.
 * @returns JSON array of movies
 */
export const getPopular = async () => {
  let response = await axios.post(`${SEARCH_URL}/discover/movie?sort_by=popularity.desc`, {}, config);
  return response.data;
}

/**
 * Fetches the movie based on the genre.
 * @param {*} genre_id the genre for which the moview will be fetched
 * @returns The list of movie objects.
 */
export const getByGenre = async (genre_id) => {
  let response = await axios.post(`${SEARCH_URL}/discover/movie?with_genres=${genre_id}`, {}, config);
  return response.data;
}

/**
 * Fetches the movie details based on the id.
 * @param {*} movie_id the id for which the moview will be fetched
 * @returns The movie object.
 */
export const getMovieDetailsById = async (movie_id) => {
  let response = await axios.get(`${SEARCH_URL_V3}/movie/${movie_id}`, config);
  return response.data;
}

/**
 * Fetches the similar movies based on the id.
 * @param {*} movie_id the id for which the moview will be fetched
 * @returns The List of movie objects.
 */
export const getSimilarMovies = async (movie_id) => {
  let response = await axios.get(`${SEARCH_URL_V3}/movie/${movie_id}/similar`, config);
  return response.data;
}
