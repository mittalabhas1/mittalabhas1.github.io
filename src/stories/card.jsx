import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './card.scss';

class Home extends Component {
  static propTypes = {
    title: PropTypes.string,
    details: PropTypes.string,
    coverImage: PropTypes.string,
    imgCredits: PropTypes.string,
    slug: PropTypes.string
  };

  render() {
    const { title, details, coverImage, imgCredits, slug } = this.props;
    return (
      <header className={coverImage ? 'story-card' : 'story-card-no-image'}>
        {coverImage ? (
          <div
            className="bg"
            style={{ backgroundImage: `url(${coverImage})` }}
          />
        ) : null}
        {imgCredits ? (
          <span className="image-credits">
            Image Credits:{' '}
            <a href={imgCredits} target="_blank" rel="noopener noreferrer">
              {imgCredits}
            </a>
          </span>
        ) : null}
        <div className={coverImage ? 'container' : 'container-no-image'}>
          <section className={coverImage ? 'content' : 'content-no-image'}>
            <h1>{title}</h1>
            <p>{details}</p>
            <Link to={slug}>
              Continue reading <i className="fas fa-arrow-right" />
            </Link>
          </section>
        </div>
      </header>
    );
  }
}

export default Home;
