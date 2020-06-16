const express = require('express');
const db = require('../../db');

const router = express.Router();

const query = require('../query/query_habit_tracker');

router.get('/', async (req, res) => {
  let habits = await query.getAllHabits();
  let days = await query.getAllDays();

  let modifiedHabits = habits.map(habit => {
    let modifiedHabit = { ...habit, days: [] };

    days.map(day => {
      if(habit.id === day.habit_id) modifiedHabit.days.push(day);
    })

    return modifiedHabit;
  });

  return res.json({
    data: modifiedHabits,
  })
})

router.post('/', async (req, res) => {
  let { title, days } = req.body;

  try {
    let newHabit = await query.addHabit(title);
    let newDays = await query.addDays(days, newHabit.insertId);

    return res.json({
      data: req.body
    })
  } catch(err) {
    console.log(err);

    return res.json({
      message: err
    })
  }
})

router.put('/', async (req, res) => {
  let { id, is_done, habit_id } = req.body;

  try {
    let updatedHabit = await query.updateDays(id, is_done, habit_id);

    return res.json({
      data: req.body,
      message: 'Days has been updated...'
    })
  } catch (err) {
    return res.json({
      message: 'Oops! Something went wrong...'
    })
  }
})

router.delete('/:id', async (req, res) => {
  let { id } = req.params;

  try {
    let deletedHabit = await query.deleteHabit(id);

    return res.json({
      data: deletedHabit,
      message: 'Habit has beed deleted...'
    })
  } catch (err) {
    return res.json({
      error: err,
      message: 'Oops! Something went wrong'
    })
  }
})


module.exports = router;
