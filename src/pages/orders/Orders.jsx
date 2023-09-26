import React, { useState, useEffect } from "react";
import TableComponent from "../../components/table/Table";
import { columns, data, statusBtnColor } from "../../statisData/orders";
import { addOrders } from "../../redux/reducers/orderReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const CustomButton = (status) => {
  console.log("Status", status);
  return (
    <Button variant="contained" color={statusBtnColor[status]}>
      {status}
    </Button>
  );
};

const Orders = () => {
  const [columnsData, setColumnsData] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ordersData = useSelector((state) => state.orders.ordersData);

  const createOrderData = (
    orderId,
    supplier,
    shippingDate,
    totalCost,
    department,
    status,
    orderProducts
  ) => {
    return {
      orderId,
      supplier,
      shippingDate,
      totalCost,
      department,
      status: { ...status, btnComponent: CustomButton },
      orderProducts,
    };
  };

  const initialLoad = () => {
    const ordersData = [];
    for (let i = 0; i < data.length; i++) {
      const d = createOrderData(...data[i]);
      ordersData.push(d);
    }
    dispatch(addOrders(ordersData));
    setColumnsData(columns);
  };

  const onClickOnRow = (orderId) => {
    navigate(`/orders/${orderId}`);
  };

  useEffect(() => {
    initialLoad();
  }, []);

  return (
    <div className="orders-section">
      <TableComponent
        data={ordersData}
        columns={columnsData}
        onClickOnRow={onClickOnRow}
      />
    </div>
  );
};

export default Orders;
