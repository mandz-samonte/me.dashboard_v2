import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Sidebar from './layout/Sidebar';
import Content from './layout/Content';

import Card from './components/Card';

function App() {
  return (
    <Router>
      <div className="flex bg-gray-200">
        <Sidebar />

        <Content>
          <div className="mb-5">
            <Card.Card className="w-full h-20 shadow-md"></Card.Card>
          </div>

          <div className="flex md:flex-col h-full">
            <div className="w-3/4 md:w-full h-full md:h-2/3 mr-5">
              <Card.Card className="w-full h-full  shadow-md">
              </Card.Card>
            </div>

            <div className="flex flex-col md:flex-row md:w-full md:mt-5 md:h-1/3 w-1/4">
              <Card.Card className="w-full h-full shadow-md"></Card.Card>
              <Card.Card className="w-full h-full shadow-md mt-5 sm:mt-0 md:mt-0 md:ml-5"></Card.Card>
            </div>
          </div>
        </Content>
      </div>
    </Router>
  );
}

export default App;
