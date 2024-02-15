import React from "react";
import "./index.scss";
import freezeCardLogo from "../../images/cardActionBarLogo/freeze_card.svg";
import cancelCardLogo from "../../images/cardActionBarLogo/cancel_card.svg";
import gPayLogo from "../../images/cardActionBarLogo/gpay.svg";
import replaceCardLogo from "../../images/cardActionBarLogo/replace_card.svg";
import spendLimitLogo from "../../images/cardActionBarLogo/spend_limit.svg";
import { useAppContext } from "../../AppContext";

const CardPageActionBar = ({ activeCard, setActiveCard }) => {
  const {
    data: { cardsData },
    setCardsData,
    toggleResetSlider,
  } = useAppContext();
  const actionsbarList = [
    {
      logo: freezeCardLogo,
      text: activeCard.isFreezed ? "UnFreeze card" : "Freeze card",
      value: "freeze_card",
    },
    {
      logo: spendLimitLogo,
      text: "Set spend limit",
      value: "set_limit",
    },
    {
      logo: gPayLogo,
      text: "Add to GPay",
      value: "gpay",
    },
    {
      logo: replaceCardLogo,
      text: "Replace card",
      value: "replace_card",
    },
    {
      logo: cancelCardLogo,
      text: "Cancel card",
      value: "cancel_card",
    },
  ];
  const handleClick = (action) => {
    let temp = [...cardsData];
    const index = temp.findIndex(
      (item) => item.cardDetails.id === activeCard.id
    );
    switch (action.value) {
      case "freeze_card":
        temp[index].cardDetails = {
          ...temp[index].cardDetails,
          isFreezed: !temp[index].cardDetails.isFreezed,
        };
        setCardsData(temp);
        setActiveCard({ ...activeCard, isFreezed: !activeCard.isFreezed });
        break;
      case "cancel_card":
        if (window.confirm("Are you sure you want to delete the card?")) {
          temp.splice(index, 1);
          setCardsData(temp);
          setTimeout(() => {
            toggleResetSlider();
          }, 100);
        }
        break;
    }
  };
  return (
    <div className="cards-actionsbar">
      {actionsbarList.map((item, index) => (
        <div
          className="cards-actionsbar-item"
          key={index}
          onClick={() => handleClick(item)}
        >
          <img src={item.logo} className="cards-actionsbar-logo" alt="" />
          <p className="cards-actionsbar-caption">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CardPageActionBar;
