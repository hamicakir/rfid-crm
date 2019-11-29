import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import Setup from './containers/Setup';
import Dashboard from './containers/Dashboard';

export default () => (
  <App>
    <Switch>
      <Route path={routes.HOME} exact component={HomePage} />
      <Route path={routes.SETUP} exact component={Setup} />
      <Route path={routes.DASHBOARD} exact component={Dashboard} />
    </Switch>
  </App>
);
