const db = require('../../db');

// QUERIES
const GET_ALL_HABITS = 'SELECT * FROM habit_tracker_habits';
const GET_DAYS = 'SELECT * FROM habit_tracker_days WHERE habit_id = ?';
const ADD_HABIT = 'INSERT INTO habit_tracker_habits SET ?';
const ADD_DAYS = 'INSER INTO habit_tracker_days SET ?';
const UPDATE_DAY = 'UPDATE habit_tracker_days SET is_done = ? WHERE id = ? AND habit_id = ?';
const DELETE_HABIT = 'DELETE FROM habit_tracker_habits WHERE id = ?';

// CALLS
export function getAllHabits() {
  return new Promise((resolve, reject) => {
    db.query(GET_ALL_HABITS, (err, results) => {
      if(err) return reject(err);

      return resolve(results);
    })
  });
}

export function getAllDays() {
  return new Promise((resolve, reject) => {
    db.query(GET_DAYS, (err, results) => {
      if(err) return reject(err);

      return resolver(results);
    })
  });
}

export function addHabit(props) {
  return new Promise((resolve, reject) => {
    db.query(ADD_HABIT, props, (err, results) => {
      if(err) return reject(err);

      return resolve(results);
    })
  });
}

export function addDays(props) {
  return new Promise((resolve, reject) => {
    db.query(ADD_DAYS, props, (err, results) => {
      if(err) return reject(err);

      return resolve(results);
    })
  });
}

export function updateDays(props) {
  return new Promise((resolve, reject) => {
    db.query(UPDATE_DAY, props, (err, results) => {
      if(err) return reject(err);

      return resolve(results);
    })
  });
}

export function deleteHabit(props) {
  return new Promise((resolve, reject) => {
    db.query(DELETE_HABIT, props, (err, results) => {
      if(err) return reject(err);

      return resolve(results);
    })
  });
}

export default {
  getAllHabits,
  getAllDays,
  addHabit,
  addDays,
  updateDays,
  deleteHabit
}
