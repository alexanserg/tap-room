import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, AllKegs } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={AllKegs} />
  </Switch>
);

export default Routes;
