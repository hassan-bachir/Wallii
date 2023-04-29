import { configureStore } from "@reduxjs/toolkit";

import walletReducer from "./slices/walletSlice";
import transactionReducer from "./slices/transactionSlice";
import registrationReducer from "./slices/registrationSlice";

const store = configureStore({
    reducer: {
        wallet: walletReducer,
        transaction: transactionReducer,
        registration: registrationReducer,
    },
});

export default store;
