import React from "react";
import { NavLink } from "react-router-dom";

import "./buttons.scss";

const ColoredButton = (props) => {
  return (
    <button className="nav-coloredButton">
      <NavLink className="btn-text" to={props.path} exact>
        {props.children}
      </NavLink>
    </button>
  );
};
export default ColoredButton;
