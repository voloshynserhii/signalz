import React, { useState, useEffect } from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slider,
  Slide,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import ReviewSlide from "./components/ReviewSlide";
import Review1Image from "../../assets/images/review1.png";
import Review2Image from "../../assets/images/review2.png";
import StarImage from "../../assets/images/star.svg";
import "./reviews-section.scss";

const ReviewsSlider = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 900) {
      setMobileView(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 900) {
        setMobileView(true);
        return;
      }
      setMobileView(false);
    });
    return (() => {});
  }, [setMobileView]);

  return (
    <CarouselProvider
      naturalSlideWidth={400}
      naturalSlideHeight={400}
      visibleSlides={mobileView ? 1 : 2}
      totalSlides={4}
      step={1}
      isIntrinsicHeight
      infinite
    >
      <Slider>
        <Slide index={0} classNameHidden="slide-hidden">
          <ReviewSlide
            title="Incredible experience"
            text="Good app, the SMS alerts are really handy, I get used to this app everyday. Copy portfolio feature is game changer & it’s also help you to earn more commission."
            image={Review1Image}
            name="Aaron Almaraz"
            position="CEO & Founder at Gearat"
            starImage={StarImage}
          />
        </Slide>
        <Slide index={1} classNameHidden="slide-hidden">
          <ReviewSlide
            title="Amazing experience"
            text="Good app, the SMS alerts are really handy, I get used to this app everyday. Copy portfolio feature is game changer & it’s also help you to earn more commission."
            image={Review2Image}
            name="Mike Tyson"
            position="CEO at Cryptobox"
            starImage={StarImage}
          />
        </Slide>
        <Slide index={2} classNameHidden="slide-hidden">
          <ReviewSlide
            title="Incredible experience"
            text="no text"
            image={Review1Image}
            name="Mike Tyson"
            position="CEO at Cryptobox"
            starImage={StarImage}
          />
        </Slide>
        <Slide index={3} classNameHidden="slide-hidden">
          <ReviewSlide
            title="Incredible experience"
            text="no text"
            image={Review2Image}
            name="Aaron Almaraz"
            position="CEO & Founder at Gearat"
            starImage={StarImage}
          />
        </Slide>
      </Slider>
      <div>
        <ButtonBack />
        <ButtonNext />
      </div>
    </CarouselProvider>
  );
};
export default ReviewsSlider;
