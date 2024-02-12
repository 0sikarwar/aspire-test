import React from "react";
import "./index.scss";
import logo from "../../images/logo.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="Aspire" className="sidebar-logo" />
    </div>
  );
};

export default SideBar;
