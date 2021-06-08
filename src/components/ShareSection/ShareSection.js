import Telegram from "../../assets/images/telegram.svg";
import Instagram from "../../assets/images/insta.svg";
import Twitter from "../../assets/images/twitter.svg";
import TikTok from "../../assets/images/tiktok.svg";
import Discord from "../../assets/images/discord.svg";
import Facebook from "../../assets/images/fb.svg";

import "./share.scss";

const ShareSection = () => {
  return (
    <div className="share">
      <h2>Share With</h2>
      <div className="share-wrapper">
        <div className="share-images">
          <a href="https://telegram.org">
            <img src={Telegram} alt="telegram" />
          </a>
          <a href="https://telegram.org">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://telegram.org">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://telegram.org">
            <img src={TikTok} alt="TikTok" />
          </a>
          <a href="https://telegram.org">
            <img src={Discord} alt="Discord" />
          </a>
          <a href="https://telegram.org">
            <img src={Facebook} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShareSection;
