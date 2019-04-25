import React, { Component } from 'react';

import './CausaSeleccionada.css';
import organizerImage from '../imgs/hcl-logo.jpg';

// Component imports
import Navbar from '../layout/Navbar';
import { Line } from 'rc-progress';

class CausaSeleccionada extends Component {
  render() {
    return (
      <div className='causaSeleccionada'>
        <Navbar />

        <div className='container'>
          <div className='causaSeleccionada-columnas'>
            <div className='causaSeleccionada-columna-izquierda'>
              <h1>izq</h1>
            </div>

            <div className='causaSeleccionada-columna-derecha'>
              <div className='container'>
                <div className='causaSeleccionada-columna-derecha-organizador'>
                  <img
                    src={organizerImage}
                    className='causaSeleccionada-columna-derecha-organizador-foto'
                    alt='Organizers pic'
                  />

                  <p className='causaSeleccionada-columna-derecha-organizador-nombre'>
                    HCL
                  </p>
                </div>

                <div className='causaSeleccionada-columna-derecha-info'>
                  <h1 className='causaSeleccionada-columna-derecha-info-titulo'>
                    Reforestación del bosque “La Primavera”
                  </h1>
                  <p className='causaSeleccionada-columna-derecha-info-fecha'>
                    Viernes 18 de Mayo 2019, 14:00hrs
                  </p>
                  <Line
                    percent='50'
                    strokeWidth='4'
                    trailWidth='3'
                    strokeColor='#FF8330'
                  />
                  <p className='causaSeleccionada-columna-derecha-info-voluntarios'>
                    227 voluntarios
                  </p>

                  <button className='causaSeleccionada-columna-derecha-info-btnParticipa'>
                    PARTICIPA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CausaSeleccionada;
