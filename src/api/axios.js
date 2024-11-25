import axios from "axios";

export const backendUrl = axios.create({
  baseURL: "http://localhost:8080",
});

export const setAuth = (token) => {
  backendUrl.defaults.headers.common["Authorization"] = `Basic ${token}`;
};
