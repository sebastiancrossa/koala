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
          <Causa
            onClick={this.routeChange}
            title="Construccion y desarrollo comunitario'"
            fecha='Viernes 26 de Julio 2019, 14:00hrs'
            voluntarios='562'
          />
          <Causa
            title='Preparar comidas para la  Casa del Migrante'
            fecha='Sabado 22 de Junio 2019, 9:00hrs'
            voluntarios='451'
          />
          <Causa
            title='Apoya dando clases a niños de bajos recursos'
            fecha='Jueves 1 de Julio 2019, 16:00hrs'
            voluntarios='122'
          />
        </div>
      </div>
    );
  }
}

export default CausasComunitarias;
