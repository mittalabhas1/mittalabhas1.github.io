import React, { Component } from 'react';

import StoryCard from '../stories/card';

import './index.scss';

class Home extends Component {

  render() {
    return (
      <div id="body">
        <StoryCard title={'How Learning to Code Has Changed My Life'} details={'Hannah from Pittsburgh shares the profound impact learning to code has had on her life.'} coverImage={'a'} />
        <StoryCard title={'How Learning to Code Has Changed My Life'} details={'Hannah from Pittsburgh shares the profound impact learning to code has had on her life.'} />
        <StoryCard title={'How Learning to Code Has Changed My Life'} details={'Hannah from Pittsburgh shares the profound impact learning to code has had on her life.'} coverImage={'a'} />
      </div>
    );
  }
}

export default Home;
