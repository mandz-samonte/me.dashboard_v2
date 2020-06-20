import {
  GET_ALL_HABIT,
  UPDATE_HABIT,
  DELETE_HABIT,
  ADD_HABIT
} from '../actions/types';


const initialState = {
  habits: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_HABIT:
      return {
        ...state,
        habits: action.payload
      };
    case UPDATE_HABIT:
      return {
        ...state,
        habits: []
      }
    case DELETE_HABIT:
      return {
        ...state,
        habits: state.habits.filter(habit => habit.id !== action.payload)
      }
    case ADD_HABIT:
      return {
        ...state,
        habits: [ ...state.habits, action.payload ]
      }
    default:
      return state;
  }
}
