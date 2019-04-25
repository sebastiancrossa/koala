import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-dom';
import './App.css';

import history from './utils/history';

// Component imports
import Navbar from './layout/Navbar';
import ProximasCausas from './layout/ProximasCausas';

import CausasDestacadas from './layout/CausasDestacadas';
import CausasAmbientales from './layout/CausasAmbientales';
import CausasComunitarias from './layout/CausasComunitarias';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className='app'>
          <Navbar />

          <div className='container'>
            <div className='app-toplayout'>
              <ProximasCausas />
            </div>

            <div className='app-rest'>
              <CausasDestacadas />
              <CausasAmbientales />
              <CausasComunitarias />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
