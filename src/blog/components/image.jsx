import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './card.scss';

class StoryImage extends Component {
  static propTypes = {
    coverImage: PropTypes.string,
    imgCredits: PropTypes.shape({
      link: PropTypes.string,
      title: PropTypes.string
    }),
    renderAsBg: PropTypes.bool
  };

  static defaultProps = {
    renderAsBg: true
  };

  render() {
    let { coverImage, imgCredits, renderAsBg, slug } = this.props;
    if (coverImage) {
      coverImage = `${process.env.PUBLIC_URL}/images/${slug}/${coverImage}`;
    }
    return (
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        {coverImage ? renderAsBg ? (
          <div
            className="cover-image-bg"
            style={{ backgroundImage: `url(${coverImage})` }}
          />
        ) : (
          <img src={coverImage} className="cover-image" alt={'cover'} />
        ) : null}
        {coverImage && imgCredits ? (
          <span className="image-credits">
            Image Credits:{' '}
            <a href={imgCredits.link} target="_blank" rel="noopener noreferrer">
              {imgCredits.title || imgCredits.link}
            </a>
          </span>
        ) : null}
      </div>
    );
  }
}

export default StoryImage;
