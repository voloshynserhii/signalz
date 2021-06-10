import { useState, useEffect } from "react";

import "../questions-section.scss";

const DropDown = (props) => {
  const [opened, setOpened] = useState();

  const onOpenHandler = () => {
    setOpened((prev) => !prev);
    props.onId(props.id);
  };

  useEffect(() => {
    setOpened(props.openState);
  }, []);

  return (
    <div className="dropdown" onClick={onOpenHandler}>
      <div className="dropdown-toggle flex-between-center" onClick={props.onId}>
        <h5>{props.title}</h5>
        <div className="dropdown-arrow">
          <img src={props.arrow} alt={props.title} />
        </div>
      </div>
      <div className={opened ? "dropdown-content" : "dropdown-hidden"}>
        <p>{props.hiddenText}</p>
      </div>
    </div>
  );
};
export default DropDown;
