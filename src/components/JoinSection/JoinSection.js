import InputField from "../UI/InputField";
import ColoredButton from "../UI/Buttons/ColoredButton";
import PhoneImage from "../../assets/images/phone.png";
import "./join-section.scss";

const JoinSection = () => {
  return (
    <div className="join">
      <div className="join-image">
        <img src={PhoneImage} alt="PhoneImage" />
      </div>
      <div className="join-content">
        <h3>Join the early access list</h3>
        <p>
          Get notified about the launch of Signalz app . Early partners will be
          eligible for our token pre-sale.
        </p>
        <div className="join-form">
          <InputField type="text" placeholder="Enter your email" />
          <ColoredButton path="/">Sign Up</ColoredButton>
        </div>
      </div>
    </div>
  );
};
export default JoinSection;
