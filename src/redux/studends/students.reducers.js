import {StudentActionTypes} from './students.types';

const INITIAL_STATE = {
  students: null
}

const studentsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case StudentActionTypes.SET_STUDENT_STATE:
      return {
        ...state,
        students: action.payload
      }
    default:
      return state
  }

}

export default studentsReducer