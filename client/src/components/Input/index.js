import React from 'react';

function Input(props) {
  const {
    className = "",
    type = "text",
    label = "",
    placeholder = "Input text here",
    onChange
  } = props;

  return (
    <div className="flex flex-col mb-2">
      <label className="mb-1 ml-1">{ label }</label>
      <input
        className={`${className} py-2 px-4 text-gray-700 rounded border border-gray-400`}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
    </div>
  )
}

export default Input;
