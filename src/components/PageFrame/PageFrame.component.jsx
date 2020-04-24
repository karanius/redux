import React from "react";
import "./PageFrame.styles.css";

// this component creates the background and the frame
const PageFrame = ({ children, searchEngine }) => {
  return (
    <div className="PageFrame">
      <div className="Box">
        <div className="searchEngine">{searchEngine}</div>
        <div className="children-section">{children}</div>
      </div>
    </div>
  );
};

export default PageFrame;
