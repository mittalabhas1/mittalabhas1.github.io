import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './share.scss';

const shareSites = (title, url) => [
  {
    anchorClass: 'twitter',
    iconClass: 'fab fa-twitter',
    generateURL: () => {
      return `//twitter.com/intent/tweet?text=${title} by @abhas_4&url=${url}`;
    }
  },
  {
    anchorClass: 'facebook',
    iconClass: 'fab fa-facebook',
    generateURL: () => {
      return `//facebook.com/sharer.php?u=${url}`;
    }
  },
  {
    anchorClass: 'email',
    iconClass: 'fas fa-envelope-open-text',
    generateURL: () => {
      return `mailto:?subject=${title}&body=Check out this article by Abhas Mittal I found: ${url}`;
    }
  }
];

class Share extends Component {
  static propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    direction: PropTypes.oneOf(['column', 'row'])
  };

  static defaultProps = {
    direction: 'column'
  };

  render() {
    const sites = shareSites(
      `${this.props.title}`,
      window ? window.location.href : 'https://abhasmittal.com'
    );
    const style = { flexDirection: this.props.direction };
    if (this.props.direction === 'row') {
      style.alignItems = 'center';
    } else {
      style.justifyContent = 'center';
    }
    return (
      <div
        className="share-container"
        style={style}
      >
        {sites.map(site => {
          return (
            <a
              className={site.anchorClass}
              href={site.generateURL()}
              target="_blank"
              rel="noopener noreferrer"
              key={`share-${this.props.direction}-${site.anchorClass}`}
            >
              <i className={site.iconClass} />
            </a>
          );
        })}
      </div>
    );
  }
}

export default Share;
