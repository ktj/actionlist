import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="liput-ja-hinnat" component={App} />
    </Route>
  </Router>
), document.getElementById('root'));

registerServiceWorker();
