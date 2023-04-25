import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedAdvisor: "",
};

const registrationSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {
        setSelectedAdvisor: (state, action) => {
            state.selectedAdvisor = action.payload;
        },
    },
});

export const { setSelectedAdvisor } = registrationSlice.actions;

export default registrationSlice.reducer;
