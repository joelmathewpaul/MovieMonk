import { useEffect, useState } from "react";
import Watchlist from "../models/watchlist";
import MovieList from "../movie-list";
import { fetchAllMoviesInWatchlist } from "../services/watchlist-service";

const MyWatchlist = ({ user }) => {
  const [watchList, setWatchlist] = useState([]);

  useEffect(() => {
    fetchAllMoviesInWatchlist(user.id).then((result) => {
      let movies = [];
      const list = Watchlist.getListFromJsonArray(result);
      list.forEach((l) => movies.push(l.movie));
      setWatchlist(movies);
    });
  }, [user]);

  return (
    <MovieList movieList={watchList} />
  );
};

export default MyWatchlist;
