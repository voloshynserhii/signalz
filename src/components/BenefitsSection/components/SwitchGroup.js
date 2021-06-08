import { useState } from "react";

import SwitchButton from "../../UI/Buttons/SwitchButton";
import "../bebefits-section.scss";

const SwitchGroup = (props) => {
  const [active, setActive] = useState(true);

  const onChangeHandler = () => {
    setActive((prev) => !prev);
    props.switchHandler(active);
  };
  if (active)
    return (
      <div className="switch-group" onClick={onChangeHandler}>
        <SwitchButton>Earn</SwitchButton>
        <div className="switch-passive">Connect</div>
      </div>
    );
  return (
    <div className="switch-group" onClick={onChangeHandler}>
      <div className="switch-passive">Earn</div>
      <SwitchButton>Connect</SwitchButton>
    </div>
  );
};
export default SwitchGroup;
