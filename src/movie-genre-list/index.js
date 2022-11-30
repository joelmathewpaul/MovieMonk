import React from "react";
import MovieList from "../movie-list";

const MovieGenreList = ({ genre, movieList = [] }) => {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-3">{genre} <small className="text-muted"><i className="fa fa-arrow-right" ></i></small></h5>
      <MovieList movieList={movieList} />
    </div>
  );
}

export default MovieGenreList;