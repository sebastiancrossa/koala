import React, { Component } from 'react';
import './Participacion.css';

import profileBubbles from '../imgs/burbujas_participacion.png';

// Component imports
import ParticipacionVoluntario from '../components/ParticipacionVoluntario';
import ParticipacionSponsor from '../components/ParticipacionSponsor';

class Participacion extends Component {
  render() {
    return (
      <div className='participacion'>
        <img
          className='participacion-fondo'
          src={profileBubbles}
          alt='Profile bubbles'
        />

        <div className='container'>
          <div className='participacion-participaciones'>
            <ParticipacionVoluntario />
            <ParticipacionSponsor />
          </div>
        </div>
      </div>
    );
  }
}

export default Participacion;
