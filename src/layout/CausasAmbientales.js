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
          <Causa
            onClick={this.routeChange}
            title="Reforestacion del bosque 'La Primavera'"
            fecha='Viernes 13 de Mayo 2019, 15:00hrs'
            voluntarios='250'
          />
          <Causa
            title='Voluntariado con Tortugas Marinas en Mexico'
            fecha='Sabado 9 de Agosto 2019, 9:00hrs'
            voluntarios='536'
          />
        </div>
      </div>
    );
  }
}

export default CausasAmbientales;
