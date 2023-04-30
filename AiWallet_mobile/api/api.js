import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

const makeRequest = async (method, endpoint, data) => {
    try {
        const response = await apiClient({
            method: method,
            url: endpoint,
            data: data,
        });
        return response.data;
    } catch (error) {
        console.error(`Error ${method} ${endpoint}:`, error);
        throw error;
    }
};

export const registerUser = (userData) =>
    makeRequest("post", "/auth/register", userData);

export const loginUser = (credentials) =>
    makeRequest("post", "/auth/login", credentials);

export default apiClient;
