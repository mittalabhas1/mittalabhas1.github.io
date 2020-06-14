import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StoryCard from '../stories/card';
import stories from './stories';
import { socialContacts } from '../home';

import './index.scss';

class Blog extends Component {
  render() {
    return (
      <div id="stories-page">
        <div className="header-container">
          <h1>Stories</h1>
          <div className="header">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              className="logo"
              alt="stories"
            />
            <div className="blog-name">
              <span className="blog-heading">
                Personal blog by <Link to={'/'}>Abhas Mittal</Link>
              </span>
              <span className="blog-subheading">
                I write code; drink cofee and sleep!
              </span>
            </div>
          </div>
        </div>
        <div className="stories">
          {stories.map(story => {
            return <StoryCard {...story} />;
          })}
        </div>
        <div className="footer-container">
          {socialContacts.slice(0, 3).map(contact => {
            return (
              <a href={contact.url} target="_blank" rel="noopener noreferrer">{contact.title}</a>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Blog;
