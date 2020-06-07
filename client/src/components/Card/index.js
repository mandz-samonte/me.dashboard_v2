import React from 'react';

function Header(props) {
  const { className = "", children } = props;

  return (
    <div className={`${className} flex flex-col justify-center`}>
      <div className="flex">{ children }</div>
      <div className="w-full h-1 mt-3 bg-purple-800" />
    </div>
  )
}

function Body(props) {
  const { className = "", children } = props;

  return (
    <div className={`${className} flex flex-col w-full h-auto`}>
      {children}
    </div>
  )
}

function Footer(props) {
  const { className = "", children } = props;

  return (
    <div className={`${className} flex flex-col mt-auto`}>
      <div className="w-full h-1 mb-3 bg-purple-800" />
      <div className="flex">{ children }</div>
    </div>
  )
}

function Card(props) {
  const { className = "", children } = props;

  return (
    <div className={`${className} flex flex-col p-5 bg-white rounded-md`}>
      {children}
    </div>
  )
}

export default {
  Card,
  Header,
  Body,
  Footer
}
