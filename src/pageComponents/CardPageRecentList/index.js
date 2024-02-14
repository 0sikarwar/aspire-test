import React, { useState } from "react";
import "./index.scss";
import transectionLogo from "../../images/transaction_logo.svg";
import Accordian from "../../components/Accordian";
import TransectionListItem from "../../components/TransectionListItem";

const data = [
  {
    storeName: "Hamleys",
    storeType: "shopping",
    date: "20 May 2020",
    amount: "150",
    type: "credit",
  },
  {
    storeName: "Hamleys",
    storeType: "travel",
    date: "20 May 2020",
    amount: "150",
    type: "debit",
  },
  {
    storeName: "Hamleys",
    storeType: "entertainment",
    date: "20 May 2020",
    amount: "150",
    type: "debit",
  },
  {
    storeName: "Hamleys",
    storeType: "shopping",
    date: "20 May 2020",
    amount: "150",
    type: "debit",
  },
  {
    storeName: "Hamleys",
    storeType: "shopping",
    date: "20 May 2020",
    amount: "150",
    type: "debit",
  },
  {
    storeName: "Hamleys",
    storeType: "travel",
    date: "20 May 2020",
    amount: "150",
    type: "debit",
  },
];

const CardPageRecentList = () => {
  const [viewAllFlag, setViewAllFlag] = useState(false);
  const [isAccordianOpen, setIsAccordianOpen] = useState(false);
  return (
    <div className="card-recent-container">
      <div className="card-recent-container-accordian">
        <Accordian
          logo={transectionLogo}
          title="Recent transactions"
          onToggle={(val) => setIsAccordianOpen(val)}
          defaultOpen
        >
          {data.slice(0, !viewAllFlag ? 4 : undefined).map((item, index) => {
            return <TransectionListItem {...item} key={index} />;
          })}
        </Accordian>
      </div>
      {!viewAllFlag && isAccordianOpen && (
        <div
          className="card-recent-container-viweall"
          onClick={() => setViewAllFlag(true)}
        >
          View all card transactions
        </div>
      )}
    </div>
  );
};

export default CardPageRecentList;
