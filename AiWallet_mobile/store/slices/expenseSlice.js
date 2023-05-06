import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenseAmount: "",
    expenseDate: "",
    expenseCategory: "",
    expenceDescription: "",
};

const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        setExpenseAmount: (state, action) => {
            state.expenseAmount = action.payload;
        },
        setExpenseDate: (state, action) => {
            state.expenseDate = action.payload;
        },
        setExpenseCategory: (state, action) => {
            state.expenseCategory = action.payload;
        },
        setExpenceDescription: (state, action) => {
            state.expenceDescription = action.payload;
        },
    },
});

export const {
    setExpenseAmount,
    setExpenseDate,
    setExpenseCategory,
    setExpenceDescription,
} = expenseSlice.actions;

export default expenseSlice.reducer;
