import React, { useEffect, useState } from "react";
import "./index.scss";
import CardComponent from "../../components/CardComponent";
import { Carousel } from "react-responsive-carousel";
import { useAppContext } from "../../AppContext";

const CardPageSlider = ({ setActiveCard, sliderData }) => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const {
    data: { resetSlider },
  } = useAppContext();

  useEffect(() => {
    setActiveCard(sliderData[selectedSlide]);
  }, [resetSlider, selectedSlide]);

  useEffect(() => {
    setSelectedSlide(0);
  }, [resetSlider]);
  return (
    <div className="card-slider">
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        transitionTime={1000}
        onChange={(index) => setSelectedSlide(index)}
        selectedItem={selectedSlide}
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
