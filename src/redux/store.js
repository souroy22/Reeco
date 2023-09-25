import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./reducers/orderReducer";

export const store = configureStore({
  reducer: {
    orders: orderReducer,
  },
});
