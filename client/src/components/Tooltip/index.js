import React from 'react';

function Tooltip(props) {
  const { children, message } = props;

  return (
    <div className="group relative flex items-center">
      { children }
      <span style={{left: "110%" }} className="group-hover:visible absolute z-10  invisible py-1 px-4 bg-black text-white text-center rounded">{ message }</span>
    </div>
  )
}

export default Tooltip;
