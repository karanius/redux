import React from "react";

import StudentCardGenerator from "../../components/StudentCardGenerator/StudentCardGenerator.component";

// this is the main page

const MainPage = (props) => {
  return (
    <StudentCardGenerator
      filterByName={props.filterByName}
      filterByTag={props.filterByTag}
    />
  );
};

export default MainPage;
