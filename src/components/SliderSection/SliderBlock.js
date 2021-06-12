import React, { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  Dot,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import SliderImage1 from "../../assets/images/slider1.png";
import SliderImage2 from "../../assets/images/slider2.png";
import SliderImage3 from "../../assets/images/slider3.png";
import SliderItem from "./components/SliderItem";
import SliderDot from "./components/SliderDot";
import MobileHeading from "./components/MobileHeading";
import "./slider-section.scss";

const SliderBlock = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setMobileView(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 769) {
        setMobileView(true);
        return;
      }
      setMobileView(false);
    });
  }, [setMobileView]);

  return (
    <CarouselProvider
      naturalSlideWidth={400}
      naturalSlideHeight={400}
      visibleSlides={1}
      totalSlides={3}
      step={1}
      isIntrinsicHeight
      infinite
    >
      <Slider>
        <Slide index={0} classNameHidden="mobile-hidden">
          <SliderItem
            title="Your followers can copy your portfolio in 3 steps"
            image={SliderImage1}
          />
          {mobileView ? (
            <MobileHeading number={"1."} dotName="Access Signalz" />
          ) : null}
        </Slide>
        <Slide index={1} classNameHidden="mobile-hidden">
          <SliderItem
            title="Share trades in 4 easy steps"
            image={SliderImage2}
          />
          {mobileView ? (
            <MobileHeading number={"2."} dotName="Connect Wallet" />
          ) : null}
        </Slide>
        <Slide index={2} classNameHidden="mobile-hidden">
          <SliderItem
            title="Share trades in 4 easy steps"
            image={SliderImage3}
          />
          {mobileView ? (
            <MobileHeading number={"3."} dotName="Copy Portfolio" />
          ) : null}
        </Slide>
      </Slider>
      {!mobileView ? (
        <DotGroup className="dot-group">
          <Dot slide={0}>
            <SliderDot number={1} dotName="Access Signalz" />
          </Dot>
          <Dot slide={1}>
            <SliderDot number={2} dotName="Connect Wallet" />
          </Dot>
          <Dot slide={2}>
            <SliderDot number={3} dotName="Copy Portfolio" />
          </Dot>
        </DotGroup>
      ) : (
        <DotGroup className="dot-group" />
      )}
    </CarouselProvider>
  );
};
export default SliderBlock;
