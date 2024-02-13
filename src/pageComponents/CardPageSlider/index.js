import React, { useState } from "react";
import "./index.scss";
import CardComponent from "../../components/CardComponent";
import { Carousel } from "react-responsive-carousel";

const sliderData = [
  {
    userName: "Mark Henry",
    cardNumber: "1234123412341234",
    provider: "visa",
    expiry: "12/20",
    cvv: "123",
    bg: "green",
  },
  {
    userName: "Mark Henry1",
    cardNumber: "1234123412341234",
    provider: "visa",
    expiry: "12/20",
    cvv: "123",
    bg: "blue",
  },
  {
    userName: "Mark Henry2",
    cardNumber: "1234123412341234",
    provider: "visa",
    expiry: "12/20",
    cvv: "123",
    bg: "gray",
  },
];

const CardPageSlider = () => {
  return (
    <div className={`card-slider`}>
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        transitionTime={1000}
        infiniteLoop
      >
        {sliderData.map((item, index) => {
          return <CardComponent {...item} key={index} />;
        })}
      </Carousel>
    </div>
  );
};

export default CardPageSlider;
