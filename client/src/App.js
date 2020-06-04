import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="flex bg-gray-200">
        <Sidebar />

        <div className="w-11/12 h-screen">

        </div>
      </div>
    </Router>
  );
}

export default App;
