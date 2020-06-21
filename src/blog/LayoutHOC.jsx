import React, { Component } from 'react';

import Header from './components/header';
import Footer from './components/footer';

import './index.scss';

const LayoutHOC = WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <div id="stories-page">
          <Header />
          <WrappedComponent />
          <Footer />
        </div>
      );
    }
  }
};

export default LayoutHOC;
