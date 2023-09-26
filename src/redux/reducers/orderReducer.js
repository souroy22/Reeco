import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ordersData: [],
  orderDetails: {},
};

export const counterSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrders: (state, action) => {
      state.ordersData = action.payload;
    },
    addOrderDetailsData: (state, action) => {
      state.orderDetails = action.payload;
    },
  },
});

export const { addOrders, addOrderDetailsData } = counterSlice.actions;

export default counterSlice.reducer;
