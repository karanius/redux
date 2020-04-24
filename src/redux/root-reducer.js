import { combineReducers } from "redux";
import studentsReducer from "./studends/students.reducers";

export default combineReducers({
  studentsState: studentsReducer,
});
