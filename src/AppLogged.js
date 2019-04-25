import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './AppLogged.css';

// Component imports
import Navbar from './layout/Navbar';
import ProximasCausas from './layout/ProximasCausas';

import CausasDestacadas from './layout/CausasDestacadas';
import CausasAmbientales from './layout/CausasAmbientales';
import CausasComunitarias from './layout/CausasComunitarias';

class AppLogged extends Component {
  render() {
    return (
      <Router>
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

export default AppLogged;
