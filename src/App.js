import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from './home';
import Stories from './blog';
import Resume from './resume';
import ThirdParty from './ThirdParty';

class App extends Component {
  componentDidMount() {
    ThirdParty();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Stories />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
