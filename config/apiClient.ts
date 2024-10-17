import axios, { AxiosInstance } from "axios";
import { jwtDecode } from "jwt-decode";
import refreshAccessToken from "./refreshAccessToken";

interface DecodedToken {
  exp: number;
}

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    let accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return config;
    }

    const decodedToken: DecodedToken = await jwtDecode(accessToken);
    const currentTime = Date.now();

    if (decodedToken?.exp * 1000 - currentTime < 60 * 1000) {
      accessToken = await refreshAccessToken();
    }
    localStorage.setItem("accessToken", accessToken || "");
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
