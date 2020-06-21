import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from './image';
import './card.scss';

class StoryCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    details: PropTypes.string,
    coverImage: PropTypes.string,
    imgCredits: PropTypes.string,
    slug: PropTypes.string
  };

  render() {
    const { title, details, coverImage, imgCredits, slug, publishDate } = this.props;
    return (
      <header className={coverImage ? 'story-card' : 'story-card-no-image'}>
        <div className="image-wrapper">
          <Image imgCredits={imgCredits} coverImage={coverImage} slug={slug} />
        </div>
        <div className={coverImage ? 'container' : 'container-no-image'}>
          <section className={coverImage ? 'content' : 'content-no-image'}>
            <h1>{title}</h1>
            <p>{details}</p>
            <Link to={`/stories/${slug}`}>
              Continue reading <i className="fas fa-arrow-right" />
            </Link>
            <div className="publish-date">
              {publishDate}
            </div>
          </section>
        </div>
      </header>
    );
  }
}

export default StoryCard;
