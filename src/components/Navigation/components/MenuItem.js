import React from 'react';
import { NavLink } from "react-router-dom";

import './nav-items.scss';

const MenuItem = (props) => {
  return (
    <li>
      <NavLink className="nav-link" to={props.path} exact>
        {props.children}
      </NavLink>
    </li>
  );
};
export default MenuItem;
