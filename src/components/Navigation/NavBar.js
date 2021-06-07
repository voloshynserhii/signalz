import {useEffect} from 'react';
import NavMenu from "./components/NavMenu";
import ColoredButton from "../UI/Buttons/ColoredButton";
import Logo from "./components/Logo";
import Hamburger from './components/Hamburger';
import "./nav-bar.scss";

const NavBar = () => {
  
  useEffect(() =>{
    console.log(window.innerWidth);
  }, []);
  
  if(window.innerWidth < 769) return (
    <nav>
      <Logo path="/" />
      <Hamburger onClick={() => alert('menu')}/>
    </nav>
  );
  
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
