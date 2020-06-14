import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import abhas from '../abhas.png';
import './index.scss';

const socialIcons = [
  {
    classname: 'fab fa-linkedin-in',
    url: '//www.linkedin.com/in/mittalabhas1/'
  },
  { classname: 'fab fa-github', url: '//github.com/mittalabhas1/' },
  { classname: 'fab fa-twitter', url: '//twitter.com/abhas_4/' },
  {
    classname: 'fas fa-envelope-open-text',
    url: 'mailto:mittalabhas1@gmail.com'
  },
  {
    classname: 'fas fa-file-contract',
    url: `${process.env.PUBLIC_URL}/Resume_Abhas_Mittal.pdf`
  },
  {
    classname: 'fas fa-blog',
    url: '/blog',
    target: '_self'
  }
];

class Home extends Component {
  renderSocialIcon = (icon, i) => {
    const element = <i className={icon.classname} />;
    const commonProps = {
      className: "home-link",
      target: icon.target || '_blank',
      rel: "noopener noreferrer"
    };
    return (
      <li key={`social-icon-${i}`} onClick={icon.onClick || (() => {})}>
        {
          icon.url.startsWith('mailto:') ? (
            <a {...commonProps} href={icon.url}>{element}</a>
          ) : (
            <Link {...commonProps} to={icon.url}>{element}</Link>
          )
        }
      </li>
    );
  };
  render() {
    return (
      // Design Credits: https://codepen.io/Mestika/pen/KVXVWE
      // Indian Flag Credits: https://code.sololearn.com/WrMgz6S4e1Zt/#html
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
