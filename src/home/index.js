import { useLocation } from "react-router";
import * as movieService from '../services/movie-service';
import Header from "../header";
import Navigation from "../navigation";
import MovieGenreList from "../movie-genre-list";
import { useEffect, useState } from "react";
import Movie from '../models/movie';
import links from '../navigation/categories.json';

const Home = () => {

  const { pathname } = useLocation();
  let genre = pathname;
  if (genre.charAt(0) == "/") {
    genre = genre.substring(1);
  }
  const [movies, setMovies] = useState([]);

  /**
   * Fetches the list of popular movies.
   */
  const getPopularList = () => {
    movieService.getPopular().then(res => {
      const moviesList = Movie.getListFromJsonArray(res.results);
      setMovies(moviesList);
    });
  }

  /**
   * Fetches the list of movies by genere
   */
  const getGenreList = (genre_id) => {
    movieService.getByGenre(genre_id).then(res => {
      const moviesList = Movie.getListFromJsonArray(res.results);
      setMovies(moviesList);
    });
  }

  const init = () => {
    if (genre) {
      const matched = links.filter(l => l.label.toLowerCase() === genre.toLowerCase());
      if (matched && matched.length > 0) {
        getGenreList(matched[0].id);
      } else {
        getPopularList();
      }
    } else {
      // it means its a home page
      getPopularList();
    }
  }

  useEffect(init, [genre]);

  return (
    <div>
      <Header />
      <div className="container bg-white rounded-3 overflow-hidden">
        <div className="row">
          <div className="col-md-3 pt-3 pb-3">
            <Navigation />
          </div>
          <div className="col-md-9 pt-3 pb-3 bg-light">
            {
              !!genre && <MovieGenreList movieList={movies} genre={genre} />
            }
            {
              !genre && <MovieGenreList movieList={movies} genre="Top Popular" />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;