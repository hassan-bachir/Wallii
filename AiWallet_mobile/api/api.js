// src/api/api.js
import axios from "axios";

const API_BASE_URL = "https://your-api-base-url.com";

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
