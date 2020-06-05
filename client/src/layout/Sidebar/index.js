import React from 'react';
import { Link } from 'react-router-dom';

const SIDEBAR_LINKS = [
  {
    title: "Dashboard",
    link: "/",
  },
  {
    title: "Habit-Tracker",
    link: "/habit-tracker"
  },
  {
    title: "Todo-List",
    link: "/todo-list"
  }
]

function NavbarLink(props) {
  return (
    <Link to={props.to} className="">
      <div className="bg-purple-700 hover:bg-purple-600 w-20 h-20 shadow-md  rounded-md my-16" />
    </Link>
  )
}

function Profile(props) {
  return (
    <div className="flex items-center justify-center border-2 border-gray-500 w-20 h-20 rounded-full">
      <Link to="/profile">
        <div className="bg-gray-500 w-16 h-16 rounded-full hover:shadow-lg" />
      </Link>
    </div>
  )
}

function Settings(props) {
  return (
    <div className="w-20 h-20 rounded-full">
    </div>
  )
}

function Sidebar() {
  return (
    <div className="flex flex-col items-center justify-around sm:hidden md:w-2/10vw w-1/10vw h-screen bg-purple-800 rounded-r-lg">
      <div>
        <Profile />
      </div>

      <nav>
      {
        SIDEBAR_LINKS.map(item => (
          <NavbarLink
            to={item.link}
          />
        ))
      }
      </nav>

      <div>
        <Settings />
      </div>
    </div>
  )
}

export default Sidebar;
