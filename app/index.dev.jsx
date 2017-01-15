import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line

import App from 'container/App';
import configureStore from './store';

const appMount = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  appMount);

if (module.hot) {
  module.hot.accept('./container/App', () => {
    const NewApp = require('./container/App').default; // eslint-disable-line
    ReactDOM.render(
      <AppContainer>
        <NewApp store={store} />
      </AppContainer>,
      appMount);
  });
}
