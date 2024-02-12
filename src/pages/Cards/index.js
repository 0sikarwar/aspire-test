import React from "react";
import "./index.scss";
import circlePlus from "../../images/circle_plus.svg";

const CardsPage = () => {
  return (
    <div className="cardspage">
      <div className="cardspage-head">
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
    </div>
  );
};

export default CardsPage;
