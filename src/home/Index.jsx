import React, { Component } from 'react';

import abhas from '../abhas.png';
import './Index.css';

const socialIcons = [
  {
    classname: 'fab fa-linkedin-in',
    url: 'https://www.linkedin.com/in/mittalabhas1/'
  },
  { classname: 'fab fa-github', url: 'https://github.com/mittalabhas1/' },
  { classname: 'fab fa-twitter', url: 'https://twitter.com/abhas_4/' },
  {
    classname: 'fas fa-envelope-open-text',
    url: 'mailto:mittalabhas1@gmail.com',
    target: '_self'
  },
  {
    classname: 'fas fa-comment',
    onClick: () =>
      window.ChatGen &&
      window.ChatGen.startInteraction({ interactionId: 632909 })
  }
];

class Home extends Component {
  renderSocialIcon = (icon, i) => {
    return (
      <li key={`social-icon-${i}`} onClick={icon.onClick || (() => {})}>
        <a
          className="home-link"
          href={icon.url}
          target={icon.target || '_blank'}
          rel="noopener noreferrer"
        >
          <i className={`${icon.classname}`} />
        </a>
      </li>
    );
  };
  render() {
    return (
      // Design Credits: https://codepen.io/Mestika/pen/KVXVWE
      // Flag Credits: https://code.sololearn.com/WrMgz6S4e1Zt/#html
      <div id="wrapper">
        <aside className="profile-card">
          <header>
            <a target="_blank" href="/">
              <img src={abhas} alt={'headshot'} className="hoverZoomLink" />
              <div className="flag">
                <ul className="ashok-chakra">
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                </ul>
              </div>
            </a>

            <h1>Abhas Mittal</h1>

            <h2>Full Stack Web Engineer</h2>
          </header>

          <div className="profile-bio">
            <p>
              Creative Senior Software Engineer with 5 years of experience.
              Enthusiastic about developing forward-thinking solutions to
              tomorrow's productivity problems.
            </p>
          </div>

          <ul className="profile-social-links">
            {socialIcons.map(this.renderSocialIcon)}
          </ul>
        </aside>
      </div>
    );
  }
}

export default Home;
