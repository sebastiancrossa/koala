import React, { Component } from 'react';
import './ProximasCausas.css';

// Component imports
import Causa from '../components/Causa';

class ProximasCausas extends Component {
  render() {
    return (
      <div className='proximascausas'>
        <div className='container'>
          <h2 className='proximascausas-titulo'>Proximas causas a asistir</h2>

          <div className='proximascausas-causas-grid'>
            <Causa />
            <Causa />
            <Causa />
          </div>
        </div>
      </div>
    );
  }
}

export default ProximasCausas;
