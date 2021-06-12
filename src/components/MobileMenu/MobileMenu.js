import Logo from "../Navigation/components/Logo";
import InputField from "../UI/InputField";
import ColoredButton from "../UI/Buttons/ColoredButton";
import MenuItem from "../Navigation/components/MenuItem";
import CloseIcon from "../../assets/images/close.svg";
import "./mobile-menu.scss";

const MobileMenu = (props) => {
  return (
    <div className="mobile-menu">
      <div>
        <div className="flex-header">
          <Logo path="/logo" />
          <div className="nav-hamburger" onClick={props.onClose}>
            <img src={CloseIcon} alt="hamburger" />
          </div>
        </div>
        <ul className="mobile-menu-list">
          <MenuItem path="/features">Features</MenuItem>
          <MenuItem path="/benefits">Benefits</MenuItem>
          <MenuItem path="/faq">Faq</MenuItem>
          <MenuItem path="/contact-us">Contact us</MenuItem>
        </ul>
      <div className="mobile-menu-inputs">
        <InputField type="text" placeholder="Enter your email" />
        <ColoredButton path="/">
          {window.innerWidth > 768 ? "Sign Up" : "Get The App"}
        </ColoredButton>
      </div>
    </div>
    </div>

  );
};

export default MobileMenu;
