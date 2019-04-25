import React, { Component } from 'react';
import './NavbarOpposite.css';
import { Link } from 'react-router-dom';

import Modal from 'react-modal';

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

class NavbarOpposite extends Component {
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
      <nav className='header-nav'>
        <div className='container navbar-header-display'>
          <Link to='/' className='header-nav-title'>
            KOALA
          </Link>

          <div>
            <ul className='header-nav-ul'>
              <Link
                to='/'
                className='header-nav-li header-nav-li-vertical-center'
              >
                Explora
              </Link>
              <button
                className='header-nav-li header-nav-li-vertical-center header-nav-li header-nav-li-vertical-center-signup'
                onClick={this.openModal}
              >
                Sign Up
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
                    to='/logged-in'
                    className='header-nav-li-modal-social-button header-nav-li-modal-social-button-twitter'
                  >
                    Twitter
                  </Link>
                </div>
              </Modal>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavbarOpposite;
