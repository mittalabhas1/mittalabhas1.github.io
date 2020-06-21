import React, { Component } from 'react';
import Helmet from 'react-helmet';

import StoryCard from './components/card';
import stories from './stories';
import LayoutHOC from './LayoutHOC';

import './index.scss';

class Stories extends Component {
  render() {
    const title = 'Stories by Abhas';
    const content = 'Personal Blog by Abhas Mittal';
    const image = process.env.PUBLIC_URL + '/images/logo.png';
    return (
      <div className="stories">
        <Helmet>
          <title>{title}</title>
          <meta name="twitter:title" content={title} />
          <meta name="og:title" content={title} />
          <meta property="og:image" content={image} />
          <meta name="twitter:image" content={image} />
          <meta name="description" content={content} />
          <meta name="twitter:description" content={content} />
          <meta property="og:description" content={content} />
          <link rel="canonical" href="https://abhasmittal.com" />
        </Helmet>
        {Object.values(stories).map(story => {
          return <StoryCard {...story} key={story.slug} />;
        })}
      </div>
    );
  }
}

export default LayoutHOC(Stories);
