import React, { useState } from "react";
import "./index.scss";
import circlePlus from "../../images/circle_plus.svg";
import Tabs from "../../components/Tabs";
import CardPageSlider from "../../pageComponents/CardPageSlider";
import CardPageActionBar from "../../pageComponents/CardPageActionBar";
import Accordian from "../../components/Accordian";
import cardLogo from "../../images/card_detail_logo.svg";
import { sliderData } from "./data";
import CardPageRecentList from "../../pageComponents/CardPageRecentList";
import logo from "../../images/logo.svg";
import Navbar from "../../components/Navbar";

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
  const [activeCard, setActiveCard] = useState(null);
  return (
    <div className="cardspage">
      <Navbar />
      <div className="cardspage-top-container">
        <img src={logo} alt="Aspire" className="cardspage-top-container-logo" />
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
        <CardPageSlider setActiveCard={setActiveCard} sliderData={sliderData} />
      </div>
      <div className="cardspage-bottom-container">
        <CardPageActionBar />
        <div className="container">
          <Accordian title="Card details" logo={cardLogo}>
            {activeCard && (
              <div className="card-details">
                <p>
                  <span className="card-details-heading">User Name:</span>
                  {activeCard.userName}
                </p>
                <p>
                  <span className="card-details-heading">Card Number:</span>
                  {activeCard.cardNumber.match(/.{1,4}/g).join(" ")}
                </p>
                <p>
                  <span className="card-details-heading">Expiry:</span>
                  {activeCard.expiry}
                </p>
                <p>
                  <span className="card-details-heading">CVV:</span>
                  {activeCard.cvv}
                </p>
              </div>
            )}
          </Accordian>
          <CardPageRecentList />
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
