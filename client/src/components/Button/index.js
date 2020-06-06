import React from 'react';

function Button(props) {
  const { className = "", children, onClick, circle = false } = props;

  return (
    <button
      className={`${className} ${circle ? 'rounded-full p-2' : 'rounded-sm py-2 px-4' } hover:bg-purple-600 bg-purple-800 text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;
