import { Route, Routes } from "react-router";
import * as movieService from '../services/movie-service';
import Header from "../header";
import Navigation from "../navigation";
import MovieGenreList from "../movie-genre-list";
import { useEffect, useState } from "react";
import Movie from '../models/movie';

const Home = () => {

  const [popularMovies, setPopularMovies] = useState([]);

  const getPopular = () => {
    movieService.getPopular().then(res => {
      const movies = Movie.getListFromJsonArray(res.results);
      setPopularMovies(movies);
    });
  }

  useEffect(getPopular, []);

  return (
    <div>
      <Header />
      <div className="container bg-white rounded-3 overflow-hidden">
        <div className="row">
          <div className="col-md-3 pt-3 pb-3">
            <Navigation />
          </div>
          <div className="col-md-9 pt-3 pb-3 bg-light">
            <MovieGenreList movieList={popularMovies} genre="Top Popular" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;