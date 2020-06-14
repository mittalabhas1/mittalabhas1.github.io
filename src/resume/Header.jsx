/**
 * Created by abm on 2020-04-28.
 */
import React, { Component } from 'react';

const icons = [
  {
    iconClass: 'fas fa-phone-alt',
    text: '+91 82660 63709',
    href: 'tel:+918266063709',
    target: '_self'
  },
  {
    iconClass: 'fas fa-envelope',
    text: 'mittalabhas1@gmail.com',
    href: 'mailto:mittalabhas1@gmail.com',
    target: '_self'
  },
  {
    iconClass: 'fas fa-link',
    text: 'abhasmittal.com',
    href: 'http://www.abhasmittal.com',
    target: '_blank'
  },
  {
    iconClass: 'fas fa-map-marker-alt',
    text: 'Delhi NCR'
  }
];

export default class Header extends Component {
  displayName = 'Header';

  renderIcons = () =>
    icons.map(icon => (
      <div>
        <span>
          <i className={icon.iconClass} />
          &nbsp;
        </span>
        <span>
          {icon.href ? (
            <a href={icon.href} target={icon.target}>
              {icon.text}
            </a>
          ) : (
            icon.text
          )}
        </span>
      </div>
    ));

  render() {
    return (
      <div className="header">
        <div className="header-inner-container">
          <div className="name">Abhas Mittal</div>
          <div className="headline">
            Creative Senior Software Engineer offering 5 years of experience.
            Enthusiastic about developing forward-thinking solutions to
            tomorrow's productivity problems. Accomplished in delivering quality
            output within stringent timelines. Demonstrated a strong capacity to
            lead teams and collaborate.
          </div>
        </div>
        <div className="panel">{this.renderIcons()}</div>
      </div>
    );
  }
}
