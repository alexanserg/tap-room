import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, UpdateKegForm, Error404, Beer, TopAmberAle, ThisPorter, Wicked, Grate, BrothersPaleAle, BrothersIPA } from './components';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />

  </Switch>
);

export default Routes;
