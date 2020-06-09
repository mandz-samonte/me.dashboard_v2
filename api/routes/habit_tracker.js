const express = require('express');
const db = require('../../db');

const router = express.Router();

// QUERIES
const GET_ALL_HABITS = 'SELECT * FROM habit_tracker_habits';
const GET_DAYS = 'SELECT * FROM habit_tracker_days WHERE habit_id = ?';
const ADD_HABIT = 'INSERT INTO habit_tracker_habits SET ?';
const ADD_DAYS = 'INSER INTO habit_tracker_days SET ?';
const UPDATE_DAY = 'UPDATE habit_tracker_days SET is_done = ? WHERE id = ? AND habit_id = ?';
const DELETE_HABIT = 'DELETE FROM habit_tracker_habits WHERE id = ?';

router.get('/', (req, res) => {
  db.query(GET_ALL_HABITS, (error, results) => {
    ge
  })
})
