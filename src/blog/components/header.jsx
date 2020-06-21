import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import '../index.scss';

class Header extends Component {
  render() {
    console.log(this.props.match);
    return (
      <div className="header-container">
        {/*<h1><Link to={'/blog'}>Stories</Link></h1>*/}
        <div className="header">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            className="logo"
            alt="stories"
          />
          <div className="blog-name">
            <span className="blog-heading">
              {this.props.match.params.slug ? (
                <Link to="/blog">Blog by Abhas Mittal</Link>
              ): (
                <React.Fragment>
                  Blog by <Link to={'/'}>Abhas Mittal</Link>
                </React.Fragment>
              )}
            </span>
            <span className="blog-subheading">
              I write code; drink coffee and sleep!
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
