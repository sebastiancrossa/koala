import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CausasDestacadas.css';
import history from '../utils/history';

// Component Imports
import Causa from '../components/Causa';
import imagenCausa1 from '../imgs/deforestation_friends.png';
import imagenCausa2 from '../imgs/cook.png';
import imagenCausa3 from '../imgs/emergency.png';

class CausasDestacadas extends Component {
  routeChange = () => {
    this.history.push('/causa');
  };

  render() {
    return (
      <div className='causasDestacadas'>
        <h1 className='cause-title'>Causas Destacadas</h1>

        <div className='causasDestacadas-causas-grid'>
          <Causa
            onClick={this.routeChange}
            imgCausa={imagenCausa1}
            title="Reforestacion del bosque 'La Primavera'"
            fecha='Viernes 13 de Mayo 2019, 15:00hrs'
            voluntarios='250'
          />
          <Causa
            imgCausa={imagenCausa2}
            title='Preparar comidas para la  Casa del Migrante'
            fecha='Sabado 22 de Junio 2019, 9:00hrs'
            voluntarios='150'
          />
          <Causa
            imgCausa={imagenCausa3}
            title='Voluntario como Brigadista'
            fecha='Jueves 1 de Julio 2019, 16:00hrs'
            voluntarios='910'
          />
        </div>
      </div>
    );
  }
}

export default withRouter(CausasDestacadas);
