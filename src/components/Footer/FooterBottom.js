import { NavLink } from "react-router-dom";

import TwitterIcon from "../../assets/images/twit-icon.svg";
import InstaIcon from "../../assets/images/insta-icon.svg";
import LinkedInIcon from "../../assets/images/linkedin-icon.svg";
import "./footer.scss";

const FooterBottom = () => {
  return (
    <div className="flex-between-center footer-bottom">
      <div>© 2021 Signalz. All rights reserved.</div>
      <div className="footer-bottom-right">
        {/*
        <div className="footer-links">
          <NavLink className="nav-link" to={"/"} exact>
            Privacy Policy
          </NavLink>
          <NavLink className="nav-link" to={"/"} exact>
            Terms
          </NavLink>
        </div>
        */}
        <div className="icons">
          <a href="https://telegram.org">
            <img src={TwitterIcon} alt="TwitterIcon" />
          </a>
          <a href="https://telegram.org">
            <img src={InstaIcon} alt="InstaIcon" />
          </a>
          <a href="https://telegram.org">
            <img src={LinkedInIcon} alt="LinkedInIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default FooterBottom;
