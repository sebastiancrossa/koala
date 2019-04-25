import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Component imports
import CausaSeleccionada from './pages/CausaSeleccionada';
import Participacion from './pages/Participacion';
import AppLogged from './AppLogged';

const routing = (
  <Router forceRefresh={true}>
    <div>
      <Switch>
        <Route exact path='/' component={() => <App />} />
        <Route exact path='/logged-in' component={AppLogged} />
        <Route exact path='/causa' component={CausaSeleccionada} />
        <Route exact path='/participacion' component={Participacion} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
