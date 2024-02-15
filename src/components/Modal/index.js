import React from "react";
import "./index.scss";

const Modal = ({
  isOpen,
  onClose = () => void 0,
  onSubmit = () => void 0,
  children,
  title,
}) => {
  const handleSubmit = () => {
    onSubmit();
  };
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      {isOpen && (
        <div className="overlay" onClick={onClose}>
          <div className="modal" onClick={handleModalClick}>
            <span className="modal-close" onClick={onClose}>
              &times;
            </span>
            <h2>{title}</h2>
            {children}
            <div className="modal-submit" onClick={handleSubmit}>
              Submit
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
