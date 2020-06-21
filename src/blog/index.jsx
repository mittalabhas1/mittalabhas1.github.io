import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import StoryList from './list';
import StoryDetail from './detail';

import './index.scss';

class Blog extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/blog/:slug">
          <StoryDetail />
        </Route>
        <Route exact path="/blog">
          <StoryList />
        </Route>
        <Route path="*">
          <Redirect to="/blog" />
        </Route>
      </Switch>
    );
  }
}

export default Blog;
