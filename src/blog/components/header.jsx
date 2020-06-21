import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../index.scss';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h1><Link to={'/stories'}>Stories</Link></h1>
        <div className="header">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            className="logo"
            alt="stories"
          />
          <div className="blog-name">
            <span className="blog-heading">
              Blog by <Link to={'/'}>Abhas Mittal</Link>
            </span>
            <span className="blog-subheading">
              I write code; drink cofee and sleep!
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
