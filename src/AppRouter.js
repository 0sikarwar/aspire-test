import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CardsPage from "./pages/Cards";
import Layout from "./components/Layout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cards" element={<CardsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
