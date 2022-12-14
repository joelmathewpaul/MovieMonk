import axios from "axios";

/**
 * The API base that is to be changed to the server in the future.
 */
const API_BASE = process.env.REACT_APP_API_BASES;

const api = axios.create({ withCredentials: true });

/**
 * Responsible for adding new reviews into the database
 * @param {userReview} newReview passes in the new review that is to be added to the database
 * @returns the newly added review as the result to the user
 */
export const createReview = async (newReview) => {
  const response = await api.post(`${API_BASE}/movie/reviews`, newReview);
  return response.data;
};

/**
 * Responsible for finding all the reviews for a particular movie.
 * @param {Number} mId passes in the id of the movie whos reviews are to be retreived.
 * @returns the retrieved reviews for the movie.
 */
export const findReviewByMovieId = async (mId) => {
  const response = await api.get(`${API_BASE}/movie/reviews/${mId}`);
  const review = response.data;
  return review;
};

/**
 * Responsible for finding all the reviews made by a particular user.
 * @param {Number} uId passes in the user id whos reviews are to be fetched.
 * @returns the reviews made by a particular user.
 */
export const findReviewByUserId = async (uId) => {
  const response = await api.get(`${API_BASE}/user/reviews/${uId}`);
  const review = response.data;
  return review;
};

/**
 * Responsible for updating  a particular review by finding it using it's id.
 * @param {Number} rId passes in the id of the review.
 * @param {userReview} updatedReview passes in the updated review content.
 * @returns the newly added review.
 */
export const updateReviewById = async (rId, updatedReview) => {
  const response = await api.put(
    `${API_BASE}/movie/reviews/${rId}`,
    updatedReview
  );
  return response.data;
};

/**
 * Responsible for deleting a review by findind it using Id.
 * @param {Number} rId passes in the id of the review that is to be deleted.
 * @returns the deleted review to the user.
 */
export const deleteReviewByID = async (rId) => {
  const response = await api.delete(`${API_BASE}/movie/reviews/${rId}`);
  return response.data;
};
