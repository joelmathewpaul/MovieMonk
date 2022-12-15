export default class Review {
  constructor(
    id,
    reviewedBy,
    movieId,
    reviewTime,
    reviewTitle,
    reviewDetail,
    reviewRating,
    reviewType,
    actingRating,
    directionRating,
    cinematographyRating,
    soundtrackRating
  ) {
    this.id = id;
    this.reviewedBy = reviewedBy;
    this.movieId = movieId;
    this.reviewTime = reviewTime;
    this.reviewTitle = reviewTitle;
    this.reviewDetail = reviewDetail;
    this.reviewRating = reviewRating;
    this.reviewType = reviewType;
    this.actingRating = actingRating;
    this.directionRating = directionRating;
    this.cinematographyRating = cinematographyRating;
    this.soundtrackRating = soundtrackRating;
  }
  static getListFromJsonArray(results) {
    let vals = [];
    results.forEach((res) => {
      const review = new Review(
        res._id,
        res.reviewedBy,
        res.movieId,
        res.reviewTime,
        res.reviewTitle,
        res.reviewDetail,
        res.reviewRating,
        res.reviewType,
        res.actingRating,
        res.directionRating,
        res.cinematographyRating,
        res.soundtrackRating
      );
      vals.push(review);
    });
    return vals;
  }
}
