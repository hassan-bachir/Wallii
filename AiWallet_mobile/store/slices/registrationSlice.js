import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    aiAdvisorName: "",
};

const registrationSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {
        setSelectedAdvisor: (state, action) => {
            state.aiAdvisorName = action.payload;
        },
    },
});

export const { setSelectedAdvisor } = registrationSlice.actions;

export default registrationSlice.reducer;
