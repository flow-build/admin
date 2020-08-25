import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
});

export const tokenSelector = (state) => state.auth.token;

export const setAuthHeader = (token) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default axiosInstance;
