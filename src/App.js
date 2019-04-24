import React, { Component } from 'react';
import { Link } from 'react-dom';
import './App.css';

// Component imports
import Navbar from './layout/Navbar';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
      </div>
    );
  }
}

export default App;
