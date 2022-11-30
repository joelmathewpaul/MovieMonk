import React from "react";
import './index.css';
import MovieListItem
    from "./movie-list-item";

const movieData = {
    "title": "Black Panther",
    "director": "Ryan Coogler",
    "ratings": 4,
    "votes": "1,987,765",
    "image": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
    "description": "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa."
}
/**
 * represents a movie list displayed as slideshow on the screen.
 * @returns {JSX.Element}
 * @constructor
 */
const MovieList = () => {

    // todo create the map of movie list Item here
    // default calling for now
    return <MovieListItem movie={movieData} />
};
export default MovieList;