import axios from "axios";

const GITHUB_API_BASE = "https://api.github.com";

const api = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: {
    Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY 
      ? `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
      : "",
  },
});

export const searchUser = async (username) => {
  return api.get(`/users/${username}`);
};
