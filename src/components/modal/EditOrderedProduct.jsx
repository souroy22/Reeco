import React, { useState } from "react";
import "./style.css";
import { Box, Button, Chip, ClickAwayListener } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import SingleLineInput from "../input/SingleLineInput";

const reasons = [
  "Missing product",
  "Quantity is not the same",
  "Price is not the same",
  "Other",
];

const EditOrderedProduct = ({
  title = "Title",
  productName = "Product Name",
  onClose,
}) => {
  const [chooseReason, setChooseReason] = useState(null);

  return (
    <Box className="overlay">
      <ClickAwayListener onClickAway={onClose}>
        <Box className="edit-ordered-product-modal">
          <Box className="col-1">
            <CloseOutlinedIcon onClick={onClose} sx={{ cursor: "pointer" }} />
          </Box>
          <Box className="modalTitle">{title}</Box>
          <Box className="modal-sub-title">{productName}</Box>
          <Box className="modal-body">
            <Box>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/008/848/360/small/fresh-apple-fruit-free-png.png"
                style={{ height: "100px", width: "100px" }}
              />
            </Box>
            <Box className="modal-body-right">
              <Box className="modal-body-data">
                <Box>Price</Box>
                <Box>
                  <input value="8383" />
                </Box>
              </Box>
              <Box className="modal-body-data" sx={{ gap: "75px !important" }}>
                <Box>Quantity</Box>
                <Box className="qty-section">
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "50%",
                      padding: "5px",
                      minWidth: "35px",
                      backgroundColor: "#85c688",
                    }}
                  >
                    -
                  </Button>
                  <input value="8383" />
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "50%",
                      padding: "5px",
                      minWidth: "35px",
                      backgroundColor: "#85c688",
                    }}
                  >
                    +
                  </Button>
                </Box>
              </Box>
              <Box className="modal-body-data">
                <Box>Total</Box>
                <Box>
                  <CurrencyRupeeOutlinedIcon sx={{ fontSize: "13px" }} />
                  83,93,993
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="row-4">
            Choose Reason <span className="optional-text">( Optional )</span>
          </Box>
          <Box className="row-5">
            {reasons.map((reason) => (
              <Chip
                label={reason}
                color="primary"
                variant={chooseReason === reason ? "" : "outlined"}
                onClick={() => setChooseReason(reason)}
                sx={{
                  backgroundColor: `${chooseReason === reason ? "navy" : ""}`,
                  color: `${chooseReason === reason ? "white" : "gray"}`,
                  border: "0.2px solid gray !important",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#000080",
                  },
                }}
              />
            ))}
          </Box>
          <Box>
            {chooseReason === "Other" && (
              <SingleLineInput placeholder="Type other reason" />
            )}
          </Box>
          <Box className="last-row">
            <Button sx={{ fontWeight: 700, color: "green", fontSize: "12px" }}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{ borderRadius: "20px" }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </ClickAwayListener>
    </Box>
  );
};

export default EditOrderedProduct;
