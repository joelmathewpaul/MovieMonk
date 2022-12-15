import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASES;
const USER_API = `${API_BASE}/user`;

const api = axios.create({
                             withCredentials: true
                         });


export const findAllFollowers = async (userId) => {
    const response = await api.get(`${USER_API}/${userId}/followers/`);
    return response.data
}

export const findAllFollowing = async (user) => {
    const response = await api.get(`${USER_API}/${user._id}/following/`);
    return response.data
}

export const addFollowing = async (user) => {
    const response = await api.post(`${USER_API}/add/${user._id}/`, user);
    return response.data
}

export const deleteFollowing = async (user) => {
    const response = await api.delete(`${USER_API}/delete/${user._id}`, user);
    return response.data
}

