import Telegram from "../../assets/images/telegram.png";
import Instagram from "../../assets/images/insta.png";
import Twitter from "../../assets/images/twitter.png";
import TikTok from "../../assets/images/tiktok.png";
import Discord from "../../assets/images/discord.png";
import Facebook from "../../assets/images/fb.png";

import "./share.scss";

const ShareSection = () => {
  return (
    <div className="share">
      <h2>Share With</h2>
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
  );
};

export default ShareSection;
