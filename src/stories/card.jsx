import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './card.scss';

class Home extends Component {
  static propTypes = {
    title: PropTypes.string,
    details: PropTypes.string,
    coverImage: PropTypes.string
  };

  render() {
    const { title, details, coverImage } = this.props;
    return (
      <header className={coverImage ? 'story-card' : 'story-card-no-image'}>
        {coverImage ? <div className="bg" /> : null}
        <div className={coverImage ? 'container' : 'container-no-image'}>
          <section className={coverImage ? 'content' : 'content-no-image'}>
            <h1>{title}</h1>
            <p>{details}</p>
            <a href="/">
              Continue reading <i className="fas fa-arrow-right" />
            </a>
          </section>
        </div>
      </header>
    );
  }
}

export default Home;
