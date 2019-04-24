import React, { Component } from 'react';
import './Causa.css';
import imagenCausa from '../imgs/DEFORESTACION_1.jpg';
import imagenOrganizador from '../imgs/hcl-logo.jpg';

// Component imports
import { Line } from 'rc-progress';

class Causa extends Component {
  render() {
    return (
      <div className='causa-tarjeta'>
        <div className='causa-tarjeta-top'>
          <img
            className='causa-tarjeta-top-imagen'
            src={imagenCausa}
            alt='Imagen de la causa'
          />
        </div>

        <div className='causa-tarjeta-bottom'>
          <div className='container'>
            <div className='causa-tarjeta-bottom-info'>
              <div className='causa-tarjeta-bottom-info-left'>
                <img
                  className='causa-tarjeta-bottom-imagen'
                  src={imagenOrganizador}
                  alt='Imagen del organizador de la causa'
                />
              </div>

              <div className='causa-tarjeta-bottom-info-right'>
                <h3 className='causa-tarjeta-bottom-info-right-titulo'>
                  Reforestacion del Bosque "La Primavera"
                </h3>
                <p className='causa-tarjeta-bottom-info-right-fecha'>
                  Viernes 18 de Mayo 2019, 14:00hrs
                </p>
              </div>
            </div>

            <div className='causa-tarjeta-bottom-extra'>
              <Line
                percent='50'
                strokeWidth='4'
                trailWidth='3'
                strokeColor='#FF8330'
              />

              <p className='causa-tarjeta-bottom-extra-num-voluntarios'>
                250 voluntarios
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Causa;
