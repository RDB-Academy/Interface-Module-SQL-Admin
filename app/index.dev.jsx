import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';

import App from 'App';
import configureStore from './store';

const appMount = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  appMount );

if(module.hot) {
  module.hot.accept('./App', () =>{
    const NewApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <NewApp store={store} />
      </AppContainer>,
      appMount);
  });
}
