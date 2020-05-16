/**
 * Created by abm on 2020-04-28.
 */
import React, {Component} from 'react';

const certificates = [{
  title: 'Neural Networks and Deep Learning',
  duration: 'October 2018'
}, {
  title: 'Structuring Machine Learning Projects',
  duration: 'November 2018'
}, {
  title: 'Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization',
  duration: 'November 2018'
}];

export default class Certifications extends Component {
  displayName = 'Certifications';

  renderCertifications = () => certificates.map(certificate => (
    <div className="education">
      <div className="degree">{certificate.title}</div>
      <div className="university">{certificate.duration}</div>
    </div>
  ));

  render() {
    return (
      <div className="section internships-section">
        <div className="section-heading">Certifications</div>
        {this.renderCertifications()}
      </div>
    );
  }
}