import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const USER_API = `${API_BASE}/user`;
const api = axios({
                      withCredentials : true
                  }
);

/**
 * Finds user profile when user clicks on "My Profile".
 * @returns user object
 */
export const findUser = async () => {
    const response = await api.get(USER_API);
    const user = response.data;
    return user;
}


/**
 * Update Updates the user info. todo: need to be called when the user clicks on edit-profile.
 * @param user
 * @returns {Promise<*>}
 */
export const updateUser = async (user) => {
    const response = await api.put(`${USER_API}/${user._id}`, user);
    return user;
}
