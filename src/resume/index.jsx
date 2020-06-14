/**
 * Created by abm on 2020-04-28.
 */
import React, { Component } from 'react';

import Header from './Header';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Certification from './Certification';
import Skills from './Skills';

import './index.css';

export default class ResumeIndex extends Component {
  displayName = 'ResumeIndex';

  static propTypes = {};

  render() {
    return (
      <div className="container">
        <Header />
        <div className="body">
          <div className="left-container">
            <div className="inner-container left">
              <WorkExperience />
            </div>
          </div>

          <div className="right-container">
            <div className="inner-container right">
              <Education />
              <Skills />
              <Certification />
            </div>
          </div>
        </div>
      </div>
    );
  }
}