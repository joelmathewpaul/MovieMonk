import React from "react";
import Rating from "./rating";
const MovieListItem = (
    {
        movie = {
            "title": "Black Panther",
            "director": "Ryan Coogler",
            "ratings": 4,
            "votes": "1,987,765",
            "image": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
            "description": "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa."
        }
    }
) => {
    return (
        <div className="mv-card pt-3">
            <div className="position-relative bg-white p-15 rounded-3">
                <div className="d-flex flex-row">
                    <div className="thumbnail-holder position-relative">
                        <div className="card-img position-absolute rounded-3">
                            <img src={movie.image} alt={movie.title} />
                        </div>
                    </div>
                    <div className="movie-content ms-3 pt-2">
                        <p className="m-0">{movie.title}</p>
                        <p className="m-0 text-muted"><small>By: {movie.director}</small></p>
                        <div className="mt-2">
                            <Rating ratings={4} />
                            <p className="m-0 text-muted"><small>votes: {movie.votes}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default MovieListItem;

