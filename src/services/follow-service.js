import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASES;
const USER_API = `${API_BASE}/user`;

const api = axios.create({
  withCredentials: true,
});

/**
 * Finds all followers a particular user has.
 */
export const findAllFollowers = async (userId) => {
  const response = await api.get(`${USER_API}/${userId}/followers/`);
  return response.data;
};

/**
 * Finds all following users a particular user has.
 */
export const findAllFollowing = async (userId) => {
  const response = await api.get(`${USER_API}/${userId}/following/`);
  return response.data;
};

/**
 * Adds a user into the following list of a user.
 */
export const addFollowing = async (userId, followingId) => {
  const response = await api.post(
    `${USER_API}/${userId}/follows/${followingId}`
  );
  return response.data;
};

/**
 * Removes  a user from the following list.
 */
export const deleteFollowing = async (userId, followingId) => {
  const response = await api.delete(
    `${USER_API}/${userId}/unfollows/${followingId}`
  );
  return response.data;
};
