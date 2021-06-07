import MenuItem from "./MenuItem";
import "./nav-items.scss";

const NavMenu = () => {
  return (
    <>
      <ul>
        <MenuItem path="/features">Features</MenuItem>
        <MenuItem path="/benefits">Benefits</MenuItem>
        <MenuItem path="/faq">Faq</MenuItem>
        <MenuItem path="/contact-us">Contact us</MenuItem>
      </ul>
    </>
  );
};
export default NavMenu;
