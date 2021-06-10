import { useState } from "react";
import DropDown from "./components/DropDown";
import DownIcon from "../../assets/images/down.svg";

import DROPDOWN_DATA from "./data";
import "./questions-section.scss";

const QuestionsSection = () => {
  const [dropList, setDropList] = useState(DROPDOWN_DATA);

  const onIdHandler = (id) => {
    const activeIndex = dropList.findIndex(item => item.id === id);
    const active = dropList.find((item, index) => index === activeIndex);
    console.log(active);
  }
  return (
    <div className="questions">
      <h2>Frequently asked questions</h2>
      <div className="questions-block">
        {dropList.map((dropdown) => {
          return (
            <DropDown
              key={dropdown.id}
              id={dropdown.id}
              openState={dropdown.active}
              arrow={DownIcon}
              title={dropdown.title}
              hiddenText={dropdown.hiddenText}
              onId={onIdHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuestionsSection;
