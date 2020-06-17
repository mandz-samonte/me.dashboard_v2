import React, { useState } from 'react';

function Settings(props) {
  const { children } = props;
  const [open, setOpen] = useState(false);

  const circleStyle = {
    width: "8px",
    height: "8px"
  }

  return (
    <div className="relative ">
      <div onClick={() => setOpen(!open)} className="flex flex-row p-1 group cursor-pointer">
        <div style={circleStyle} className="bg-gray-600 group-hover:bg-gray-500 rounded-full mr-1" />
        <div style={circleStyle} className="bg-gray-600 group-hover:bg-gray-500 rounded-full mr-1" />
        <div style={circleStyle} className="bg-gray-600 group-hover:bg-gray-500 rounded-full mr-1" />
      </div>

      {
        open &&
        <div style={{ bottom: "115%" }} className="absolute px-4 py-1 bg-white shadow-md rounded" >
          { children }
        </div>
      }
    </div>
  )
}

export default Settings;
