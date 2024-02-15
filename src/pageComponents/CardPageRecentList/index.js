import React, { useState } from "react";
import "./index.scss";
import transectionLogo from "../../images/transaction_logo.svg";
import Accordian from "../../components/Accordian";
import TransectionListItem from "../../components/TransectionListItem";

const CardPageRecentList = ({ list = [] }) => {
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
          {list.length ? (
            list.slice(0, !viewAllFlag ? 4 : undefined).map((item, index) => {
              return <TransectionListItem {...item} key={index} />;
            })
          ) : (
            <p className="card-recent-container-notfound">
              No Transections found
            </p>
          )}
        </Accordian>
      </div>
      {list.length && !viewAllFlag && isAccordianOpen && (
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
