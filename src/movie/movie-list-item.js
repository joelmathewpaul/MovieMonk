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
            <div className="card border-0 mt-2">
                <div className={'card-body bg-light rounded-2'}>
                    <div className="card-img">
                        <img width={"200"} className="float-start wd-thumbnail" src={movie.image} alt={`movie thumbnail`}/>
                    </div>
                    <div className="p-2 mb-3 wd-float-right">
                        <div className={'h4 card-title'}>{movie.title}</div>
                        <div className={`card-subtitle text-muted`}>by {movie.director}</div>
                        <div className={'pt-3'}>
                            <span className={"text-warning"}>
                            {[...Array(movie.ratings)].map(i => <i className="fa-solid fa-star pe-1"/>
                            ) }
                            </span>
                            <span className={"text-warning"}>
                            {[...Array(5-movie.ratings)].map(i => <i className="fa-regular fa-star pe-1"/>
                            ) }
                            </span>
                            <span className={'text-secondary ps-3'}>{movie.votes} votes</span>
                        </div>
                        <div className={'card-text text-success pt-3'}>{movie.description}</div>
                    </div>
                </div>


            </div>

    );
};
export default MovieListItem;

