import React from "react";
import "./index.scss";
import freezeCardLogo from "../../images/cardActionBarLogo/freeze_card.svg";
import cancelCardLogo from "../../images/cardActionBarLogo/cancel_card.svg";
import gPayLogo from "../../images/cardActionBarLogo/gpay.svg";
import replaceCardLogo from "../../images/cardActionBarLogo/replace_card.svg";
import spendLimitLogo from "../../images/cardActionBarLogo/spend_limit.svg";

const actionsbarList = [
  {
    logo: freezeCardLogo,
    text: "Freeze card",
  },
  {
    logo: spendLimitLogo,
    text: "Set spend limit",
  },
  {
    logo: gPayLogo,
    text: "Add to GPay",
  },
  {
    logo: replaceCardLogo,
    text: "Replace card",
  },
  {
    logo: cancelCardLogo,
    text: "Cancel card",
  },
];

const CardPageActionBar = () => {
  return (
    <div className="cards-actionsbar">
      {actionsbarList.map((item, index) => (
        <div className="cards-actionsbar-item" key={index}>
          <img src={item.logo} className="cards-actionsbar-logo" />
          <p className="cards-actionsbar-caption">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CardPageActionBar;
