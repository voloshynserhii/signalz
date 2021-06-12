import SliderBlock from './SliderBlock';
import "./slider-section.scss";

const SliderSection = () => {
  return (
    <div className="slider" id="features">
      <h2>Your followers can copy your portfolio in 3 steps</h2>
      <div className="slider-wrapper">
        <SliderBlock />
      </div>
    </div>
  );
}; 
export default SliderSection;
