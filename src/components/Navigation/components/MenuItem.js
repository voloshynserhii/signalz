import React from 'react';
import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import './nav-items.scss';

const MenuItem = (props) => {
  return (
    <li>
      <Link className="nav-link" to={props.path} exact>
        {props.children}
      </Link>
    </li>
  );
};
export default MenuItem;
