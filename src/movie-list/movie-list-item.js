import React from "react";
import { useNavigate } from "react-router";

const MovieListItem = ({ movie, onDelete }) => {
    const navigate = useNavigate();
    const onMovieItemClick = () => {
        let nameEncoded = movie.name.replace(/\s/g, "-").toLowerCase();
        navigate(`/movie/${movie.id}/${nameEncoded}`);
    }

    const onDeleteClicked = (e) => {
        e.stopPropagation();
        if (onDelete && typeof onDelete === 'function') {
            onDelete(movie);
        }
    }


    return (
        <div className="mv-card pt-3" title={movie.name} onClick={onMovieItemClick}>
            <div className="p-15 rounded-3">
                {!!onDelete &&
                    <div className="position-relative">
                        <i className="position-absolute fa fa-times p-2 text-muted" title="Remove" style={{ right: -10 }} onClick={onDeleteClicked} />
                    </div>
                }
                <div className="d-flex flex-row">
                    <div className="thumbnail-holder position-relative">
                        <div className="card-img position-absolute rounded-3">
                            <img src={movie.imageURL} alt={movie.name} />
                        </div>
                    </div>
                    <div className="movie-content ms-3 pt-2">
                        <p className="m-0 text-black restrict-text">{movie.name}</p>
                        <p className="m-0 text-muted"><small>Release: {movie.releaseDate}</small></p>
                        <p className="m-0 text-muted"><small><i className="fa-solid text-warning fa-star pe-1" /> 4</small></p>
                        <div className="mt-2">
                            <p className="m-0 text-muted"><small>IMDB Votes: {movie.voteCount}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default MovieListItem;

