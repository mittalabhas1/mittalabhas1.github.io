import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';

const rootElem = document.getElementById('root');

if (rootElem.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElem);
} else {
  ReactDOM.render(<App />, rootElem);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
