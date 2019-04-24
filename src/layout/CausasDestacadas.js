import React, { Component } from 'react';
import './CausasDestacadas.css';

// Component Imports
import Causa from '../components/Causa';

class CausasDestacadas extends Component {
  render() {
    return (
      <div className='causasDestacadas'>
        <h1 className='cause-title'>Causas Destacadas</h1>

        <div className='causasDestacadas-causas-grid'>
          <Causa />
          <Causa />
          <Causa />
        </div>
      </div>
    );
  }
}

export default CausasDestacadas;
