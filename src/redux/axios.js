import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://ec2co-ecsel-669libzkr7pr-986034389.us-east-1.elb.amazonaws.com:3000',
});

export const tokenSelector = (state) => state.auth.token;

export const setAuthHeader = (token) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default axiosInstance;
