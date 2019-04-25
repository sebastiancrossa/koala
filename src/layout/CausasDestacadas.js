import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CausasDestacadas.css';
import history from '../utils/history';

// Component Imports
import Causa from '../components/Causa';

class CausasDestacadas extends Component {
  routeChange = () => {
    this.history.push('/causa');
  };

  render() {
    return (
      <div className='causasDestacadas'>
        <h1 className='cause-title'>Causas Destacadas</h1>

        <div className='causasDestacadas-causas-grid'>
          <Causa onClick={this.routeChange} />
          <Causa />
          <Causa />
        </div>
      </div>
    );
  }
}

export default withRouter(CausasDestacadas);
