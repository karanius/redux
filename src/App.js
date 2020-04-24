import React, { useState, useEffect } from "react";
import "./App.css";

import { connect } from "react-redux";
import { setStudentState } from "./redux/studends/students.action";

import MainPage from "./pages/MainPage/MainPage.component";
import PageFrame from "./components/PageFrame/PageFrame.component";
import SearchBar from "./components/SearchBar/SearchBar.component";
import Loading from "./components/Loading/Loading.component";

const App = (props) => {
  const [inputStateName, setInputStateName] = useState("");
  const [inputStateTag, setInputStateTag] = useState("");
  const { setStudentState } = props;
  useEffect(() => {
    fetch("https://www.hatchways.io/api/assessment/students")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let newResponse = response.students.map((student) => {
          return {
            ...student,
            tag: [],
          };
        });
        setStudentState(newResponse);
      });
  }, [setStudentState]);

  // 2. if studentsState isnt null then show PageFrame, else show Loading
  return props.studentsState ? (
    <PageFrame
      searchEngine={
        <>
          <SearchBar
            placeholder="Search by name"
            id="name-input"
            value={inputStateName}
            onChange={(event) => {
              setInputStateName(event.target.value);
            }}
          />
          <SearchBar
            placeholder="Search by tags"
            id="tag-input"
            value={inputStateTag}
            onChange={(event) => {
              setInputStateTag(event.target.value);
            }}
          />
        </>
      }
    >
      <MainPage filterByName={inputStateName} filterByTag={inputStateTag} />
    </PageFrame>
  ) : (
    <Loading />
  );
};

const mapStateToProps = (states) => {
  const { studentsState } = states;
  return {
    studentsState: studentsState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStudentState: (state) => dispatch(setStudentState(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
