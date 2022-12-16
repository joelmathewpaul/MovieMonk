import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import * as movieService from "../services/movie-service";
import Header from "../header";
import Movie from "../models/movie";
import MovieGenreList from "../movie-genre-list";
import Modal from "react-bootstrap/Modal";
import UserReviewsForm from "../reviews/user-reviews-form";
import { findReviewByMovieIdAndType } from "../services/user-review-services";
import Review from "../models/review";
import ReviewList from "../reviews/reviews-list";
import { useSelector } from "react-redux";
import CriticUserReviewForm from "../reviews/critic-review-form";
import { toggleMovieInWatchlist } from "../services/watchlist-service";

const MovieDetails = () => {
  const user = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);
  const [normalUserReview, setNormalReview] = useState([]);
  const [criticUserReview, setCriticUserReview] = useState([]);
  const [show, setShow] = useState(false);
  const [editedReview, setEditReview] = useState();
  const movieId = pathname.split("/")[2];

  const downloadReviews = () => {
    // Fetch the normal reviews
    findReviewByMovieIdAndType(movieId, "NORMAL").then((res) => {
      const resArr = Review.getListFromJsonArray(res);
      setNormalReview(resArr);
    });
    // Fetch the critic reviews
    findReviewByMovieIdAndType(movieId, "CRITIC").then((res) => {
      const resArr = Review.getListFromJsonArray(res);
      setCriticUserReview(resArr);
    });
  };

  const addToMyWatchlist = async () => {
    await toggleMovieInWatchlist(user.id, movie.id, movie);
  };

  useEffect(() => {
    movieService
      .getMovieDetailsById(movieId)
      .then((movieData) => {
        let mov = Movie.getListFromJsonArray([movieData]);
        let movieModel = mov[0];
        setMovie(movieModel);
        // Fetch the similar movies as well
        movieService.getSimilarMovies(movieId).then((res) => {
          const moviesList = Movie.getListFromJsonArray(res.results);
          // we only want to show 6 movies as similar, but api does not allow it
          moviesList.length = 6;
          setSimilarMovies(moviesList);
        });
        downloadReviews();
      })
      .catch((err) => {
        // Cannot fetch details of that movie, navigate to home
        navigate("/");
      });
  }, [movieId]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSave = (dbReview) => {
    downloadReviews();
    handleClose();
  };

  const onUpdate = (reviewItem) => {
    setEditReview(reviewItem);
    handleShow();
  };

  const onDelete = () => {
    downloadReviews();
  };

  return (
    <div>
      <Header />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!!user && user.accountType === "NORMAL" && (
            <UserReviewsForm
              movieId={movieId}
              onSave={onSave}
              reviewItem={editedReview}
            />
          )}
          {!!user && user.accountType === "CRITIC" && (
            <CriticUserReviewForm
              movieId={movieId}
              onSave={onSave}
              reviewItem={editedReview}
            />
          )}
          {!user && (
            <p className="text-muted">
              You need to be logged in to add the review
            </p>
          )}
        </Modal.Body>
      </Modal>
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
                    <small>IMDB Votes: {movie.voteCount}</small>
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
                    <span
                      key={`gen-${gen.id}`}
                      className="badge bg-secondary ms-2"
                    >
                      {gen.name}
                    </span>
                  );
                })}
            </p>
            <button
              className="btn btn-success rounded-pill mt-3"
              onClick={addToMyWatchlist}
            >
              <i className="fa fa-list"></i>{" "}
              <span className="ps-2">Add to my watchlist</span>
            </button>
          </div>
        </div>
        <div className="row mt-4 bg-light">
          {/* Here will go the review section, critic and normal user*/}
          <div className="col-6 p-3">
            <div className="d-flex flex-row">
              <h5 className="fw-bold mb-3 flex-fill text-capitalize">
                Critic Reviews{" "}
                <small className="text-muted ps-2">
                  <i className="fa fa-arrow-right"></i>
                </small>
              </h5>
              {!!user && user.accountType === "CRITIC" && (
                <div>
                  <button
                    className="btn btn-sm btn-success rounded-pill ps-3 pe-3"
                    onClick={handleShow}
                  >
                    Add New
                  </button>
                </div>
              )}
            </div>
            <ReviewList
              reviewList={criticUserReview}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          </div>
          <div className="col-6 p-3">
            <div className="d-flex flex-row">
              <h5 className="fw-bold mb-3 flex-fill text-capitalize">
                User Reviews{" "}
                <small className="text-muted ps-2">
                  <i className="fa fa-arrow-right"></i>
                </small>
              </h5>
              {(!user || user.accountType === "NORMAL") && (
                <div>
                  <button
                    className="btn btn-sm btn-success rounded-pill ps-3 pe-3"
                    onClick={handleShow}
                  >
                    Add New
                  </button>
                </div>
              )}
            </div>
            <ReviewList
              reviewList={normalUserReview}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
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
