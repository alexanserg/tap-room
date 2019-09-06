import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, UpdateKegForm, Error404, Beer, TopAmberAle, ThisPorter, Wicked, Grate, BrothersPaleAle, BrothersIPA } from './components';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/brothersIpa" component={BrothersIPA} />
    <Route path="/beer" component={Beer} />
    <Route path="/wickedIpa" component={Wicked} />
    <Route path="/topAmberAle" component={TopAmberAle} />
    <Route path="/thisPorter" component={ThisPorter} />
    <Route path="/brothersPaleAle" component={BrothersPaleAle} />
    <Route path="/gratePilsner" component={Grate} />
  </Switch>
);

export default Routes;
