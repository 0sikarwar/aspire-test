import React, { useState } from "react";
import "./index.scss";
import visaLogo from "../../images/visa_logo.svg";
import fullLogo from "../../images/full_logo.svg";
import eyeLogo from "../../images/eye_logo.svg";

const providerLogoMap = {
  visa: visaLogo,
};

const CardComponent = ({
  userName,
  cardNumber,
  provider,
  expiry,
  bg,
  isFreezed,
}) => {
  const [showData, setShowData] = useState(false);
  return (
    <div className={`card-wrapper${isFreezed ? " freezed-card" : ""}`}>
      <div
        className="card-wrapper-show"
        onClick={() => setShowData((prev) => !prev)}
      >
        <img className="card-wrapper-eye" src={eyeLogo} alt="" />
        Show card number
      </div>
      <div
        className={`card-component${showData ? " data-visible" : ""}`}
        style={{ backgroundColor: bg || "black" }}
      >
        <img className="card-component-logo" src={fullLogo} alt="Aspire" />
        <p className="card-component-user">{userName}</p>
        <div className="card-component-number">
          <div className="card-component-dots">
            <span>{showData ? cardNumber.slice(0, 4) : "●●●●"}</span>
            <span>{showData ? cardNumber.slice(4, 8) : "●●●●"}</span>
            <span>{showData ? cardNumber.slice(8, 12) : "●●●●"}</span>
          </div>
          <span className="card-component-digits">{cardNumber.slice(12)}</span>
        </div>
        <div className="card-component-security">
          <span className="card-component-expiry">Thru: {expiry}</span>
          <p className="card-component-cvv">
            CVV: <span>***</span>
          </p>
        </div>
        <img
          className="card-component-provider"
          src={providerLogoMap[provider]}
          alt={provider}
        />
      </div>
    </div>
  );
};

export default CardComponent;
