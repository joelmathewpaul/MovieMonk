import { Route, Routes } from "react-router";
import Header from "../header";
import Navigation from "../navigation";
import MovieGenreList from "../movie-genre-list";


const movieData = [{
  "title": "Black Panther",
  "director": "Ryan Coogler",
  "ratings": 4,
  "votes": "1,987,765",
  "image": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
  "description": "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa."
},
{
  "title": "Black Panther",
  "director": "Ryan Coogler",
  "ratings": 4,
  "votes": "1,987,765",
  "image": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
  "description": "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa."
},
{
  "title": "Black Panther",
  "director": "Ryan Coogler",
  "ratings": 4,
  "votes": "1,987,765",
  "image": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
  "description": "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa."
},
{
  "title": "Black Panther",
  "director": "Ryan Coogler",
  "ratings": 4,
  "votes": "1,987,765",
  "image": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
  "description": "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa."
},
{
  "title": "Black Panther",
  "director": "Ryan Coogler",
  "ratings": 4,
  "votes": "1,987,765",
  "image": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
  "description": "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa."
},
{
  "title": "Black Panther",
  "director": "Ryan Coogler",
  "ratings": 4,
  "votes": "1,987,765",
  "image": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
  "description": "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa."
},
{
  "title": "Black Panther",
  "director": "Ryan Coogler",
  "ratings": 4,
  "votes": "1,987,765",
  "image": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
  "description": "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa."
}];


const Home = () => {
  return (
    <div>
      <Header />
      <div className="container bg-white rounded-3 overflow-hidden">
        <div className="row">
          <div className="col-md-3 pt-3 pb-3">
            <Navigation />
          </div>
          <div className="col-md-9 pt-3 pb-3 bg-light">
            <MovieGenreList movieList={movieData} genre="Top Grossing" />
            <MovieGenreList movieList={movieData} genre="Recent Releases" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;