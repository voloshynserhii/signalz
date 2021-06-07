import MenuItem from "./MenuItem";
import MenuIcon from './assets/menu.svg';
import "./nav-items.scss";

const NavMenu = (props) => {
  return (
    <div className="nav-hamburger" onClick={props.onClick}>
      <img src={MenuIcon} alt="hamburger" />
      <ul >
        <MenuItem path="/features">Features</MenuItem>
        <MenuItem path="/benefits">Benefits</MenuItem>
        <MenuItem path="/faq">Faq</MenuItem>
        <MenuItem path="/contact-us">Contact us</MenuItem>
      </ul>
    </div>
  );
};
export default NavMenu;
