import React from 'react';

function Content(props) {
  const { children, className } = props;

  return (
    <div className={`${className} p-12 flex flex-col w-11/12 h-screen justify-between`}>
      {children}
    </div>
  )
}

export default Content;
