import React from "react";
import "./index.scss";
import cardLogo from "../../images/card_list_logo.svg";
import shopLogo from "../../images/shop_logo.svg";
import travelLogo from "../../images/flight_logo.svg";
import entertainmentLogo from "../../images/megaphone_logo.svg";

const logoTypeMap = {
  shopping: { logo: shopLogo, background: "#009DFF1A" },
  travel: { logo: travelLogo, background: "#00D6B51A" },
  entertainment: { logo: entertainmentLogo, background: "#F251951A" },
};

const TransectionListItem = ({ storeType, storeName, date, amount, type }) => {
  return (
    <div className="transection-listitem">
      <div className="transection-listitem-content">
        <div
          className="transection-listitem-storetype"
          style={{ backgroundColor: logoTypeMap[storeType].background }}
        >
          <img
            src={logoTypeMap[storeType].logo}
            className="transection-listitem-storetype-logo"
          />
        </div>
        <div className="transection-listitem-detail">
          <p className="transection-listitem-name">{storeName}</p>
          <p className="transection-listitem-date">{date}</p>
        </div>
        <p
          className="transection-listitem-price"
          style={type === "credit" ? { color: "#01D167" } : {}}
        >
          {type === "credit" ? "+" : "-"}S$ {amount}
        </p>
      </div>
      <div className="transection-listitem-type">
        <div className="transection-listitem-card-logo">
          <img src={cardLogo} alt="" />
        </div>
        <p className="transection-listitem-type-text">
          {type === "credit" ? "Refund on" : "Charged to"} debit card
        </p>
      </div>
    </div>
  );
};

export default TransectionListItem;
