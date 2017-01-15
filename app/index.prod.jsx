import React from 'react';
import ReactDOM from 'react-dom';

import App from 'container/App';
import configureStore from './store';

const appMount = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <App store={store} />,
  appMount);
