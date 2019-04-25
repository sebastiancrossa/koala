import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import fotoPerfil from '../imgs/perfil.jpg';

class Navbar extends Component {
  render() {
    return (
      <nav className='header-nav'>
        <div className='container navbar-header-display'>
          <h3 className='header-nav-title'>KOALA</h3>

          <div>
            <ul className='header-nav-ul'>
              <Link
                to='/'
                className='header-nav-li header-nav-li-vertical-center'
              >
                Explora
              </Link>
              <Link
                to='/'
                className='header-nav-li header-nav-li-vertical-center'
              >
                Sebastian Crossa
              </Link>
              <Link to='/' className='header-nav-li'>
                <img
                  src={fotoPerfil}
                  className='header-nav-li-profile-pic'
                  alt='Foto de perfil de usuario iniciado sesion'
                />
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
