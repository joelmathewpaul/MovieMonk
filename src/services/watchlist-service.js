import axios from "axios";

/**
 * The API base that is to be changed to the server in the future.
 */
const API_BASE = process.env.REACT_APP_API_BASES;

const api = axios.create({ withCredentials: true });

/**
 * Fetch all movies in the watchlist of a particular user.
 *
 */
export const fetchAllMoviesInWatchlist = async (uId) => {
  const watchlist = await api.get(`${API_BASE}/watchlist/${uId}`);
  return watchlist.data;
};

/**
 * Remove / Add a movie to the watch list of a particular user.
 *
 */
export const toggleMovieInWatchlist = async (uId, mId, movie) => {
  const watchlist = await api.post(
    `${API_BASE}/watchlist/${uId}/${mId}`,
    movie
  );
  return watchlist.data;
};

/**
 * Checks if a movie is the watchlist of user.
 *
 */
export const isMovieInWatchlist = async (uId, mId) => {
  const watchlist = await api.get(`${API_BASE}/watchlist/${uId}/${mId}`);
  return watchlist.data;
};
