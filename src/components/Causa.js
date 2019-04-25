import React, { Component } from 'react';
import './Causa.css';
import imagenCausa from '../imgs/deforestation_friends.png';
import imagenOrganizador from '../imgs/hcl-logo.jpg';

import { withRouter } from 'react-router-dom';

// Component imports
import { Line } from 'rc-progress';

class Causa extends Component {
  handleClick = () => {
    this.props.history.push('/causa');
  };

  render() {
    return (
      <div className='causa-tarjeta'>
        <div className='causa-tarjeta-top'>
          <img
            className='causa-tarjeta-top-imagen'
            src={this.props.imgCausa}
            alt='Imagen de la causa'
            onClick={this.handleClick}
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
                  {this.props.title}
                </h3>
                <p className='causa-tarjeta-bottom-info-right-fecha'>
                  {this.props.fecha}
                </p>
              </div>
            </div>

            <div className='causa-tarjeta-bottom-extra'>
              <Line
                percent={this.props.voluntarios * 0.1}
                strokeWidth='4'
                trailWidth='3'
                strokeColor='#FF8330'
              />

              <p className='causa-tarjeta-bottom-extra-num-voluntarios'>
                {this.props.voluntarios} voluntarios
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Causa);
