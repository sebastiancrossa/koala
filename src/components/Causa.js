import React, { Component } from 'react';
import './Causa.css';
import imagenCausa from '../imgs/DEFORESTACION_1.jpg';

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
                <p>image</p>
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
              <div className='causa-tarjeta-bottom-extra-barra barra-progreso-voluntarios'>
                barra aqui
              </div>

              <div className='causa-tarjeta-bottom-extra-num-voluntarios'>
                <p>250 voluntarios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Causa;
