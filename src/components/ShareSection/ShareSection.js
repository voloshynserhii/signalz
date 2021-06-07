import Telegram from "../../assets/images/telegram.svg";
import Instagram from "../../assets/images/insta.svg";
import Twitter from "../../assets/images/twitter.svg";
import TikTok from "../../assets/images/tiktok.svg";
import Discord from "../../assets/images/discord.svg";
import Facebook from "../../assets/images/fb.svg";
import AirBnb from "../../assets/images/airbnb.svg";
import HubSpot from "../../assets/images/hubspot.svg";
import Google from "../../assets/images/google.svg";
import FedEx from "../../assets/images/FedEx.svg";
import Walmart from "../../assets/images/walmart.svg";
import Microsoft from "../../assets/images/microsoft.svg";

import "./share.scss";

const ShareSection = () => {
  return (
    <div className="share">
      <h2>{window.innerWidth > 769 ? 'Share With' : 'Trusted by our beloved clients'}</h2>
      <div className="share-wrapper">
      <div className="share-images">
        <a href="https://telegram.org">
          <img src={window.innerWidth > 769 ? Telegram : AirBnb} alt="telegram" />
        </a>
        <a href="https://telegram.org">
          <img src={window.innerWidth > 769 ? Instagram : HubSpot} alt="Instagram" />
        </a>
        <a href="https://telegram.org">
          <img src={window.innerWidth > 769 ? Twitter : Google} alt="Twitter" />
        </a>
        <a href="https://telegram.org">
          <img src={window.innerWidth > 769 ? TikTok : FedEx} alt="TikTok" />
        </a>
        <a href="https://telegram.org">
          <img src={window.innerWidth > 769 ? Discord : Walmart} alt="Discord" />
        </a>
        <a href="https://telegram.org">
          <img src={window.innerWidth > 769 ? Facebook : Microsoft} alt="facebook" />
        </a>
      </div>
      </div>
    </div>
  );
};

export default ShareSection;
