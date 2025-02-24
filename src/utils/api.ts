import axios from "axios";

const api = axios.create({
  baseURL: process.env.VITE_USER_API as string, 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
