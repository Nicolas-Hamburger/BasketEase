import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/login/login';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login" component={LoginPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
