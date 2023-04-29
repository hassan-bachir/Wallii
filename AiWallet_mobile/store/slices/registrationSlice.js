import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    aiAdvisorName: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
};

const registrationSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {
        setSelectedAdvisor: (state, action) => {
            state.aiAdvisorName = action.payload;
        },
        setFirstName: (state, action) => {
            state.name = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    },
});

export const {
    setSelectedAdvisor,
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
} = registrationSlice.actions;

export default registrationSlice.reducer;
