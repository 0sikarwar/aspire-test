import React, { createContext, useState, useContext, useEffect } from "react";
import { addToLocalStorage } from "./utils";
import { localStorageCardKey } from "./utils/constants";
const appContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [data, setData] = useState({ cardsData: null, resetSlider: false });

  useEffect(() => {
    if (data.cardsData) {
      addToLocalStorage(localStorageCardKey, data.cardsData);
    }
  }, [data]);

  const toggleResetSlider = () => {
    setData((prev) => ({ ...prev, resetSlider: !prev.resetSlider }));
  };

  const setCardsData = (updatedData) => {
    setData((prev) => ({ ...prev, cardsData: updatedData }));
  };
  return (
    <appContext.Provider value={{ data, setCardsData, toggleResetSlider }}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};
