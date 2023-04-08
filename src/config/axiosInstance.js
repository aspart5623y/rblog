import axios from "axios";
import { jsonPlaceholder } from "./env";

// Set config defaults when creating the instance
const axiosInstance = axios.create({
  baseURL: jsonPlaceholder.url,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptors if needed
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Modify the request config here
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Add response interceptors if needed
// axiosInstance.interceptors.response.use(
//   (response) => {
//     // Handle successful responses here
//     return response;
//   },
//   (error) => {
//     // Handle error responses here
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;