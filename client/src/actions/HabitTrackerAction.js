import {
  GET_ALL_HABIT,
  UPDATE_HABIT,
  DELETE_HABIT,
  ADD_HABIT
} from './types';

export const getAllHabits = () => dispatch => {
  dispatch({
    type: GET_ALL_HABIT,
  })
}

export const updateHabit = (props) => dispatch => {
  dispatch({
    type: UPDATE_HABIT,
    payload: props
  })
}

export const deleteHabit = (props) => dispatch => {
  dispatch({
    type: DELETE_HABIT,
    payload: props
  })
}

export const addHabit = (props) => dispatch => {
  dispatch({
    type: ADD_HABIT,
    payload: props
  })
}
