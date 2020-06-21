import React, { Component } from 'react';

import StoryCard from './components/card';
import stories from './stories';
import LayoutHOC from './LayoutHOC';

import './index.scss';

class Stories extends Component {
  render() {
    return (
      <div className="stories">
        {Object.values(stories).map(story => {
          return <StoryCard {...story} key={story.slug} />;
        })}
      </div>
    );
  }
}

export default LayoutHOC(Stories);
