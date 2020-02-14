import React, { Component } from 'react';
import abhas from './abhas.png';
import './App.css';

const socialIcons = [
  { classname: 'linkedin-square', url: 'https://www.linkedin.com/in/mittalabhas1/' },
  { classname: 'github-square', url: 'https://github.com/mittalabhas1/' },
  { classname: 'twitter-square', url: 'https://twitter.com/abhas_4/' },
  { classname: 'envelope-square', url: 'mailto:hello@abhasmittal.com', target: '_self' },
];

class App extends Component {
  renderSocialIcon = (icon, i) => {
    return (
      <a
        className="App-link"
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
      <div className="App">
        <header className="App-header">
          <div className="name-container">
            <span className="first-name">Abhas</span>
            <span className="last-name">Mittal</span>
          </div>
          <img src={abhas} className="App-logo" alt="logo" />
          <div className="social-container">
            {socialIcons.map(this.renderSocialIcon)}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
