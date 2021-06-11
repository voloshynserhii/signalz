import React from "react";
import { Link } from "react-router-dom";
import "./demo.scss"

const HomeButton = (props) => {
  return (
    <div className="home-button">
    <Link className="nav-logo" to={props.path} exact>
      <img className="nav-img" src="assets/images/nav-logo.png" alt="logo" />
    </Link>
    </div>
  );
};
export default HomeButton;
