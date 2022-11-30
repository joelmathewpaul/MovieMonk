import React from "react";
import './index.css';
import MovieListItem from "./movie-list-item";

/**
 * represents a movie list displayed as slideshow on the screen.
 * @returns {JSX.Element}
 * @constructor
 */
const MovieList = ({ movieList = [] }) => {

    return (
        <div className="row">
            {
                movieList.map((movie, index) => {
                    return (
                        <div className="col-lg-4 mt-3">
                            <MovieListItem movie={movie} />
                        </div>
                    )
                })
            }
        </div>
    );
};
export default MovieList;