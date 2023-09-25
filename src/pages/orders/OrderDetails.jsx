import React from "react";
import "./orders.css";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  console.log("orderId", orderId);

  return (
    <div className="orders-details-section">
      <div className="orders-details-top-section">
        <div className="orders-details-section-top">
          Orders {">"} <span className="order-id-styling">Order {orderId}</span>
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
      <div className="orders-details-mid-section">
        <div className="order-small-section">
          <div className="order-small-section-title">Supplier</div>
          <div className="order-small-section-value">
            East coast Fruit <br></br>& vegetables
          </div>
        </div>
        <div className="order-small-section">
          <div className="order-small-section-title">Shipping Date</div>
          <div className="order-small-section-value">Thu, Feb 20</div>
        </div>
        <div className="order-small-section">
          <div className="order-small-section-title">Total</div>
          <div className="order-small-section-value">15, 200</div>
        </div>
        <div className="order-small-section">
          <div className="order-small-section-title">Category</div>
          <div className="order-small-section-value">Icons</div>
        </div>
        <div className="order-small-section">
          <div className="order-small-section-title">Department</div>
          <div className="order-small-section-value">300-444-555</div>
        </div>
        <div className="order-small-section">
          <div className="order-small-section-title">Status</div>
          <div className="order-small-section-value">
            Awaiting your<br></br> approval
          </div>
        </div>
      </div>
      <div className="orders-details-bottom-section"></div>
    </div>
  );
};

export default OrderDetails;
