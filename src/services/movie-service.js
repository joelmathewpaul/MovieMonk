import axios from "axios";
const SEARCH_URL = "https://api.themoviedb.org/4";
const KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzdjZjM2MDMwZDVlMGMzNDEwZDkzNDUyMzQ1MTdmNSIsInN1YiI6IjYyYjYwYTA5YjAwNDBhMDA2MTgyODY0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NrRZsrga8CoHM_huLXBVXw_dzAPwBuz9AhxAYyOM0mY";
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


