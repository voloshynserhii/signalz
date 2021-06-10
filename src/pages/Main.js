import React from "react";
import HeroSection from "../components/HeroSection";
import ShareSection from "../components/ShareSection";
import CreateSection from "../components/CreateSection";
import SliderSection from "../components/SliderSection";
import BenefitsSection from "../components/BenefitsSection";
import ReviewsSection from "../components/ReviewsSection";
import QuestionsSection from "../components/QuestionsSection";
import MapSection from "../components/MapSection";
import JoinSection from "../components/JoinSection";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <main>
      <HeroSection />
      <ShareSection />
      <CreateSection />
      <SliderSection />
      <BenefitsSection />
      <ReviewsSection />
      <QuestionsSection />
      <MapSection />
      <JoinSection />
      <Footer />
    </main>
  );
};

export default MainPage;
