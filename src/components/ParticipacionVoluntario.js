import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ParticipacionVoluntario.css';

class ParticipacionVoluntario extends Component {
  render() {
    return (
      <div className='participacionVoluntario participacion-card'>
        <div className='participacion-container'>
          <h1 className='participacion-card-titulo'>
            Participacion Voluntario
          </h1>
          <p className='participacion-card-descripcion'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            omnis itaque enim suscipit quas tempore voluptatem repellat est,
            minima deserunt distinctio voluptate, velit tenetur aperiam, maiores
            vitae ducimus esse delectus?
          </p>

          <Link to='/logged-in' className='participacion-card-button'>
            APLICAR
          </Link>
        </div>
      </div>
    );
  }
}

export default ParticipacionVoluntario;
