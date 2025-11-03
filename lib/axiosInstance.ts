import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://backend-4ope.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
