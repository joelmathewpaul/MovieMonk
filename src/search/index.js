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
            {
              movies.length > 0 &&
              <MovieGenreList movieList={movies} genre="Here is what we have got" />
            }
            {
              movies.length == 0 && (
                <div className="m-5">
                  <div className="py-100">
                    <p className="text-center text-primary">
                      <i className="fa-brands fa-searchengin fa-6x"></i>
                    </p>
                    <h4 className="text-muted text-center">Oops! Looks like there is no match for your query</h4>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;