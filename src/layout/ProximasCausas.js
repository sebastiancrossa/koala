import React, { Component } from 'react';
import './ProximasCausas.css';

// Component imports
import Causa from '../components/Causa';
import imagenCausa1 from '../imgs/deforestation_friends.png';
import imagenCausa2 from '../imgs/cook.png';
import imagenCausa3 from '../imgs/turtles.png';

class ProximasCausas extends Component {
  render() {
    return (
      <div className='proximascausas'>
        <div className='container'>
          <h2 className='proximascausas-titulo'>Top 3 causas a asistir</h2>

          <div className='proximascausas-causas-grid'>
            <Causa
              onClick={this.routeChange}
              imgCausa={imagenCausa1}
              title="Reforestacion del bosque 'La Primavera'"
              fecha='Viernes 13 de Mayo 2019, 15:00hrs'
              voluntarios='250'
            />
            <Causa
              title='Preparar comidas para la  Casa del Migrante'
              imgCausa={imagenCausa2}
              fecha='Sabado 22 de Junio 2019, 9:00hrs'
              voluntarios='150'
            />
            <Causa
              title='Voluntariado con Tortugas Marinas en Mexico'
              imgCausa={imagenCausa3}
              fecha='Sabado 9 de Agosto 2019, 9:00hrs'
              voluntarios='536'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProximasCausas;
