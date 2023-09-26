import React from "react";
import { Box } from "@mui/material";
import "./input.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const CustomInput = ({ hasSearchIcon = true, placeHolder = "Search..." }) => {
  return (
    <Box className="searchBox">
      <input placeholder={placeHolder} className="searchInput" />
      {hasSearchIcon && <SearchOutlinedIcon className="search-icon" />}
    </Box>
  );
};

export default CustomInput;
