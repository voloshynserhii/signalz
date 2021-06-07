import NavMenu from "./components/NavMenu";
import ColoredButton from "../UI/Buttons/ColoredButton";
import Logo from "./components/Logo";
import "./nav-bar.scss";

const NavBar = () => {
  return (
    <nav>
      <Logo path="/" />
      <div className="nav-right">
        <NavMenu />
        <ColoredButton path="/">Access Demo</ColoredButton>
      </div>
    </nav>
  );
};
export default NavBar;
