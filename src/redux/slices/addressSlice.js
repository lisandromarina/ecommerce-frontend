import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addresses: []
}

export const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        setAddresses: (state, actions) => {
            state.addresses = [...state.addresses, ...actions.payload]
        },
        clearAddresses: (state) => {
            state.addresses = []
        }
    }
});

export const { setAddresses, clearAddresses } = addressSlice.actions;
export default addressSlice.reducer;