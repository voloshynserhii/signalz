import React from "react";
import HeroSection from "../components/HeroSection";
import ShareSection from "../components/ShareSection";
import CreateSection from "../components/CreateSection";

import "./main.scss";

const MainPage = () => {
  return (
    <main>
      <HeroSection />
      <ShareSection />
      <CreateSection />
    </main>
  );
};

export default MainPage;
