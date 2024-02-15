import React, { useEffect } from "react";
import CardsPage from "./pages/Cards";
import { useAppContext } from "./AppContext";
import { localStorageCardKey } from "./utils/constants";
import { addToLocalStorage, getFromLocalStorage } from "./utils";
import { cardsData } from "./utils/data/cardsData";

const AppRouter = () => {
  const { setCardsData } = useAppContext();
  useEffect(() => {
    let localData = getFromLocalStorage(localStorageCardKey);
    if (!localData) {
      addToLocalStorage(localStorageCardKey, cardsData);
      localData = cardsData;
    }
    setCardsData(localData);
  }, []);

  return <CardsPage />;
};

export default AppRouter;
