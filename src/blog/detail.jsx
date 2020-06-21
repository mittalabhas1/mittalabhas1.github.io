import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Image from './components/image';
import LayoutHOC from './LayoutHOC';
import stories from './stories';
import Share from './components/share';

import './detail.scss';

class Story extends Component {
  state = {
    story: null
  };

  componentDidMount() {
    const story = stories[this.props.match.params.slug];
    if (story) {
      this.setState({ story });
    } else {
      this.props.history.push('/stories');
    }
  }

  render() {
    if (!this.state.story) return null;
    const { title, coverImage, imgCredits, slug, publishDate } = this.state.story;

    const data = require(`./stories/${slug}.jsx`).content;

    return (
      <div id="story-page">
        <div className="share-buttons-desktop">
          <Share title={title} />
        </div>
        <div>
          <div>
            <h1>{title}</h1>
            <div>
              <div id="publish-date">{publishDate}</div>
              <div className="share-buttons-mobile">
                <Share title={title} direction={'row'} />
              </div>
            </div>
          </div>
          <div className="story-content">
            <div className="cover-image-wrapper">
              <Image
                imgCredits={imgCredits}
                coverImage={coverImage}
                renderAsBg={false}
                slug={slug}
              />
            </div>
            {data.map(datum => {
              return <p>{datum}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default LayoutHOC(withRouter(Story));
