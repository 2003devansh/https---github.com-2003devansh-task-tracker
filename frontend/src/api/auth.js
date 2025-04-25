import axios from './axiosInstance' ;

export const registerUser = async (userData) => {
    const res = await axios.post('/users/register', userData);
    return res.data;
};
  
  // POST /api/auth/login
export const loginUser = async (credentials) => {
    const res = await axios.post('/users/login', credentials);
    return res.data;
};