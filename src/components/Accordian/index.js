import React, { useEffect, useState } from "react";
import "./index.scss";
import downArrow from "../../images/down_arrow.svg";

const Accordian = ({
  children,
  logo,
  title,
  defaultOpen = false,
  onToggle = () => void 0,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const handleClick = () => {
    setIsOpen((prev) => {
      onToggle(!prev);
      return !prev;
    });
  };
  useEffect(() => {
    onToggle(defaultOpen);
  }, []);
  return (
    <div className={`accordian${isOpen ? " open" : ""}`}>
      <div className="accordian-title" onClick={handleClick}>
        <div className="accordian-title-content">
          <img className="accordian-logo" src={logo} alt="" />
          <p className="accordian-heading">{title}</p>
        </div>
        <img className="accordian-arrow" src={downArrow} alt="" />
      </div>
      <div className="accordian-content">{children}</div>
    </div>
  );
};

export default Accordian;
