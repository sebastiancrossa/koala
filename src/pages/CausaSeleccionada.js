import React, { Component } from 'react';

import './CausaSeleccionada.css';
import organizerImage from '../imgs/hcl-logo.jpg';

import causeImage from '../imgs/DEFORESTACION_1.jpg';

// Component imports
import Navbar from '../layout/NavbarOpposite';
import Causa from '../components/Causa';
import { Line } from 'rc-progress';

import imagenCausa1 from '../imgs/turtles.png';

import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class CausaSeleccionada extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#3B4154';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

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
                    percent={250 * 0.1}
                    strokeWidth='4'
                    trailWidth='3'
                    strokeColor='#FF8330'
                  />
                  <p className='causaSeleccionada-columna-derecha-info-voluntarios'>
                    250 voluntarios
                  </p>

                  <button
                    onClick={this.openModal}
                    className='causaSeleccionada-columna-derecha-info-btnParticipa'
                  >
                    PARTICIPA
                  </button>

                  <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel='Login Modal'
                  >
                    <h2
                      className='header-nav-li-modal-h2'
                      ref={subtitle => (this.subtitle = subtitle)}
                    >
                      Log in with...
                    </h2>
                    <div className='header-nav-li-modal-social-list'>
                      <button className='header-nav-li-modal-social-button'>
                        Facebook
                      </button>
                      <button className='header-nav-li-modal-social-button'>
                        Google
                      </button>
                      <Link
                        to='/participacion'
                        className='header-nav-li-modal-social-button header-nav-li-modal-social-button-twitter'
                      >
                        Twitter
                      </Link>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
          </div>

          <div className='causaSeleccionada-actualizaciones'>
            <p className='causaSeleccionada-actualizaciones-titulo'>
              Actualizaciónes
            </p>

            <div className='causaSeleccionada-actualizaciones-posts'>
              <div className='causaSeleccionada-actualizaciones-post'>
                <div className='causaSeleccionbada-actualizaciones-post-grid'>
                  <div className='causaSeleccionada-actualizaciones-post-grid-izquierda'>
                    <img
                      src={causeImage}
                      className='causaSeleccionada-actualizaciones-post-grid-izquierda-imagen'
                      alt='Imagen actualizacion'
                    />
                  </div>

                  <div className='causaSeleccionada-actualizaciones-post-grid-derecha'>
                    <div className='causaSeleccionada-actualizaciones-post-grid-derecha-container'>
                      <div className='causaSeleccionada-actualizaciones-post-grid-derecha-titulo'>
                        Pudimos impedir un intento de deforestamiento
                      </div>
                      <div className='causaSeleccionada-actualizaciones-post-grid-derecha-fecha'>
                        Lunes, 23 de Mayo 2019
                      </div>
                      <div className='causaSeleccionada-actualizaciones-post-grid-derecha-descripcion'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi aliquam leo eget nisi tempor, dictum venenatis
                        diam finibus. Maecenas rhoncus mollis commodo.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='causaSeleccionada-actualizaciones-post'>
                <div className='causaSeleccionbada-actualizaciones-post-grid'>
                  <div className='causaSeleccionada-actualizaciones-post-grid-izquierda'>
                    <img
                      src={causeImage}
                      className='causaSeleccionada-actualizaciones-post-grid-izquierda-imagen'
                      alt='Imagen actualizacion'
                    />
                  </div>

                  <div className='causaSeleccionada-actualizaciones-post-grid-derecha'>
                    <div className='causaSeleccionada-actualizaciones-post-grid-derecha-container'>
                      <div className='causaSeleccionada-actualizaciones-post-grid-derecha-titulo'>
                        Pudimos impedir un intento de deforestamiento
                      </div>
                      <div className='causaSeleccionada-actualizaciones-post-grid-derecha-fecha'>
                        Lunes, 23 de Mayo 2019
                      </div>
                      <div className='causaSeleccionada-actualizaciones-post-grid-derecha-descripcion'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi aliquam leo eget nisi tempor, dictum venenatis
                        diam finibus. Maecenas rhoncus mollis commodo.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='causaSeleccionada-causasSimilares'>
            <p className='causaSeleccionada-actualizaciones-titulo'>
              Causas Similares
            </p>

            <div className='causaSeleccionada-causasSimilares-grid'>
              <Causa
                title='Voluntariado con Tortugas Marinas en Mexico'
                imgCausa={imagenCausa1}
                fecha='Sabado 9 de Agosto 2019, 9:00hrs'
                voluntarios='536'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CausaSeleccionada;
