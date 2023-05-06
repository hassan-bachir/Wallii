import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenseAmount: "",
    expenseDate: "",
    expenseCategory: "",
    expenseDescription: "",
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
        setExpenseData: (state, action) => {
            const { amount, date, category, description } = action.payload;
            state.expenseAmount = amount;
            state.expenseDate = date;
            state.expenseCategory = category;
            state.expenseDescription = description;
        },
    },
});

export const {
    setExpenseAmount,
    setExpenseDate,
    setExpenseCategory,
    setExpenceDescription,
    setExpenseData,
} = expenseSlice.actions;

export default expenseSlice.reducer;
