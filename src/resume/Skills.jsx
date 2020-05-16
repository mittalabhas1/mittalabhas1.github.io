/**
 * Created by abm on 2020-04-28.
 */
import React, {Component} from 'react';

const skills = [
  'Javascript',
  'ReactJS',
  'Redux',
  'ExpressJS',
  'NodeJS',
  'React Native',
  'Ruby',
  'Ruby-on-Rails',
  'Python',
  'Django',
  'PHP',
  'Postgres',
  'AWS',
  'ElasticBeanStalk',
  'SQS',
  'S3'
];

export default class Skills extends Component {
  displayName = 'Skills';

  renderSkills = () => skills.map(skill => (
    <span className="skill">{skill}</span>
  ));

  render() {
    return (
      <div className="section skills-section">
        <div className="section-heading">Skills</div>
        <div className="skills">
          {this.renderSkills()}
        </div>
      </div>
    );
  }
}