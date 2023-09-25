import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Orders from "./pages/orders/Orders";
import Store from "./pages/store/Store";
import Analytics from "./pages/analytics/Analytics";
import LayoutSection from "./components/layout";
import OrderDetails from "./pages/orders/OrderDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutSection />}>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/orders/:orderId" element={<OrderDetails />} />
      <Route path="store" element={<Store />} />
      <Route path="analytics" element={<Analytics />} />
    </Route>
  )
);

export default router;
