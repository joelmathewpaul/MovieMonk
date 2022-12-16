import { useEffect, useState } from "react";
import Watchlist from "../models/watchlist";
import MovieList from "../movie-list";
import { fetchAllMoviesInWatchlist, toggleMovieInWatchlist } from "../services/watchlist-service";

const MyWatchlist = ({ user }) => {
  const [watchList, setWatchlist] = useState([]);

  const fetchMyAllMoviesInWatchList = () => {
    fetchAllMoviesInWatchlist(user.id).then((result) => {
      let movies = [];
      const list = Watchlist.getListFromJsonArray(result);
      list.forEach((l) => movies.push(l.movie));
      setWatchlist(movies);
    });
  }

  useEffect(() => {
    fetchMyAllMoviesInWatchList();
  }, [user]);

  const deleteMyWatchlist = async (movie) => {
    await toggleMovieInWatchlist(user.id, movie.id, movie);
    fetchMyAllMoviesInWatchList();
  }

  return (
    <>
      {watchList.length > 0 &&
        <MovieList movieList={watchList} onDelete={deleteMyWatchlist} />
      }
      {watchList.length == 0 &&
        <p className="text-muted"> Your watch list is currently empty.</p>
      }
    </>
  );
};

export default MyWatchlist;
