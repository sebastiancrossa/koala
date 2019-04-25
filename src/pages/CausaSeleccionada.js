import React, { Component } from 'react';

import './CausaSeleccionada.css';
import organizerImage from '../imgs/hcl-logo.jpg';

import causeImage from '../imgs/DEFORESTACION_1.jpg';

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
              <div className='causaSeleccionada-columna-izquierda-container'>
                <img
                  src={causeImage}
                  className='causaSeleccionada-columna-izquierda-galeria'
                  alt='Cause image gallery'
                />

                <div className='causaSeleccionada-columna-izquierda-texto'>
                  <div className='causaSeleccionada-columna-izquierda-desc causaSeleccionada-columna-izquierda-texto-especifico'>
                    <div className='causaSeleccionada-columna-izquierda-desc-titulo causaSeleccionada-columna-izquierda-texto-titulo'>
                      Descripcion
                    </div>
                    <div className='causaSeleccionada-columna-izquierda-desc-texto causaSeleccionada-columna-izquierda-texto-descripcion'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi aliquam leo eget nisi tempor, dictum venenatis diam
                      finibus. Maecenas rhoncus mollis commodo. Proin eleifend
                      lacus ac lectus faucibus, non commodo ante tempor. Proin
                      blandit erat ut nibh aliquam consequat. Mauris mollis id
                      ipsum ut luctus. Duis porttitor cursus enim, a semper
                      sapien viverra non. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </div>
                  </div>

                  <div className='causaSeleccionada-columna-izquierda-p1 causaSeleccionada-columna-izquierda-texto-especifico'>
                    <div className='causaSeleccionada-columna-izquierda-p1-titulo causaSeleccionada-columna-izquierda-texto-titulo'>
                      ¿Cómo puedo participar?
                    </div>
                    <div className='causaSeleccionada-columna-izquierda-p1-texto causaSeleccionada-columna-izquierda-texto-descripcion'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi aliquam leo eget nisi tempor, dictum venenatis diam
                      finibus. Maecenas rhoncus mollis commodo. Proin eleifend
                      lacus ac lectus faucibus, non commodo ante tempor. Proin
                      blandit erat ut nibh aliquam consequat. Mauris mollis id
                      ipsum ut luctus. Duis porttitor cursus enim, a semper
                      sapien viverra non. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </div>
                  </div>

                  <div className='causaSeleccionada-columna-izquierda-p2 causaSeleccionada-columna-izquierda-texto-especifico'>
                    <div className='causaSeleccionada-columna-izquierda-p2-titulo causaSeleccionada-columna-izquierda-texto-titulo'>
                      Actividades
                    </div>
                    <div className='causaSeleccionada-columna-izquierda-p2-texto causaSeleccionada-columna-izquierda-texto-descripcion'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi aliquam leo eget nisi tempor, dictum venenatis diam
                      finibus. Maecenas rhoncus mollis commodo. Proin eleifend
                      lacus ac lectus faucibus, non commodo ante tempor. Proin
                      blandit erat ut nibh aliquam consequat. Mauris mollis id
                      ipsum ut luctus. Duis porttitor cursus enim, a semper
                      sapien viverra non. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </div>
                  </div>
                </div>
              </div>
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

          <div className='causaSeleccionada-actualizaciones'>
            <p className='causaSeleccionada-actualizaciones-titulo'>
              Actualizaciónes
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CausaSeleccionada;
