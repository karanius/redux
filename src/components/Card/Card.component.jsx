import React, { useState } from "react";
import "./Card.styles.css";

import { connect } from "react-redux";
import { setStudentState } from "../../redux/studends/students.action";

import OpenCloseIcon from "../OpenCloseIcon/OpenCloseIcon.component";
import GradesAndTags from "../GradesAndTags/GradesAndTags.component";

const Card = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tagInput, setTagInput] = useState("");

  const {
    id,
    firstName,
    lastName,
    email,
    company,
    skill,
    grades,
    pic,
    tag,
    // city,
  } = props.data;

  const TakeAverage = (grades) => {
    let totalSum = 0;
    for (let i in grades) {
      totalSum = parseInt(grades[i]) + totalSum;
    }
    const average = totalSum / grades.length;
    return average;
  };

  const OpenOrClose = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const submitTag = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      const tagText = tagInput.trim();
      setTagInput("");

      const newState = props.studentsState.students.map((student) => {
        if (student.id === id) {
          student.tag = [...student.tag, tagText];
          return student;
        }
        return student;
      });

      props.setStudentState(newState);
    }
  };

  return (
    <div className="Card">
      <div className="Card-left">
        <img className="Card-img" src={pic} alt="pic" />
      </div>
      <div className="Card-right">
        <p className="Card-name">
          {firstName.toUpperCase()} {lastName.toUpperCase()}
        </p>
        <p className="Card-rest">Email: {email}</p>
        <p className="Card-rest">Company: {company}</p>
        <p className="Card-rest">Skill: {skill}</p>
        <p className="Card-rest">Average: {TakeAverage(grades)}%</p>
        {isOpen ? (
          <GradesAndTags
            grades={grades}
            tagList={tag}
            tagInput={tagInput}
            setTagInput={setTagInput}
            submitTag={submitTag}
          />
        ) : null}
      </div>
      <OpenCloseIcon
        onOpenOrClose={OpenOrClose}
        id={id}
        style={`open-close open-close-${id}`}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { studentsState } = state;
  return {
    studentsState: studentsState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStudentState: (state) => dispatch(setStudentState(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
