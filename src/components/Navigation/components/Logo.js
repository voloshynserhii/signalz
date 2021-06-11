import React from "react";
import { NavLink } from "react-router-dom";
import LogoImage from '../../../assets/images/nav-logo.svg'

import "./nav-items.scss";

const Logo = (props) => {
  return (
    <NavLink className="nav-logo" to={props.path} exact>
      <img className="nav-img" src={LogoImage} alt="logo" />
      <h3>Signalz</h3>
    </NavLink>
  );
};
export default Logo;
