import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const MOVIE_API = `${API_BASE}/movie`;
//change to user api /user
/**
 * Creates user on sign up. TODO: use this method upon sign up
 * @param user
 * @returns {Promise<any>}
 */
export const createUser = async (user) => {
    const response = await axios.post(MOVIE_API, user)
    return response.data;
}

/**
 * Finds user profile when user clicks on "My Profile".
 * @returns user object
 */
export const findUser = async () => {
    const response = await axios.get(MOVIE_API);
    const user = response.data;
    return user;
}

/**
 * Delete user account using unique id. TODO
 * @param uid
 * @returns {Promise<any>}
 */
export const deleteUser = async (uid) => {
    const response = await axios
        .delete(`${MOVIE_API}/${uid}`)
    return response.data
}

/**
 * Update Updates the user info. todo: need to be called when the user clicks on edit-profile.
 * @param user
 * @returns {Promise<*>}
 */
export const updateProfile = async (user) => {
    const response = await axios
        .put(`${MOVIE_API}/${user._id}`, user);
    return user;
}
