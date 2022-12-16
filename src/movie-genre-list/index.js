import React from "react";
import MovieList from "../movie-list";

/**
 * Responsible for maintaining different Genre of movies.
 */
const MovieGenreList = ({ genre, movieList = [] }) => {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-3 text-capitalize">
        {genre}{" "}
        <small className="text-muted ps-2">
          <i className="fa fa-arrow-right"></i>
        </small>
      </h5>
      <MovieList movieList={movieList} />
    </div>
  );
};

export default MovieGenreList;
