import { useEffect, useState } from "react";
import Watchlist from "../models/watchlist";
import MovieList from "../movie-list";
import {
  fetchAllMoviesInWatchlist,
  toggleMovieInWatchlist,
} from "../services/watchlist-service";

/**
 * Responsible for mainitaining the watchlist of a user.
 */
const MyWatchlist = ({ user }) => {
  const [watchList, setWatchlist] = useState([]);

  /**
   * Responsible for getting all teh movies in the user's watchlist.
   */
  const fetchMyAllMoviesInWatchList = () => {
    fetchAllMoviesInWatchlist(user.id).then((result) => {
      let movies = [];
      const list = Watchlist.getListFromJsonArray(result);
      list.forEach((l) => movies.push(l.movie));
      setWatchlist(movies);
    });
  };

  useEffect(() => {
    fetchMyAllMoviesInWatchList();
  }, [user]);

  const deleteMyWatchlist = async (movie) => {
    await toggleMovieInWatchlist(user.id, movie.id, movie);
    fetchMyAllMoviesInWatchList();
  };

  return (
    <>
      {watchList.length > 0 && (
        <MovieList movieList={watchList} onDelete={deleteMyWatchlist} />
      )}
      {watchList.length === 0 && (
        <p className="text-muted"> Your watch list is currently empty.</p>
      )}
    </>
  );
};

export default MyWatchlist;
