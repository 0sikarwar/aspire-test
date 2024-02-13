import React from "react";
import "./index.scss";

const Tabs = ({ list, setActiveTab, activeTab }) => {
  return (
    <div className="tab-list">
      {list.map((item, index) => {
        return (
          <div
            className={`tab-list-item${
              activeTab.value === item.value ? " active-tab" : ""
            }`}
            key={index}
            onClick={() => setActiveTab(item)}
          >
            {item.text}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
