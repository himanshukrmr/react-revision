import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [expand, setExpanded] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setExpanded((prev) => !prev);
        }}
      >
        Accordian
        {expand ? (
          <span>
            <FontAwesomeIcon icon={faAngleUp} />
          </span>
        ) : (
          <span>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        )}
      </div>
      <div id="accordian-div" className={expand ? "active" : ""}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque minima
        numquam placeat officiis cum molestias vel? Ipsum aperiam iusto amet
        minus officiis laudantium quod voluptate, optio ad deleniti. Ad.
      </div>
    </div>
  );
}

export default App;
