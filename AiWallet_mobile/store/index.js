import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import walletReducer from "./slices/walletSlice";
import transactionReducer from "./slices/transactionSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        wallet: walletReducer,
        transaction: transactionReducer,
    },
});

export default store;
