import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;

const api = axios.create({
  withCredentials: true
});

/**
 * Signs the userin using username and password.
 * 
 * @param {user} user containing email and password.
 * 
 * @returns User on successful login else throws and error
 */
export const signin = async (user) => {
  const response = await api.post(`${API_BASE}/auth/signin`, user);
  return response.data
}


/**
 * Signs up the using username and password, name and other details.
 * 
 * @param {User} user The user object that needs to be created.
 * {
 *   username,
 *   password,
 *   name,
 *   accountType,
 * }
 * 
 * @returns User on successful signup else throws and error
 */
export const signup = async (user) => {
  const response = await api
    .post(`${API_BASE}/auth/signup`, user);
  return response.data
}

/**
 * Fetches the profile details of the current logged in user.
 * @returns Returns the user object or returns null
 */
export const profile = async () => {
  const response = await api
    .get(`${API_BASE}/auth/profile`);
  return response.data
}

/**
 * Signs out the user from current user from session.
 */
export const signOut = async () => {
  const response = await api
    .post(`${API_BASE}/auth/signout`);
  return response.data
}
