import Image1 from "../../assets/images/create1.svg";
import Image2 from "../../assets/images/create2.svg";
import Image3 from "../../assets/images/create3.svg";

import "./create-section.scss";

const CreateSection = () => {
  return (
    <div className="create-bg">
      <div className="create">
        <h2>Create. Connect. Grow.</h2>
        <div className="create-block">
          <div className="items reversed">
            <div className="create-text">
              <div className="colored-text">FEATURE</div>
              <h3>Create your own portfolio</h3>
              <div className="web-big">
                Create a portfolio of your top picks or import your portfolio
                directly from your wallet. Use our app to view the portfolio’s
                performance.
              </div>
            </div>
            <img src={Image1} alt="create" />
          </div>
          <div className="items">
            <img src={Image2} alt="create" />
            <div className="create-text">
              <div className="colored-text">FEATURE</div>
              <h3>Create your own token</h3>
              <div className="web-big">
                Create your own token. Include your token in your portfolio to
                monetise your trading strategy.
              </div>
            </div>
          </div>
          <div className="items reversed">
            <div className="create-text">
              <div className="colored-text">FEATURE</div>
              <h3>Connect with followers</h3>
              <div className="web-big">
                Transparent communication between you and your followers.
                Followers will be notified whenever you make a trade or when
                your portfolio appreciates in value.
              </div>
            </div>
            <img src={Image3} alt="create" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateSection;
