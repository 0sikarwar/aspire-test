import React, { useEffect, useState } from "react";
import "./index.scss";
import circlePlus from "../../images/circle_plus.svg";
import Tabs from "../../components/Tabs";
import CardPageSlider from "../../pageComponents/CardPageSlider";
import CardPageActionBar from "../../pageComponents/CardPageActionBar";
import Accordian from "../../components/Accordian";
import cardLogo from "../../images/card_detail_logo.svg";
import CardPageRecentList from "../../pageComponents/CardPageRecentList";
import logo from "../../images/logo.svg";
import Navbar from "../../components/Navbar";
import { useAppContext } from "../../AppContext";
import { totalAmount } from "../../utils/data/cardsData";
import AddNewCard from "../../pageComponents/AddNewCard";

const tabsList = [
  {
    text: "My debit cards",
    value: "dc",
  },
  {
    text: "All company cards",
    value: "cc",
  },
];

const CardsPage = () => {
  const {
    data: { cardsData },
    toggleResetSlider,
  } = useAppContext();
  const [cardsList, setCardsList] = useState(null);
  const [transectionData, setTransectionData] = useState([]);
  const [activeTab, setActiveTab] = useState(tabsList[0]);
  const [activeCard, setActiveCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (cardsData) {
      const tempTransections = {};
      const tempCards = cardsData.map((item) => {
        tempTransections[item.cardDetails.id] = [...item.transectionDetails];
        return {
          ...item.cardDetails,
        };
      });
      setCardsList(tempCards);
      setTransectionData(tempTransections);
    }
  }, [cardsData]);

  useEffect(() => {
    toggleResetSlider();
  }, [activeTab]);
  const getSliderData = () => {
    let list = cardsList;
    if (activeTab.value === "dc") {
      list = cardsList.filter((item) => item.category === activeTab.value);
      if (list.length === 0) {
        list = cardsList;
      }
    }
    return list;
  };
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
              {totalAmount}
            </p>
            <div
              className="cardspage-balance-cta"
              onClick={() => setIsModalOpen(true)}
            >
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
        {cardsList && (
          <CardPageSlider
            setActiveCard={setActiveCard}
            sliderData={getSliderData()}
          />
        )}
      </div>
      {activeCard && (
        <div className="cardspage-bottom-container">
          <CardPageActionBar
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
          <div className="container">
            <Accordian title="Card details" logo={cardLogo}>
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
            </Accordian>
            <CardPageRecentList list={transectionData[activeCard.id]} />
          </div>
        </div>
      )}
      <AddNewCard isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default CardsPage;
