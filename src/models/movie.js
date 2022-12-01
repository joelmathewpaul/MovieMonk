/**
 * A movie class that represents data for single
 * movie item.
 */
export default class Movie {
  constructor(id, name, imageURL, backdrop, overview, popularity, releaseDate, voteCount) {
    if (this.name === null || this.imageURL === null) {
      throw new Error('Name and url cannot be empty');
    }
    this.id = id;
    this.name = name;
    this.imageURL = imageURL;
    this.backdropImage = backdrop;
    this.overview = overview;
    this.popularity = popularity || 0;
    this.releaseDate = releaseDate;
    this.voteCount = voteCount;
  }

  static getListFromJsonArray(results) {
    let vals = [];
    results.forEach(res => {
      const mov = new Movie(res.id, res.title, `https://image.tmdb.org/t/p/w500${res.poster_path}`, `https://image.tmdb.org/t/p/w500${res.backdrop_path}`, res.overview, res.popularity, res.release_date, res.vote_count);
      vals.push(mov);
    });
    return vals;
  }
}