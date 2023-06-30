import axios from "axios";

const baseURL = 'http://localhost:5000/api/v1';

const instance = axios.create({
  baseURL: `${baseURL}`
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Get the token from localStorage
    const token = localStorage.getItem('token');

    // Add the token to the request headers
    if (token && token !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


export default instance;