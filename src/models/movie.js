/**
 * A movie class that represents data for single
 * movie item.
 */
class Movie {
  constructor(name, imageURL, genres, backdrop, overview, popularity, releaseDate, voteCount) {
    if (this.name === null || this.imageURL === null) {
      throw new Error('Name and url cannot be empty');
    }
    this.name = name;
    this.imageURL = imageURL;
    this.backdropImage = backdrop;
    this.overview = overview;
    this.popularity = popularity || 0;
    this.releaseDate = releaseDate;
    this.voteCount = voteCount;
    this.genres = [];
    if (genres) {
      this.genres.push(genres);
    }
  }

  get name() {
    return this.name;
  }

  get imageURL() {
    return this.imageURL;
  }

  get backdropImage() {
    return this.backdropImage;
  }
  get overview() {
    return this.overview;
  }
  get popularity() {
    return this.popularity;
  }
  get releaseDate() {
    return this.releaseDate;
  }
  get voteCount() {
    return this.voteCount;
  }
  get genres() {
    return this.genres;
  }
}