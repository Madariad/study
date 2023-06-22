import axios from "axios";

const baseURL = 'http://localhost:5000/api/v1';

const instance = axios.create({
  baseURL: `${baseURL}`
});

export default instance;