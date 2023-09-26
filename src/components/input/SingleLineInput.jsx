import { Box } from "@mui/material";
import React from "react";
import "./input.css";

const SingleLineInput = ({ value, placeholder = "Search" }) => {
  return (
    <Box>
      <input
        placeholder={placeholder}
        value={value}
        className="singleLineInput"
      />
    </Box>
  );
};

export default SingleLineInput;
