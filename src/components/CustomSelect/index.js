import React, { useState } from "react";
import "./index.scss";

function CustomSelect({ options, onChange, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="custom-select">
      <span>{label}:</span>
      <div className="custom-select-item">
        <div className="selected-option" onClick={toggleOptions}>
          {selectedOption?.label || "Select one..."}
        </div>
        {isOpen && (
          <div className="options">
            {options.map((option, index) => (
              <span key={index} onClick={() => handleOptionClick(option)}>
                {option.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomSelect;
