import React from "react";
import Card from "../Card/Card.component";
import { connect } from "react-redux";

// this component generates the student cards
const StudentCardGenerator = (props) => {
  let filteredList = null;
  const { students } = props.studentsState;
  const { filterByTag, filterByName } = props;

  // filter by name or tag or both!
  if (students) {
    filteredList = students.filter((student) => {
      const name = student.firstName + " " + student.lastName;
      return name.toLowerCase().includes(filterByName.toLowerCase());
    });

    if (!!filterByTag) {
      filteredList = filteredList.filter((student) => {
        return !!student.tag.length;
      });
      filteredList = filteredList.map((student) => {
        for (let i in student.tag) {
          if (student.tag[i].toLowerCase().includes(filterByTag.toLowerCase()))
            return student;
        }
        return null;
      });
    }
    filteredList = filteredList.filter((student) => {
      return student !== undefined && student !== null;
    });
  }

  return (
    <>
      {filteredList
        ? filteredList.map((studentData, index) => {
            return <Card data={studentData} key={index} />;
          })
        : null}
    </>
  );
};

const mapStateToProps = (state) => {
  const { studentsState } = state;
  return {
    studentsState: studentsState,
  };
};

export default connect(mapStateToProps, null)(StudentCardGenerator);
