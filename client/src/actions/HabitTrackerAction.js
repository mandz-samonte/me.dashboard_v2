import {
  GET_ALL_HABIT,
  UPDATE_HABIT,
  DELETE_HABIT,
  ADD_HABIT
} from './types';
import apiHabitTracker from '../api/apiHabitTracker';

export const getAllHabits = () => dispatch => {
  apiHabitTracker.index().then(({data}) => {
    dispatch({
      type: GET_ALL_HABIT,
      payload: data.data
    })
  })
}

export const updateHabit = (props) => dispatch => {
  console.log(props);
}

export const deleteHabit = (props) => dispatch => {
  dispatch({
    type: DELETE_HABIT,
    payload: props
  })
}

export const addHabit = (props) => dispatch => {
  let formData = {
    title: props.title,
    days: []
  }

  for(let i = 0; i < props.days; i++) {
    let day = {
      id: i,
      is_done: false
    }

    formData.days.push(day);
  }

  apiHabitTracker.add(formData).then(({data}) => {
    console.log(data.data)
  })
}
