/**
 * Created by abm on 2020-04-28.
 */
import React, {Component} from 'react';

const jobs = [{
  company: 'Flyhomes Inc.',
  designation: 'Senior Software Engineer (Full Stack)',
  duration: 'April 2017 - Present',
  summary: 'Led the technology in the success story of Flyhomes during its multiple funding rounds including $21M by Canvas Ventures and $17M by Andreessen Horowitz.',
  responsibilities: [
    'Developed a search engine querying the database for the location of listings and other search parameters for buying the house using ReactJS/Redux and Ruby-on-Rails serving 80k customers till date',
    'Automated several manual operations involved in buying a house: brought down the time taken to draft offers on any house from 45 minutes to 5 minutes and time to find the best price through comparable listing analysis from an hour to under 15 minutes saving hours of manual work by the operations team every single day',
    'Created a customised recommendation system to suggest listings to prospective buyers based on their search criteria',
    'Planned architecture for automated and scheduled migration of data from MLS providers to a single source (over 20 million listings till date)',
    'Created design systems that the company has been using since 2018',
    'Engineered from ground up, the CRM software ("terminal") for over 200 employees and led integrations with other CRMs like Copper and Close',
    'Created a feed based on the user\'s saved search on the lines of inbox zero',
  ]
}, {
  company: 'Nikola Tech Pvt. Ltd.',
  designation: 'Software Engineer',
  duration: 'June 2015 - March 2017',
  summary: 'Partnered with the founders to create cutting edge apps. Shaped app\'s MVP and developed it from scratch',
  responsibilities: [
    'Handled tech behind Strawberry POS, the restaurant point of sale system in a three membered engineering team',
    'Led end to end development of Go Strawberry, an online order cum loyalty and feedback management platform for restaurants, developed using Django Rest Framework and React-Redux Stack powered by Typescript and Service Workers',
    'Developed Email Scheduler from scratch to timely deliver email reports of restaurant\'s daily transactions using Node JS',
    'Built print module for Strawberry Register, an electron application and a chrome app to use the Strawberry POS cashier web app as a desktop application for print and networking effects',
    'Led integrations with Mobikwik, Paytm, Razorpay and Stripe'
  ]
}];

export default class WorkExperience extends Component {
  displayName = 'WorkExperience';

  renderJobs = () => {
    return jobs.map(job => (
      <div className="job">
        <div className="job-title">
          <span className="company">{job.company},</span>&nbsp;
          <span className="designation">{job.designation}</span>&nbsp;
          <span className="duration">({job.duration})</span>
        </div>
        {job.subTitle ? (<div className="job-subtitle">{job.subTitle}</div>) : null}
        {job.summary ? (<div className="job-summary">{job.summary}</div>) : null}
        <div className="job-assignments">
          <ul>
            {job.responsibilities ? job.responsibilities.map(responsibility => (
              <li>{responsibility}</li>
            )) : null}
          </ul>
        </div>
      </div>
    ))
  };

  render() {
    return (
      <div className="section work-experience-section">
        <div className="section-heading">Work Experience</div>
        {this.renderJobs()}
      </div>
    );
  }
}