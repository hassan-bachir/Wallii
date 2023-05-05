import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import walletReducer from "./slices/walletSlice";
import registrationReducer from "./slices/registrationSlice";

const store = configureStore({
    reducer: {
        wallet: walletReducer,
        registration: registrationReducer,
        login: loginReducer,
    },
});

export default store;
