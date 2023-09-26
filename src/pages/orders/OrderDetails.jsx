import React, { useEffect, useState } from "react";
import "./orders.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addOrderDetailsData } from "../../redux/reducers/orderReducer";
import { fetchOrderDetails } from "../../utils/fetchOrderDetails";
import CustomInput from "../../components/input/CustomInput";
import TableComponent from "../../components/table/Table";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import EditOrderedProduct from "../../components/modal/EditOrderedProduct";

const columns = [
  { name: "", align: "left", value: "image", isImage: true, width: "100px" },
  { name: "Product Name", align: "left", value: "prodName" },
  { name: "Brand", align: "left", value: "brand" },
  { name: "Price", align: "left", value: "price" },
  { name: "Quantity", align: "left", value: "qnty" },
  { name: "total", align: "left", value: "total" },
  { name: "Status", align: "left", value: "status", isButton: true },
];

const colorAccrodingToStatus = {
  "MISSING-URGENT": { bgColor: "red", color: "white" },
  MISSING: { bgColor: "orange", color: "white" },
  EDITED: { bgColor: "green", color: "white" },
};

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  const ProductStatusBtn = (status) => {
    return (
      <Box sx={{ display: "flex", gap: "20px" }}>
        {status !== "PENDING" && (
          <Button
            sx={{
              bgcolor: `${colorAccrodingToStatus[status].bgColor}`,
              color: `${colorAccrodingToStatus[status].color}`,
              borderRadius: "20px",
            }}
          >
            {status}
          </Button>
        )}
        <Box sx={{ display: "flex", gap: "20px" }}>
          <DoneOutlinedIcon />
          <CloseOutlinedIcon />
          <Box
            sx={{ color: "navy", fontWeight: 700 }}
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Box>
        </Box>
      </Box>
    );
  };

  const orderDetails = useSelector((state) => state.orders.orderDetails);

  const createOrderDetailsData = (
    image,
    prodName,
    brand,
    price,
    qnty,
    total,
    status
  ) => {
    return {
      image: { value: image, align: "left" },
      prodName: { value: prodName, align: "left" },
      brand: { value: brand, align: "left" },
      price: { value: price, align: "left" },
      qnty: { value: qnty, align: "left" },
      total: { value: total, align: "left" },
      status: {
        value: status,
        btnComponent: ProductStatusBtn,
        align: "left",
      },
    };
  };

  const structureTableData = () => {
    const data = [];
    if (Object.keys(orderDetails).length) {
      for (let i = 0; i < orderDetails.products.length; i++) {
        data.push(
          createOrderDetailsData(
            orderDetails.products[i].image,
            orderDetails.products[i].prodName,
            orderDetails.products[i].brand,
            orderDetails.products[i].price,
            orderDetails.products[i].qnty,
            orderDetails.products[i].total,
            orderDetails.products[i].status
          )
        );
      }
    }
    return data;
  };

  const onClose = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    const orderData = fetchOrderDetails(orderId);
    dispatch(addOrderDetailsData(orderData));
  }, []);

  return (
    <div className="orders-details-section">
      {isEditing && (
        <EditOrderedProduct
          onClose={onClose}
          title="Chiecken Breast Fillets, Boneless Marinated 6 Lorem Ipsum ..."
        />
      )}
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
          <div>
            <TableComponent
              data={structureTableData()}
              columns={columns}
              // onClickOnRow={onClickOnRow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
