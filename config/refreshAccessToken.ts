import apiClient from "./apiClient";

const refreshAccessToken = async () => {
  try {
    const response = await apiClient.post(
      "users/refresh",
      {},
      { withCredentials: true }
    );

    const { accessToken } = response.data;

    return accessToken;
  } catch (error) {
    console.error("Error refreshing access token", error);
  }
};

export default refreshAccessToken;
