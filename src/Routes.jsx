import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, AllKegs, NewKegForm, Error404 } from './components';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/allKegs" component={AllKegs} />
  </Switch>
);

export default Routes;
