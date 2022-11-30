import React from "react";
import Rating from "./rating";
const MovieListItem = ({ movie }) => {
    return (
        <div className="mv-card pt-3">
            <div className="position-relative p-15 rounded-3">
                <div className="d-flex flex-row">
                    <div className="thumbnail-holder position-relative">
                        <div className="card-img position-absolute rounded-3">
                            <img src={movie.image} alt={movie.title} />
                        </div>
                    </div>
                    <div className="movie-content ms-3 pt-2">
                        <p className="m-0 text-black">{movie.title}</p>
                        <p className="m-0 text-muted"><small>By: {movie.director}</small></p>
                        <p className="m-0 text-muted"><small><i className="fa-solid text-warning fa-star pe-1" /> {movie.ratings}</small></p>
                        <div className="mt-2">
                            <p className="m-0 text-muted"><small>Votes: {movie.votes}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default MovieListItem;

