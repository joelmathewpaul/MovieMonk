import { useEffect, useState } from "react";
import Watchlist from "../models/watchlist";
import MovieList from "../movie-list";
import { fetchAllMoviesInWatchlist } from "../services/watchlist-service";

const MyWatchlist = ({ user }) => {
  const [watchList, setWatchlist] = useState([]);

  useEffect(() => {
    fetchAllMoviesInWatchlist(user.id).then((result) => {
      const list = Watchlist.getListFromJsonArray(result);
      setWatchlist(list);
    });
  }, [user]);

  return (
    <div>
      <MovieList MovieList={watchList} />
    </div>
  );
};

export default MyWatchlist;
