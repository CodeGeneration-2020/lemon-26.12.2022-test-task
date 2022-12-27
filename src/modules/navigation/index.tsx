import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { APP_KEYS } from '../common/constants';
import HomePageContainer from '../home';

export const MainRouter = () => (
  <Router>
    <Switch>
      <Route component={HomePageContainer} path={APP_KEYS.ROUTER_KEYS.ROOT} />
    </Switch>
  </Router>
);
