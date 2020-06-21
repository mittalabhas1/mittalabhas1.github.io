import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import StoryList from './list';
import StoryDetail from './detail';

import './index.scss';

class Blog extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/stories/:slug">
          <StoryDetail />
        </Route>
        <Route exact path="/stories">
          <StoryList />
        </Route>
        <Route path="*">
          <Redirect to="/stories" />
        </Route>
      </Switch>
    );
  }
}

export default Blog;
