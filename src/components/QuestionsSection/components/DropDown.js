import { useState, useEffect, useCallback } from "react";

import DownIcon from "../../../assets/images/down.svg";
import UpIcon from "../../../assets/images/up.svg";
import "../questions-section.scss";

const DropDown = (props) => {
  const [opened, setOpened] = useState();

  const onOpenHandler = useCallback(() => {
    const id = props.id;
    props.onId(id);
  }, [props]);

  useEffect(() => {
    setOpened(props.openState);
  }, [props.openState]);

  return (
    <div className="dropdown" onClick={onOpenHandler}>
      <div className="dropdown-toggle flex-between-center" onClick={props.onId}>
        <h5>{props.title}</h5>
        <div
          className={
            opened
              ? "dropdown-arrow dropdown-arrow-active"
              : "dropdown-arrow dropdown-arrow-passive"
          }
        >
          <img src={opened ? UpIcon : DownIcon} alt={props.title} />
        </div>
      </div>
      <div className={opened ? "dropdown-content" : "dropdown-hidden"}>
        <p>{props.hiddenText}</p>
      </div>
    </div>
  );
};
export default DropDown;
