import axios from "axios";
import type { AxiosInstance } from "axios";


const api: AxiosInstance = axios.create({
  baseURL: "http://vipl.local/api",
  withCredentials: false,
});

window.api = api;

export default api;
