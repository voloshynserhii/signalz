import InputField from "../UI/InputField";
import ColoredButton from "../UI/Buttons/ColoredButton";
import "./herosection.scss";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>
          Monetise your market edge through <br />
          <span>Social Trading</span>
        </h1>
        <p>
          Social trading and blockchain are shaping the way people invest and
          discover new assets. We help you to share trades with followers.{" "}
        </p>
        <div className="input-group">
          <InputField type="text" placeholder="Enter your email" />
          <ColoredButton path="/">{window.innerWidth > 768 ? "Sign Up" : "Get The App"}</ColoredButton>
        </div>
      </div>
      <div className="hero-right">
        <img className="hero-img" src="/assets/images/hero.png" alt="hero" />
      </div>
    </div>
  );
};
export default HeroSection;
