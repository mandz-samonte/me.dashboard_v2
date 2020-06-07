import React, { useState } from 'react';

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

function Habit(props) {
  const { title = "Sample", days = [], onChange,  } = props;

  return (
    <div className="p-2">
      <label>{ title }</label>

      <div className="flex flex-wrap">
      {
        days.map((day, key) => (
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
