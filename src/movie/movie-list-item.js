import React from "react";
const MovieListItem = (
    {
        movie = {
            "title": "Black Panther",
            "director": "Ryan Coogler",
            "ratings": 4,
            "votes": "1,987,765",
            "image": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
            "description":"The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa."
        }
    }
) => {

    return(
            <div className="row border-dark">
                <div className="col-3">
                    <img width={200} className="float-end rounded-3" src={movie.image} alt={`movie thumbnail`}/>
                </div>
                <div className="col-9">
                    <div>{movie.title}</div>
                    <div className={`text-muted`}>by {movie.director}</div>
                    <div>
                        {/*<span>configure stars here</span>*/}
                        <span className={'text-secondary'}>{movie.votes}</span> votes
                    </div>
                    <div className={'text-secondary'}>{movie.description}</div>
                </div>
            </div>

    );
};
export default MovieListItem;

