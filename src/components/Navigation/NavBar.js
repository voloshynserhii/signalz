import { useState } from "react";
import NavMenu from "./components/NavMenu";
import ColoredButton from "../UI/Buttons/ColoredButton";
import Logo from "./components/Logo";
import MobileMenu from "../MobileMenu";
import "./nav-bar.scss";

const NavBar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const onHamburgerHandler = () => {
    setMobileMenuVisible((prev) => !prev);
    return;
  };
  if (mobileMenuVisible && window.innerWidth < 769)
    return <MobileMenu onClose={onHamburgerHandler} />;

  return (
    <nav className="flex-header">
      <Logo path="/" />
      <div className="nav-right">
        <NavMenu onClick={onHamburgerHandler} />
        <div className="right-button-wrapper">
          <ColoredButton path="/">Access Demo</ColoredButton>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
