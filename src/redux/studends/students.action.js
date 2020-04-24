import { StudentActionTypes } from "./students.types";

export const setStudentState = (state) => {
  return {
    type: StudentActionTypes.SET_STUDENT_STATE,
    payload: state,
  };
};
