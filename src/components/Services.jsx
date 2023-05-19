import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/32.jpeg";
import img2 from "../assets/42.jpeg";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Dry Cleaning</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Press   </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
