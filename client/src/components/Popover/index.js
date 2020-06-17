import React from 'react';

function Container(props) {
  const { children } = props;

  return (
    <div className="relative group">
      { children }
    </div>
  )
}

function Content(props) {
  const { children } = props;

  return (
    <div className="absolute shadow-md rounded bg-white z-10 hidden group-hover:block">
      { children }
    </div>
  )
}

export default {
  Container,
  Content
}
