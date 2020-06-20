import React, { useState } from 'react';

import Settings from '../../components/Settings';

function Checkbox(props) {
  const { checked = false, onChange } = props;

  return (
    <label className="checkbox relative h-5 w-5 m-1 cursor-pointer rounded-full">
      <input
        className="absolute h-0 w-0 cursor-pointer opacity-0"
        type="checkbox"
        checked={checked}
      />
      <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-gray-400 rounded-full" />
    </label>
  )
}

function HabitSettings(props) {
  const { onDelete } = props;

  return (
    <Settings>
      <p onClick={onDelete} className="hover:text-gray-700 cursor-pointer">Delete</p>
    </Settings>
  )
}

function Habit(props) {
  const { data, onChange, onDelete } = props;

  return (
    <div className="py-2 px-5">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-bold">{ data.title }</h1>
        <HabitSettings onDelete={() => onDelete(data.id)} />
      </div>


      <div className="flex flex-wrap">
      {
        data.days.map((day, key) => (
          <Checkbox
            key={key}
            checked={day.is_done}
            onChange={onChange}
          />
        ))
      }
      </div>
    </div>
  )
}

export default Habit;
