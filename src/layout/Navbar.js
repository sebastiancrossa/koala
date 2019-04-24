import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className='header-nav'>
        <div className='container navbar-header-display'>
          <h3 className='header-nav-title'>KOALA</h3>

          <div>
            <ul className='header-nav-ul'>
              <Link to='/' className='header-nav-li'>
                Explora
              </Link>
              <Link to='/' className='header-nav-li'>
                Sebastian Crossa
              </Link>
              <Link to='/' className='header-nav-li'>
                imagen
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
