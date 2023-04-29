import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import walletReducer from "./slices/walletSlice";
import transactionReducer from "./slices/transactionSlice";
import registrationReducer from "./slices/registrationSlice";

const store = configureStore({
    reducer: {
        wallet: walletReducer,
        transaction: transactionReducer,
        registration: registrationReducer,
        login: loginReducer,
    },
});

export default store;
