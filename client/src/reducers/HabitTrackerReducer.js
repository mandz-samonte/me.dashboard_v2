import {
  GET_ALL_HABIT,
  UPDATE_HABIT,
  DELETE_HABIT,
  ADD_HABIT
} from '../actions/types';

const SAMPLE_DATA = [
  {
    id: 1,
    title: 'Sample 1',
    days: [
      {
        id: 1,
        is_done: true,
        habit_id: 1
      },
      {
        id: 1,
        is_done: false,
        habit_id: 1
      }
    ]
  },
  {
    id: 2,
    title: 'Sample 2',
    days: [
      {
        id: 1,
        is_done: false,
        habit_id: 2
      }
    ]
  }
]

const initialState = {
  habits: [ ...SAMPLE_DATA ]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_HABIT:
      return state;
    case UPDATE_HABIT:
      return {
        ...state,
        habits: []
      }
    case DELETE_HABIT:
      return {
        ...state,
        habits: []
      }
    case ADD_HABIT:
      return {
        ...state,
        habits: []
      }
    default:
      return state;
  }
}
