import React, { useEffect, useState } from "react";
import Header from "../header";
import Movie from "../models/movie";
import * as movieService from '../services/movie-service';
import MovieGenreList from '../movie-genre-list';
import { useLocation } from "react-router";

const Search = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search)
  const q = queryParams.get("query")
  const [movies, setMovies] = useState([]);

  /**
   * Fetches the list of mathe movies that matches the query
   */
  const searchQuery = () => {
    movieService.searchMovies(q).then(res => {
      const moviesList = Movie.getListFromJsonArray(res.results);
      setMovies(moviesList);
    });
  }

  useEffect(searchQuery, [q]);

  return (
    <div>
      <Header />
      <div className="container bg-white rounded-3 overflow-hidden">
        <div className="row">
          <div className="col pt-3 pb-3 bg-light">
            <MovieGenreList movieList={movies} genre="We have found these movies" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;