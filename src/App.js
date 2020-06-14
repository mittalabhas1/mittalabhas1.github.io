import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from './home';
import Blog from './blog';
import Resume from './resume';

class App extends Component {
  render() {
    return (
      <HashRouter basename={'/'}>
        <Switch>
          <Route exact path="/blog/stories">
            <Blog />
          </Route>
          <Route exact path="/">
            <Home />
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
