import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-dom';
import './App.css';

// Component imports
import Navbar from './layout/Navbar';
import ProximasCausas from './layout/ProximasCausas';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Navbar />

          <div className='container'>
            <div className='app-toplayout' />
            <ProximasCausas />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
