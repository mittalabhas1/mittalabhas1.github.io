import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from './home';
import Stories from './blog';
import Resume from './resume';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/stories">
            <Stories />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
