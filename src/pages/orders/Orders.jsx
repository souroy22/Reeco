import React, { useState, useEffect } from "react";
import TableComponent from "../../components/table/Table";
import { columns, data } from "../../statisData/orders";
import { addOrders } from "../../redux/reducers/orderReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [columnsData, setColumnsData] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ordersData = useSelector((state) => state.orders.ordersData);

  const createData = (name, calories, fat, carbs, protein, status) => {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
      status,
    };
  };

  const initialLoad = () => {
    const ordersData = [];
    for (let i = 0; i < data.length; i++) {
      const d = createData(...data[i]);
      ordersData.push(d);
    }
    dispatch(addOrders(data));
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
