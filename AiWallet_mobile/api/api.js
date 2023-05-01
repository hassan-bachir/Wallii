import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_BASE_URL = "http://192.168.1.3:3000";

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const setAuthToken = async () => {
    try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            apiClient.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${token}`;
        } else {
            delete apiClient.defaults.headers.common["Authorization"];
        }
    } catch (error) {
        console.error("Error setting auth token:", error);
    }
};

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
