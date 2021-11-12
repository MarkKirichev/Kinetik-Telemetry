import React from 'react';
import { Switch, Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './Home';
import About from './About';
import Stats from './stats/Stats';
import Navigation from 'components/Navigation';

const Routes = () => {

  return (
    <Router history={createBrowserHistory()}>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/stats">
          <Stats />
        </Route>
        <Route exact path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
