import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Component imports
import CausaSeleccionada from './pages/CausaSeleccionada';

const routing = (
  <Router forceRefresh={true}>
    <div>
      <Switch>
        <Route exact path='/' component={() => <App />} />
        <Route exact path='/causa' component={CausaSeleccionada} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
