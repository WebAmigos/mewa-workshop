import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: API_KEY,
  },
});
