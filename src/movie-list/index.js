import React from "react";
import './index.css';
import MovieListItem from "./movie-list-item";

/**
 * represents a movie list displayed as slideshow on the screen.
 * @constructor
 */
const MovieList = ({ movieList = [], onDelete }) => {

    return (
        <div className="row g-3">
            {
                movieList.map((movie, index) => {
                    return (
                        <div key={`${movie.id}-${index}`} className="col-md-6 col-xl-4 mt-3">
                            <MovieListItem movie={movie} onDelete={onDelete} />
                        </div>
                    )
                })
            }
        </div>
    );
};
export default MovieList;