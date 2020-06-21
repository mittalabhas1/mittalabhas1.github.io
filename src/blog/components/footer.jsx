import React, { Component } from 'react';

import { socialContacts } from '../../home';

import '../index.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        {socialContacts.slice(0, 3).map(contact => {
          return (
            <a href={contact.url} target="_blank" rel="noopener noreferrer" key={`footer-${contact.title}`}>
              {contact.title}
            </a>
          );
        })}
      </div>
    );
  }
}

export default Footer;
