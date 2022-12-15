import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASES;
const USER_API = `${API_BASE}/user`;

const api = axios.create({
                             withCredentials: true
                         });


export const findAllFollowers = async (user) => {
    const response = await api.post(`${USER_API}/${user._id}`, user);
    return response.data
}

//
// findAllFollowers(req: Request, res: Response): void;
// findAllFollowing(req: Request, res: Response): void;
// addFollowing(req: Request, res: Response): void;
// deleteFollowing(req: Request, res: Response): void;
