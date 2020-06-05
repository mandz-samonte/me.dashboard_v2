import React from 'react';

function Modal(props) {
  const { className = "", children, onClose, onClick } = props;

  return (
    <div className="w-screen h-screen absolute top-0 left-0">

      <div
        className="w-full h-full bg-white opacity-25 absolute top-0 left-0"
        onClick={onClose}
      />
    </div>
  )
}

export default Modal;
