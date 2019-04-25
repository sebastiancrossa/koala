import React, { Component } from 'react';

import './CausasAmbientales.css';

// Component imports
import Causa from '../components/Causa';

class CausasAmbientales extends Component {
  render() {
    return (
      <div className='causasAmbientales'>
        <h1 className='cause-title'>Causas ambientales</h1>

        <div className='causasAmbientales-causas-grid'>
          <Causa />
          <Causa />
        </div>
      </div>
    );
  }
}

export default CausasAmbientales;
