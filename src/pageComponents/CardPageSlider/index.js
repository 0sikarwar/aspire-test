import React, { useEffect } from "react";
import "./index.scss";
import CardComponent from "../../components/CardComponent";
import { Carousel } from "react-responsive-carousel";

const CardPageSlider = ({ setActiveCard, sliderData }) => {
  useEffect(() => {
    setActiveCard(sliderData[0]);
  }, []);
  return (
    <div className="card-slider">
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        transitionTime={1000}
        onChange={(index) => setActiveCard(sliderData[index])}
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
