import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    alerts: []
}

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    createAlert: (state, action) => {
      state.alerts.push({
        message: action.payload.message,
        type: action.payload.type
      });
    }
  },
  /* extraReducers: {
    [extraAction]: (state, action) => {
      state.alerts.push({ message: action.error.message, type: "error" });
    }
  } */
});

export const { createAlert } = alertSlice.actions;
export default alertSlice.reducer;