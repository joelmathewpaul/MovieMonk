import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASES;
const USER_API = `${API_BASE}/user`;

const api = axios.create({
  withCredentials: true,
});

/**
 * Finds user profile when user clicks on "My Profile".
 * @returns List of user object.
 */
export const searchUser = async (query) => {
  const response = await api.get(`${USER_API}/search/${query}`);
  const user = response.data;
  return user;
};

/**
 * Finds the single user based on the user id.
 * @param {Number} userid The user id of the object being fetched.
 * @returns User object
 */
export const getUserById = async (userid) => {
  const response = await api.get(`${USER_API}/${userid}`);
  const user = response.data;
  return user;
};

/**
 * Update Updates the user info. todo: need to be called when the user clicks on edit-profile.
 * @param user
 * @returns User object
 */
export const updateUser = async (user) => {
  const response = await api.put(`${USER_API}/${user._id}`, user);
  return response.data;
};

/**
 * Return all the users in the database.
 */
export const findAllUsers = async () => {
  const response = await api.get(`${API_BASE}/admin/users`);
  return response.data;
};
