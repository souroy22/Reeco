import React from "react";
import "./header.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Link } from "react-router-dom";

const Header = () => {
  const user = "Sourav";
  const pages = [
    { name: "Store", path: "/store", value: "store" },
    { name: "Orders", path: "/orders", value: "orders" },
    { name: "Analytics", path: "/analytics", value: "analytics" },
  ];

  return (
    <div className="header-section">
      <div className="left-section">
        <div className="logo-section">Reeco</div>
        <div className="pages-section">
          {pages.map((page) => (
            <Link to={page.path} key={page.value} className="pages-option">
              {page.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="right-section">
        <div className="cart-section">
          <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
        </div>
        <div className="profile-logo-section">
          Hello, {user}{" "}
          <KeyboardArrowDownOutlinedIcon
            sx={{
              fontSize: "17px",
              marginTop: "3px",
              cursor: "pointer",
              transform: "rotate(360deg)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
