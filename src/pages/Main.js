import React from "react";
import HeroSection from "../components/HeroSection";
import ShareSection from "../components/ShareSection";
import CreateSection from "../components/CreateSection";
import SliderSection from "../components/SliderSection";
import BenefitsSection from "../components/BenefitsSection";
import ReviewsSection from "../components/ReviewsSection";

import "./main.scss";

const MainPage = () => {
  return (
    <main>
      <HeroSection />
      <ShareSection />
      <CreateSection />
      <SliderSection />
      <BenefitsSection />
      <ReviewsSection />
    </main>
  );
};

export default MainPage;
