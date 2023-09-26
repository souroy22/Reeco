import "./layout.css";
import Header from "../header/Header";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const LayoutSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/" && navigate("/orders");
  }, []);

  return (
    <>
      <Header />
      <div className="layout-section">
        <Outlet />
      </div>
    </>
  );
};

export default LayoutSection;
