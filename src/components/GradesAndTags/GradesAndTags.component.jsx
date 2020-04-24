import React from "react";
import Input from "../Input/input.component";

import "./GradesAndTags.style.css";

const GradesAndTags = ({
  id,
  grades,
  tagList,
  tagInput,
  setTagInput,
  submitTag,
}) => {
  const generateTag = () => {
    return tagList.map((tagTxt, index) => {
      return (
        <div className="tag" key={index}>
          {tagTxt}
        </div>
      );
    });
  };

  const generateGrades = () => {
    return grades.map((item, index) => {
      return (
        <div className="grade-test" key={index}>
          <span className="grade-num">Test {index + 1}:</span>{" "}
          <span className="grade-score">{item}%</span>
        </div>
      );
    });
  };

  return (
    <>
      <div className={`Card-grades Card-grades-${id}`}>
        {generateGrades()}
        <div>
          {tagList.length ? (
            <div className="tag-container">{generateTag()}</div>
          ) : null}
          <Input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            className="add-tag-input"
            placeholder="Add a tag"
            onKeyPress={submitTag}
          />
        </div>
      </div>
    </>
  );
};

export default GradesAndTags;
