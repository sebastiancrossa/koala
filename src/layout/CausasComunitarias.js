import React, { Component } from 'react';
import './CausasComunitarias.css';

// Component Importsa
import Causa from '../components/Causa';

class CausasComunitarias extends Component {
  render() {
    return (
      <div className='causasComunitarias'>
        <h1 className='cause-title'>Causas Comunitarias</h1>

        <div className='causasComunitarias-causas-grid'>
          <Causa />
          <Causa />
          <Causa />
        </div>
      </div>
    );
  }
}

export default CausasComunitarias;
