import { useState, useEffect, useCallback } from "react";
import DropDown from "./components/DropDown";

import DROPDOWN_DATA from "./data";
import "./questions-section.scss";

const QuestionsSection = () => {
  const [dropList, setDropList] = useState([]);

  let content = DROPDOWN_DATA;

  const onIdHandler = useCallback(
    (id) => {
      let newContent = [];
      content.forEach((item) => {
        if (item.id !== id) {
          let newItem = {
            ...item,
            active: false,
          };
          newContent.push(newItem);
        } else {
          let activeItem = {
            ...item,
            active: true,
          };
          newContent.push(activeItem);
        }
      });
      setDropList(newContent);
    },
    [content]
  );

  useEffect(() => {
    setDropList(content);
  }, [content]);

  return (
    <div className="questions" id="faq">
      <h2>Frequently asked questions</h2>
      <div className="questions-block">
        {dropList.map((dropdown) => {
          return (
            <DropDown
              key={dropdown.id}
              id={dropdown.id}
              openState={dropdown.active}
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
