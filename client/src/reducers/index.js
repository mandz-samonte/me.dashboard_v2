import { combineReducers } from 'redux';

import HabitTrackerReducer from './HabitTrackerReducer';

export default combineReducers({
  habits: HabitTrackerReducer
});
