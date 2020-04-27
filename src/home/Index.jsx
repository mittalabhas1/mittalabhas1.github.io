import React, { Component } from 'react';

import abhas from '../abhas.png';
import './Index.css';

const socialIcons = [
  { classname: 'linkedin-square', url: 'https://www.linkedin.com/in/mittalabhas1/' },
  { classname: 'github-square', url: 'https://github.com/mittalabhas1/' },
  { classname: 'twitter-square', url: 'https://twitter.com/abhas_4/' },
  { classname: 'envelope-square', url: 'mailto:hello@abhasmittal.com', target: '_self' },
];

class Home extends Component {
  renderSocialIcon = (icon, i) => {
    return (
      <a
        className="home-link"
        href={icon.url}
        target={icon.target || "_blank"}
        rel="noopener noreferrer"
        key={`social-icon-${i}`}
      >
        <i className={`fa fa-${icon.classname}`} />
      </a>
    )
  };
  render() {
    return (
      <div className="home">
        <header className="home-header">
          <div className="name-container">
            <span className="first-name">Abhas</span>
            <span className="last-name">Mittal</span>
          </div>
          <img src={abhas} className="home-logo" alt="logo" />
          <div className="social-container">
            {socialIcons.map(this.renderSocialIcon)}
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
