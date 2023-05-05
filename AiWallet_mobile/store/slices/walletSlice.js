import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentWalletId: "",
    currentTransactionId: "",
};

const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        setCurrentWalletId: (state, action) => {
            state.currentWalletId = action.payload;
        },
        setCurrentTransactionId: (state, action) => {
            state.currentTransactionId = action.payload;
        },
    },
});

export const { setCurrentWalletId, setCurrentTransactionId } =
    walletSlice.actions;

export default walletSlice.reducer;
