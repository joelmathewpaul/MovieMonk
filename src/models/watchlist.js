export default class Watchlist {
  constructor(id, addedBy, movieId, addTime) {
    this.id = id;
    this.addedBy = addedBy;
    this.movieId = movieId;
    this.addTime = addTime;
  }

  static getListFromJsonArray(results) {
    let vals = [];
    results.forEach((res) => {
      const watchlist = new Watchlist(
        res._id,
        res.addedBy,
        res.movieId,
        res.addTime
      );
      vals.push(watchlist);
    });
    return vals;
  }
}
