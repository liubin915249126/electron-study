import React from 'react';
import { Switch, Route,Router } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
// import { Router, Route, Switch, Redirect } from "dva/router";

export default function Routes({ history }) {
  return (
      <Router history={history}>
      <Switch>
        <Route path={routes.COUNTER} component={CounterPage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
      </Router>
  );
}
