/**
 * Created by abm on 2020-04-28.
 */
import React, {Component} from 'react';

const degrees = [{
  title: 'B.Tech, Pulp and Paper Engineering',
  university: 'Indian Institute of Technology, Roorkee',
  degreeYear: 2015
}];

export default class Education extends Component {
  displayName = 'Education';

  renderDegrees = () => degrees.map(degree => (
    <div className="education">
      <div className="degree">{degree.title}</div>
      <div className="awardee">
        <span className="university">{degree.university}</span>
        <span className="degree-year">({degree.degreeYear})</span></div>
    </div>
  ));

  render() {
    return (
      <div className="section education-section">
        <div className="section-heading">Education</div>
        {this.renderDegrees()}
      </div>
    );
  }
}