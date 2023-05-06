import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import walletReducer from "./slices/walletSlice";
import registrationReducer from "./slices/registrationSlice";
import expenseReducer from "./slices/expenseSlice";

const store = configureStore({
    reducer: {
        wallet: walletReducer,
        registration: registrationReducer,
        login: loginReducer,
        expense: expenseReducer,
    },
});

export default store;
