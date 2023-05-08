import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import walletReducer from "./slices/walletSlice";
import registrationReducer from "./slices/registrationSlice";
import expenseReducer from "./slices/expenseSlice";
import userReducer from "./slices/userSlice";
const store = configureStore({
    reducer: {
        wallet: walletReducer,
        registration: registrationReducer,
        login: loginReducer,
        expense: expenseReducer,
        user: userReducer,
    },
});

export default store;
