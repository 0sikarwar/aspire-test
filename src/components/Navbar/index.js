import React, { useState } from "react";
import "./index.scss";
import homeLogo from "../../images/navbarLogo/logo.svg";
import cardLogo from "../../images/navbarLogo/card.svg";
import creditLogo from "../../images/navbarLogo/credit.svg";
import paymentsLogo from "../../images/navbarLogo/payments.svg";
import profileLogo from "../../images/navbarLogo/profile.svg";

const navList = [
  {
    logo: homeLogo,
    text: "Home",
    url: "#",
  },
  {
    logo: cardLogo,
    text: "Cards",
    url: "/",
  },
  {
    logo: paymentsLogo,
    text: "Payments",
    url: "#",
  },
  {
    logo: creditLogo,
    text: "Credit",
    url: "#",
  },
  {
    logo: profileLogo,
    text: "Profile",
    url: "#",
  },
];

const Navbar = () => {
  const [activeUrl] = useState("/");
  return (
    <div className="navbar">
      {navList.map((item, index) => {
        return (
          <a
            className={`navbar-item${
              activeUrl === item.url ? " active-nav" : ""
            }`}
            href={item.url}
            key={index}
          >
            <img className="navbar-logo" src={item.logo} alt="" />
            <p className="navbar-text">{item.text}</p>
          </a>
        );
      })}
    </div>
  );
};

export default Navbar;
