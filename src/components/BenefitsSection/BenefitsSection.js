import { useState } from "react";
import SwitchGroup from "./components/SwitchGroup";
import Benefit from "./components/Benefit";
import TokenIcon from "../../assets/images/token.svg";
import DollarIcon from "../../assets/images/dollar.svg";
import InsightIcon from "../../assets/images/insight.svg";
import FollowersIcon from "../../assets/images/followers.svg";
import "./bebefits-section.scss";

const BenefitsSection = () => {
  const [active, setActive] = useState();

  const onSwitchHandler = (state) => {
    setActive(state);
  };
  if (active)
    return (
      <div className="benefits">
        <h2>Benefits of trading</h2>
        <SwitchGroup switchHandler={onSwitchHandler} />
        <div className="benefits-flex">
          <Benefit
            image={InsightIcon}
            title="Share your insights"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
          />
          <Benefit
            image={FollowersIcon}
            title="Connect with your followers"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
          />
        </div>
      </div>
    );
  return (
    <div className="benefits">
      <h2>Benefits of trading</h2>
      <SwitchGroup switchHandler={onSwitchHandler} />
      <div className="benefits-flex">
        <Benefit
          image={TokenIcon}
          title="Create your token"
          text="Your trading strategy is an asset.  With Signalz, top performing traders can create and share their own token.  Share your own trades with your follower base. "
        />
        <Benefit
          image={DollarIcon}
          title="Earn performance fee"
          text="With Signalz, you can create a win-win strategy for your follower base. Grow your earnings as the follower base and the value of your portfolio grows. "
        />
      </div>
    </div>
  );
};
export default BenefitsSection;
