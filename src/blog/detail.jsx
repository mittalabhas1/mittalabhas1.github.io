import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';

import Image from './components/image';
import LayoutHOC from './LayoutHOC';
import stories from './stories';
import Share from './components/share';

import './detail.scss';

class Story extends Component {
  state = {
    story: null,
    data: []
  };

  componentDidMount() {
    const { slug } = this.props.match.params;
    const story = stories[slug];
    if (story) {
      this.setState({ story, data: require(`./stories/${slug}.jsx`).content });
    } else {
      this.props.history.push('/blog');
    }
  }

  render() {
    if (!this.state.story) return null;
    const {
      title,
      coverImage,
      imgCredits,
      slug,
      publishDate,
      details
    } = this.state.story;

    const helmetTitle = `${title} | Blog | Abhas Mittal`;

    return (
      <div id="story-page">
        <Helmet>
          <title>{helmetTitle}</title>
          <meta name="twitter:title" content={helmetTitle} />
          <meta name="og:title" content={helmetTitle} />
          <meta property="og:image" content={coverImage} />
          <meta name="twitter:image" content={coverImage} />
          <meta name="description" content={details} />
          <meta name="twitter:description" content={details} />
          <meta property="og:description" content={details} />
          <link rel="canonical" href={`https://abhasmittal.com/blog/${slug}/`} />
        </Helmet>
        <div className="share-buttons-desktop">
          <Share title={title} />
        </div>
        <div style={{ width: '100%' }}>
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
            {this.state.data.map((datum, idx) => {
              return (
                <div className="story-block" key={`story-block-${slug}-${idx}`}>
                  {datum}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default LayoutHOC(withRouter(Story));
