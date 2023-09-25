import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ordersData: [],
};

export const counterSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrders: (state, action) => {
      state.ordersData = action.payload;
    },
  },
});

export const { addOrders } = counterSlice.actions;

export default counterSlice.reducer;
