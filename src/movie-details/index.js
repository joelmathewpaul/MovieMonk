import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import * as movieService from '../services/movie-service';
import Header from "../header";
import './index.css';
import Movie from "../models/movie";
import MovieGenreList from "../movie-genre-list";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);
  const movieId = pathname.split("/")[2];

  useEffect(() => {
    movieService.getMovieDetailsById(movieId).then(movieData => {
      let mov = Movie.getListFromJsonArray([movieData]);
      setMovie(mov[0]);
    });
    // Fetch the similar movies as well
    movieService.getSimilarMovies(movieId).then(res => {
      const moviesList = Movie.getListFromJsonArray(res.results);
      // we only want to show 6 movies as similar, but api does not allow it
      moviesList.length = 6;
      setSimilarMovies(moviesList);
    });
  }, [movieId]);

  return (
    <div>
      <Header />
      <div className="container bg-white rounded-3 overflow-hidden">
        <div className="row">
          <div className="col-lg-7 ptrem">
            <div className="backdrop-holder rounded-3" style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url('${movie.backdropImage}')`,
            }}></div>
            <div className="d-flex flex-row pull-det-up">
              <div className="ms-4 card-imgs rounded-3">
                <img src={movie.imageURL} alt={movie.name} />
              </div>
              <div className="ps-4">
                <h4 className="text-white fw-bold">{movie.name}</h4>
                <div className="d-flex flex-row">
                  <p className="m-0 pe-3 text-muted"><small>Release: {movie.releaseDate}</small></p>
                  <p className="m-0 pe-3 text-muted"><small><i className="fa-solid text-warning fa-star pe-1" /> 4</small></p>
                  <p className="m-0 pe-3 text-muted"><small>Votes: {movie.voteCount}</small></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 pt-2">
            <p className="m-0 fw-bold">Overview</p>
            <p className="m-0">
              {movie.overview}
            </p>
            <p className="mt-3"><b>Budget:</b> {movie.budget ? `${movie.budget} ($) USD` : `N/A`}</p>
            <p className="mt-3">
              <b>Genre:</b>
              {
                movie.genres && movie.genres.map(gen => {
                  return <span key={`gen-${gen.id}`} class="badge bg-secondary ms-2">{gen.name}</span>;
                })
              }
            </p>
            <button className="btn btn-success rounded-pill mt-3"><i className="fa fa-list"></i> <span className="ps-2">Add to my watchlist</span></button>
          </div>
        </div>
        <div className="row">
          <div className="col bg-light p-3 pb-0">
            <MovieGenreList movieList={similarMovies} genre="Similar movies you may like " />
          </div>
        </div>
      </div>
    </div >
  )
}

export default MovieDetails;