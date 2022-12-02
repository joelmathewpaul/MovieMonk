import axios from "axios";
const SEARCH_URL = "https://api.themoviedb.org/4";
const KEY = process.env.MKEY;
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


