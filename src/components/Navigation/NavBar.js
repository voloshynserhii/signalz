import { useEffect } from "react";
import NavMenu from "./components/NavMenu";
import ColoredButton from "../UI/Buttons/ColoredButton";
import Logo from "./components/Logo";
import "./nav-bar.scss";

const NavBar = () => {
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);

  return (
    <nav>
      <Logo path="/" />
      <div className="nav-right">
        <NavMenu />
        <div className="right-button-wrapper">
          <ColoredButton path="/">Access Demo</ColoredButton>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
