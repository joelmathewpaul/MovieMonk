import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import * as movieService from "../services/movie-service";
import Header from "../header";
import Movie from "../models/movie";
import MovieGenreList from "../movie-genre-list";
import UserReviewsForm from "../reviews/user-reviews-form";
import {
  findReviewByMovieIdAndType,
} from "../services/user-review-services";
import Review from "../models/review";
import ReviewList from "../reviews/reviews-list";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);
  const [normalUserReview, setNormalReview] = useState([]);
  const [criticUserReview, setCriticUserReview] = useState([]);

  const movieId = pathname.split("/")[2];

  useEffect(() => {
    movieService.getMovieDetailsById(movieId).then((movieData) => {
      let mov = Movie.getListFromJsonArray([movieData]);
      let movieModel = mov[0];
      setMovie(movieModel);
      // Fetch the normal reviews
      findReviewByMovieIdAndType(movieModel.id, "NORMAL").then((res) => {
        const resArr = Review.getListFromJsonArray(res);
        setNormalReview(resArr);
      });
      // Fetch the critic reviews
      findReviewByMovieIdAndType(movieModel.id, "CRITIC").then((res) => {
        const resArr = Review.getListFromJsonArray(res);
        setCriticUserReview(resArr);
      });
    });
    // Fetch the similar movies as well
    movieService.getSimilarMovies(movieId).then((res) => {
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
            <div
              className="backdrop-holder rounded-3"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url('${movie.backdropImage}')`,
              }}
            ></div>
            <div className="d-flex flex-row pull-det-up">
              <div className="ms-4 card-imgs rounded-3">
                <img src={movie.imageURL} alt={movie.name} />
              </div>
              <div className="ps-4">
                <h4 className="text-white fw-bold">{movie.name}</h4>
                <div className="d-flex flex-row">
                  <p className="m-0 pe-3 text-muted">
                    <small>Release: {movie.releaseDate}</small>
                  </p>
                  <p className="m-0 pe-3 text-muted">
                    <small>
                      <i className="fa-solid text-warning fa-star pe-1" /> 4
                    </small>
                  </p>
                  <p className="m-0 pe-3 text-muted">
                    <small>Votes: {movie.voteCount}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 pt-2">
            <p className="m-0 fw-bold">Overview</p>
            <p className="m-0">{movie.overview}</p>
            <p className="mt-3">
              <b>Budget:</b> {movie.budget ? `${movie.budget} ($) USD` : `N/A`}
            </p>
            <p className="mt-3">
              <b>Genre:</b>
              {movie.genres &&
                movie.genres.map((gen) => {
                  return (
                    <span key={`gen-${gen.id}`} className="badge bg-secondary ms-2">
                      {gen.name}
                    </span>
                  );
                })}
            </p>
            <button className="btn btn-success rounded-pill mt-3">
              <i className="fa fa-list"></i>{" "}
              <span className="ps-2">Add to my watchlist</span>
            </button>
          </div>
        </div>
        <div className="row mt-5 bg-light">
          {/* Here will go the review section, critic and normal user*/}
          <div className="col-6 p-3">
            <h5 className="fw-bold mb-3 text-capitalize">Critic Reviews <small className="text-muted ps-2"><i className="fa fa-arrow-right" ></i></small></h5>
            {criticUserReview.length > 0 && <ReviewList reviewList={criticUserReview} />}
            {criticUserReview.length == 0 &&
              <small className="text-muted">No critic reviews exists yet, once added it will appear here.</small>
            }
          </div>
          <div className="col-6 p-3">
            <h5 className="fw-bold mb-3 text-capitalize">User Reviews <small className="text-muted ps-2"><i className="fa fa-arrow-right" ></i></small></h5>
            {normalUserReview.length > 0 && <ReviewList reviewList={normalUserReview} />}
            {normalUserReview.length == 0 &&
              <small className="text-muted">No user reviews exists yet, once added it will appear here.</small>
            }
          </div>
        </div>
        <div className="row">
          <div className="col bg-light p-3 pb-0">
            <MovieGenreList
              movieList={similarMovies}
              genre="Movies you may like "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
