import React, { useEffect } from "react";
import "./orders.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addOrderDetailsData } from "../../redux/reducers/orderReducer";
import { fetchOrderDetails } from "../../utils/fetchOrderDetails";
import CustomInput from "../../components/input/CustomInput";

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orders.orderDetails);
  console.log("orderDetails", orderDetails);

  useEffect(() => {
    const orderData = fetchOrderDetails(orderId);
    dispatch(addOrderDetailsData(orderData));
  }, []);

  return (
    <div className="orders-details-section">
      <div className="orders-details-top-section">
        <div className="orders-details-section-top">
          <Link to="/orders" style={{ textDecoration: "none", color: "gray" }}>
            Orders
          </Link>{" "}
          {">"} <span className="order-id-styling">Order {orderId}</span>
        </div>
        <div className="orders-details-section-bottom">
          <div className="orders-details-section-bottom-left">
            Order {orderId}
          </div>
          <div className="orders-details-section-bottom-right">
            <Button
              variant="outlined"
              color="success"
              size="small"
              sx={{ borderRadius: "20px" }}
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="success"
              size="small"
              sx={{ borderRadius: "20px" }}
            >
              Approve Order
            </Button>
          </div>
        </div>
      </div>
      <div className="order-details-down-section">
        <div className="orders-details-mid-section">
          <div className="order-small-section">
            <div className="order-small-section-title">Supplier</div>
            <div className="order-small-section-value">
              {orderDetails?.supplier}
            </div>
          </div>
          <div className="order-small-section">
            <div className="order-small-section-title">Shipping Date</div>
            <div className="order-small-section-value">
              {orderDetails?.shippingDate}
            </div>
          </div>
          <div className="order-small-section">
            <div className="order-small-section-title">Total</div>
            <div className="order-small-section-value">
              {orderDetails?.totalCost}
            </div>
          </div>
          <div className="order-small-section">
            <div className="order-small-section-title">Category</div>
            <div className="order-small-section-value">Icons</div>
          </div>
          <div className="order-small-section">
            <div className="order-small-section-title">Department</div>
            <div className="order-small-section-value">
              {orderDetails?.department}
            </div>
          </div>
          <div className="order-small-section">
            <div className="order-small-section-title">Status</div>
            <div className="order-small-section-value">
              Awaiting your<br></br> approval
            </div>
          </div>
        </div>
        <div className="orders-details-bottom-section">
          <div className="orders-details-bottom-section-top">
            <div>
              <CustomInput />
            </div>
            <div className="orders-details-bottom-section-top-right">
              <Button
                variant="outlined"
                color="success"
                size="small"
                sx={{ borderRadius: "20px" }}
              >
                Add Item
              </Button>
              <LocalPrintshopOutlinedIcon color="success" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
