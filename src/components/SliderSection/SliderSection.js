import React from "react";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import SliderImage1 from "../../assets/images/slider1.png";
import SliderImage2 from "../../assets/images/slider2.png";
import SliderImage3 from "../../assets/images/slider3.png";
import SliderImage4 from "../../assets/images/slider4.png";
import SliderItem from "./components/SliderItem";
import "./slider-section.scss";

const SliderSection = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={60}
      totalSlides={4}
    >
      <Dot slide={0}>
        <span aria-hidden="true">&middot;</span>
        <span className="sr-only">Carousel Slide 1</span>
      </Dot>
      <Dot slide={1}>
        <span aria-hidden="true">&middot;</span>
        <span className="sr-only">Carousel Slide 2</span>
      </Dot>
      <Dot slide={2}>
        <span aria-hidden="true">&middot;</span>
        <span className="sr-only">Carousel Slide 3</span>
      </Dot>
      <Slider>
        <Slide index={0}>
          <SliderItem
            title="Your followers can copy your portfolio in 3 steps"
            image={SliderImage1}
          />
        </Slide>
        <Slide index={1}>
          <SliderItem
            title="Share trades in 4 easy steps"
            image={SliderImage2}
          />
        </Slide>
        <Slide index={2}>
          <SliderItem
            title="Share trades in 4 easy steps"
            image={SliderImage3}
          />
        </Slide>
        <Slide index={3}>
          <SliderItem
            title="Share trades in 4 easy steps"
            image={SliderImage4}
          />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};
export default SliderSection;
