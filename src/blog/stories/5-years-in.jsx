import React from 'react';
import { generateImageURL } from '../util';

const slug = '5-years-in';

export default {
  title: '5 years in!',
  details:
    'Hello everyone! I am excited to finally introduce you to my first blog post.',
  coverImage: 'index.png',
  imgCredits: {
    link: 'http://www.freepik.com',
    title: 'Freepik'
  },
  slug,
  publishDate: 'June 21, 2020'
};

export const content = [
  'Continuing with various firsts of my life in this lockdown that even includes making samosas, I am overwhelmed to finally introduce you to my first blog post. I have been thinking about the topic of my first blog for a while now. Earlier this week, a LinkedIn notification popped up congratulating me on my 5th work anniversary. At that moment, I couldn’t believe the fact that I have been part of this industry for so long. Feeling nostalgic, the memory lane took me to my sophomore year at IIT Roorkee where it all began. What initially was my inquisitiveness and inclination towards coding, soon transformed into my passion and a definitive career choice. Just thought to pen down this exciting journey as my first blog post and say thanks to everyone without whom this wouldn’t have been possible!',
  "In 2013 (sophomore year), I decided to take up an internship in web development overlooking the next best options of playing cricket and watching football all summer. My offer letter said and I quote: “We are a budding start-up, you may be required to work a few extra hours a couple of times in a week”. I felt excited and anxious at the same time! Interestingly, my first stint involved developing an e-commerce website, vrety.com (non-functional now), using Magento. I learned CSS, jQuery and PHP that summer. My initial apprehensions about long work hours turned out to be a great learning experience. To my surprise, I was engaged in the process to an extent that I didn't realise, was spending around 16 hours everyday throughout 45 days of my internship. This stint was unique in its own way, not everyday you hear about people learning to develop the web at a “lingerie store”!",
  <div>
    <div
      className="image-wrapper right"
      style={{ marginTop: 20, marginBottom: 20 }}
    >
      <img
        src={generateImageURL('nikolatech.jpg', slug)}
        alt={'Nikola Tech Team'}
      />
      <small>Last day at Nikola Tech</small>
    </div>
    <div>
      In 2014 (junior year), I got this incredible opportunity to intern with a
      start-up, Nikola Tech. This journey started with the ablest mentors&nbsp;
      <a
        href="https://www.linkedin.com/in/vikrantpogula/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Vikrant Pogula
      </a>{' '}
      and{' '}
      <a
        href="https://www.linkedin.com/in/abhayana/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Abhishek Bhayana
      </a>{' '}
      (co-founders of Nikola Tech) alongside two dearest friends and elder
      brothers{' '}
      <a
        href="https://www.linkedin.com/in/vamshedhar/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Vamshedhar
      </a>{' '}
      (Vamshi) and{' '}
      <a
        href="https://www.linkedin.com/in/mehar-pratap-sandhu-4ab087101/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Mehar
      </a>
      . We worked on Angular 1, Django and had a few microservices in expressjs.
      This opportunity later converted into a pre placement offer. Given my love
      for the team and the tech stack, I made a difficult choice to skip the
      university placement season, kicking off my career at Nikola Tech. For a
      small team of 3 engineers, we felt a great sense of pride in building a
      product{' '}
      <a
        href="https://www.strawberrypos.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        (StrawberryPOS, the restaurant OS)
      </a>{' '}
      that catered to more than 300 restaurants across India.
    </div>
    <div
      className="image-wrapper mobile"
      style={{ marginTop: 20, marginBottom: 20 }}
    >
      <img
        src={generateImageURL('nikolatech.jpg', slug)}
        alt={'Nikola Tech Team'}
      />
      <small>Last day at Nikola Tech</small>
    </div>
  </div>,
  <div>
    <div>
      It was really hard to say goodbye to this amazing team after spending
      almost three years. When I took a strategic decision to pursue my next
      stint, I came across this fitting opportunity through my friend and then
      flatmate{' '}
      <a
        href="https://www.linkedin.com/in/prabhjotrai/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Prabhjot
      </a>{' '}
      who introduced me to{' '}
      <a
        href="https://www.flyhomes.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        Flyhomes, Inc.
      </a>{' '}
      In January 2017, when I first met{' '}
      <a
        href="https://www.linkedin.com/in/stephenmlane/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Stephen Lane
      </a>{' '}
      a.k.a Steve and{' '}
      <a
        href="https://www.linkedin.com/in/tushar-garg-a6837445/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Tushar Garg
      </a>{' '}
      (co-founders of Flyhomes), they wanted to{' '}
      <div className="image-wrapper left" style={{ marginTop: 20 }}>
        <img
          src={generateImageURL('flyhomes.jpg', slug)}
          alt={'Flyhomes Team'}
        />
        <small>Team Flyhomes</small>
      </div>
      hire me as a React Native developer, but I was determined to continue
      pursuing web development and since then, there has been no turning back. I
      was hired as a Full Stack Web Engineer and currently I’m the tech lead of
      Customer Acquisitions at Flyhomes. We use Ruby-on-Rails (ROR), React and
      Redux and I am really looking forward to working with{' '}
      <a
        href="https://www.linkedin.com/in/adichaturvedi/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Aditya
      </a>{' '}
      (my current manager) who recently joined the team. In April 2020, I
      completed three years with Flyhomes and it has been a joyride so far. I
      have had my fair share of ups and downs but as they all say, the pitfalls
      are soon forgotten when everything turns out well in the end.
    </div>
    <div className="image-wrapper mobile" style={{ marginTop: 20 }}>
      <img src={generateImageURL('flyhomes.jpg', slug)} alt={'Flyhomes Team'} />
      <small>Team Flyhomes</small>
    </div>
  </div>,
  <React.Fragment>
    Over the past five years, I have had some amazing colleagues who are now my
    close friends (
    <a
      href="https://www.linkedin.com/in/chinmayv/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Chinmay
    </a>
    ,{' '}
    <a
      href="https://www.linkedin.com/in/vivekverma1993/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Vivek
    </a>
    ,{' '}
    <a
      href="https://www.linkedin.com/in/prashant-shrivastava/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Prashant
    </a>
    ,{' '}
    <a
      href="https://www.linkedin.com/in/gurpreet-singh-a3b78486/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Gurpreet
    </a>
    ,{' '}
    <a
      href="https://www.linkedin.com/in/preetpal-singh-8b654b45/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Preetpal
    </a>{' '}
    and{' '}
    <a
      href="https://www.linkedin.com/in/mayank-katara-23879423/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Mayank
    </a>
    ) and incredible flatmates (
    <a
      href="https://www.linkedin.com/in/samveg/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Samveg
    </a>
    ,{' '}
    <a
      href="https://www.linkedin.com/in/hardikuppal/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Hardik
    </a>
    ,{' '}
    <a
      href="https://www.linkedin.com/in/tushar0837/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Batra
    </a>
    ,{' '}
    <a
      href="https://www.linkedin.com/in/viraattiwari/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Viraat
    </a>
    ,{' '}
    <a
      href="https://www.linkedin.com/in/pranjaldubey1993/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Pranjal
    </a>
    ,{' '}
    <a
      href="https://www.linkedin.com/in/tushar-saroch-454869134/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Tushar
    </a>{' '}
    and{' '}
    <a
      href="https://www.linkedin.com/in/samvibhaw-sinha-35ab7b64/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Jay
    </a>
    ). Special mention to my mentor, Steve who although was a hard task master
    but always inspired confidence and thrived excellence in me. It was a
    delight working with you, Steve!
  </React.Fragment>,
  <div className="image-wrapper">
    <img src={generateImageURL('flattie.jpg', slug)} alt={'Flatties'} />
    <small>Noida Flatmates</small>
  </div>,
  <React.Fragment>
    Thanks to my parents, my younger brother (
    <a
      href="https://www.linkedin.com/in/prayas26/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Prayas
    </a>
    ) and{' '}
    <a
      href="https://www.linkedin.com/in/guptaaditi1/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Aditi
    </a>{' '}
    who stood beside me, always!
  </React.Fragment>,
  '- ABM'
];
