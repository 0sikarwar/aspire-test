import React, { useState } from "react";
import "./index.scss";
import circlePlus from "../../images/circle_plus.svg";
import Tabs from "../../components/Tabs";
import CardPageSlider from "../../pageComponents/CardPageSlider";

const tabsList = [
  {
    text: "My debit cards",
    value: "debit_cards",
  },
  {
    text: "All company cards",
    value: "comapny_cards",
  },
];

const CardsPage = () => {
  const [activeTab, setActiveTab] = useState(tabsList[0]);
  return (
    <div className="cardspage">
      <div className="cardspage-head container">
        <p className="cardspage-balance-text">Account balance</p>
        <div className="cardspage-balance">
          <p className="cardspage-balance-amount">
            <span>S$</span>
            3,000
          </p>
          <div className="cardspage-balance-cta">
            <img src={circlePlus} alt="" />
            New card
          </div>
        </div>
      </div>
      <div className="container">
        <Tabs
          list={tabsList}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </div>
      <CardPageSlider />
    </div>
  );
};

export default CardsPage;
