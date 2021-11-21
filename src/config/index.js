import axios from 'axios';

// create base url
export const API = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
});
