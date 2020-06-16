const db = require('../../db');

// QUERIES
const GET_ALL_HABITS = 'SELECT * FROM habit_tracker_habits';
const GET_DAYS = 'SELECT * FROM habit_tracker_days';
const ADD_HABIT = 'INSERT INTO habit_tracker_habits SET ?';
const ADD_DAYS = 'INSERT INTO habit_tracker_days(id, is_done, habit_id) VALUES ?';
const UPDATE_DAY = 'UPDATE habit_tracker_days SET is_done = ? WHERE id = ? AND habit_id = ?';
const DELETE_HABIT = 'DELETE FROM habit_tracker_habits WHERE id = ?';

// CALLS
function getAllHabits() {
  return new Promise((resolve, reject) => {
    db.query(GET_ALL_HABITS, (err, results) => {
      if(err) return reject(err);

      return resolve(results);
    })
  });
}

function getAllDays() {
  return new Promise((resolve, reject) => {
    db.query(GET_DAYS, (err, results) => {
      if(err) return reject(err);

      return resolve(results);
    })
  });
}

function addHabit(title) {
  return new Promise((resolve, reject) => {
    db.query(ADD_HABIT, {title: title}, (err, results) => {
      if(err) return reject(err);

      return resolve(results);
    })
  });
}

function addDays(days, id) {
  let newDays = [];

  days.forEach(day => {
    let newDay = { ...day, habit_id: id };
    newDays = [ ...newDays, Object.values(newDay)];
  });

  return new Promise((resolve, reject) => {
    db.query(ADD_DAYS, [newDays], (err, results) => {
      if(err) return reject(err);

      return resolve(results);
    })
  });
}

function updateDays(id, is_done, habit_id) {
  return new Promise((resolve, reject) => {
    db.query(UPDATE_DAY, [id, is_done, habit_id], (err, results) => {
      if(err) return reject(err);

      return resolve(results);
    })
  });
}

function deleteHabit(id) {
  return new Promise((resolve, reject) => {
    db.query(DELETE_HABIT, id, (err, results) => {
      if(err) return reject(err);

      return resolve(results);
    })
  });
}

module.exports = {
  getAllHabits,
  getAllDays,
  addHabit,
  addDays,
  updateDays,
  deleteHabit
}
