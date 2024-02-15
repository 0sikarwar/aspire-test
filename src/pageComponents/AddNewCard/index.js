import React, { useState } from "react";
import "./index.scss";
import Modal from "../../components/Modal";
import CustomSelect from "../../components/CustomSelect";
import { useAppContext } from "../../AppContext";
import {
  generateNumber,
  generateExpiryDate,
  generateRandomDarkColor,
} from "../../utils";

const AddNewCard = ({ isModalOpen, setIsModalOpen }) => {
  const [cardName, setCardName] = useState("");
  const [cardType, setCardType] = useState(null);
  const {
    data: { cardsData },
    setCardsData,
  } = useAppContext();
  const [errorObj, setErrorObj] = useState({});
  const handleSubmit = () => {
    const currErrObj = {};
    let flag = false;
    if (!/^[a-zA-Z ]+$/.test(cardName)) {
      currErrObj.name = true;
      flag = true;
    }
    if (!cardType) {
      currErrObj.cardType = true;
      flag = true;
    }
    if (flag) {
      setErrorObj(currErrObj);
      return;
    }
    const newCard = {
      userName: cardName,
      cardNumber: generateNumber(16),
      provider: "visa",
      expiry: generateExpiryDate(),
      cvv: generateNumber(3),
      category: cardType.value,
      isFreezed: false,
      limit: 0,
      id: Date.now(),
      bg: generateRandomDarkColor(),
    };
    setCardsData([
      ...cardsData,
      { cardDetails: newCard, transectionDetails: [] },
    ]);
    setIsModalOpen(false);
  };
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleSubmit}
      title="Create card"
    >
      <div className="add-card-container">
        <label htmlFor="name">
          Enter Name:
          <input
            name="name"
            onChange={(e) => {
              setCardName(e.target.value);
              setErrorObj({ ...errorObj, name: false });
            }}
            value={cardName}
          />
        </label>
        <p className="add-card-err" style={{ marginLeft: "10%" }}>
          {errorObj.name ? "Please enter valid name" : ""}
        </p>
        <CustomSelect
          options={[
            { label: "Debit Card", value: "dc" },
            { label: "Other Card", value: "cc" },
          ]}
          onChange={(val) => {
            setCardType(val);
            setErrorObj({ ...errorObj, cardType: false });
          }}
          label="Select type"
        />
        <p className="add-card-err">
          {errorObj.cardType ? "Please select one" : ""}
        </p>
      </div>
    </Modal>
  );
};

export default AddNewCard;
