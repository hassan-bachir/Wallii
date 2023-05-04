import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const API_BASE_URL = "http://192.168.1.3:3000";

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.message === "Network Error") {
            console.error("Network error:", error);
        }
        return Promise.reject(error);
    }
);

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
//AUTH
export const registerUser = (userData) =>
    makeRequest("post", "/auth/register", userData);

export const loginUser = (credentials) =>
    makeRequest("post", "/auth/login", credentials);

//USER
export const getUserInfo = () => makeRequest("get", "/user");

export const updateUserInfo = (data) => makeRequest("put", "/user", data);

export const addGoal = (data) => makeRequest("post", "/user/goals", data);

export const getFinancialSummary = () =>
    makeRequest("get", "/user/financial-summary");

export const deleteGoal = (goalId) =>
    makeRequest("delete", `/user/goals/${goalId}`);

//WALLET
export const addWallet = (walletData) =>
    makeRequest("post", "/wallet", walletData);

export const deleteWallet = (walletId) =>
    makeRequest("delete", `/wallet/${walletId}`);

export const getUserWallets = () => makeRequest("get", "/wallet");

export const updateWallet = (walletId, walletData) =>
    makeRequest("put", `/wallet/${walletId}`, walletData);

export const getWallet = (walletId) =>
    makeRequest("get", `/wallet/${walletId}`);

export const addBudget = (walletId, budgetData) =>
    makeRequest("post", `/wallet/${walletId}/budget`, budgetData);

export const deleteBudget = (walletId) =>
    makeRequest("delete", `/wallet/${walletId}/budget`);

export const getWalletSummary = (walletId) =>
    makeRequest("get", `/wallet/${walletId}/summary`);

//transactions

// Add transaction
export const addTransaction = (walletId, transactionData) =>
    makeRequest("post", `/transaction/${walletId}`, transactionData);

// Get all transactions
export const getAllTransactions = (walletId) =>
    makeRequest("get", `/transaction/${walletId}`);

// Get transaction by ID
export const getTransactionById = (transactionId) =>
    makeRequest("get", `/transaction/byid/${transactionId}`);

// Update transaction
export const updateTransaction = (transactionId, transactionData) =>
    makeRequest("put", `/transaction/${transactionId}`, transactionData);

// Delete transaction
export const deleteTransaction = (transactionId) =>
    makeRequest("delete", `/transaction/${transactionId}`);

// Get transactions grouped by date
export const getTransactionsByDate = (walletId) =>
    makeRequest("get", `/transaction/${walletId}/by-date`);

export default apiClient;
