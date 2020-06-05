import React from 'react';

function Button(props) {
  const { className = "", children, onClick } = props;

  return (
    <button
      className={`${className} hover:bg-purple-600 py-3 px-5 bg-purple-800 text-white rounded-sm`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;
