import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30000,
  timeoutErrorMessage: "Server timed out ...",
  responseType: "json",
});

export default axiosInstance;
